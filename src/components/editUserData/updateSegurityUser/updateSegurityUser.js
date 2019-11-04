import React, { Component } from 'react'

import './updateSegurityUser.css'
import URL from '../../../config'

import 'bootstrap/js/src/modal'
import $ from 'jquery'
import { timeout } from 'q'

export default class UpdateSegurityUser extends Component{
    constructor(props){
        super(props)
        this.state={
            objDataUser:[],

            emailCI:'',
            passwordClaveM:'',

            inputPassword:'',
            inputPassword2:'',

            newInputPassword1:'',
            newInputPassword2:'',

            email:null,
            password:null,
            ci:null,
            claveMatricula:null,
        
            pwDefualt:'********',

            // varibles alerts
            alertSucces:false,
            alertDanger:false,

            alertSuccesPassword:false,
            alertDangerPassword:false,
            alertDangerInputs:false


        }
        this.renderAlert=this.renderAlert.bind(this)
    }

    renderAlert(){
        
       
        if(this.state.alertSucces){
            
            setTimeout(()=>{this.setState({
                alertSucces:false
                    })
                },5000)

            return(
                <div class="alert alert-success pt-1 pb-1 mb-0" role="alert">
                    Se actualizo correctamente
                </div>
            )
        }
       
        if(this.state.alertDanger){
            
            setTimeout(()=>{this.setState({
                alertDanger:false
                    })
                },5000)

            return(
                <div class="alert alert-danger pt-1 pb-1 mb-0" role="alert">
                    Contraseña incorrecta
                </div>
            )
        }
        

    }

    renderAlertPassowrdClaveM(){
        
       
        if(this.state.alertSuccesPassword){
            
            setTimeout(()=>{this.setState({
                alertSuccesPassword:false
                    })
                },5000)

            return(
                <div class="alert alert-success pt-1 pb-1 mb-0" role="alert">
                    Se actualizo correctamente
                </div>
            )
        }
       
        if(this.state.alertDangerPassword){
            
            setTimeout(()=>{this.setState({
                alertDangerPassword:false
                    })
                },5000)

            return(
                <div class="alert alert-danger pt-1 pb-1 mb-0" role="alert">
                    Contraseña actual incorrecta
                </div>
            )
        }

        // alertDangerInputs
        if(this.state.alertDangerInputs){
            
            setTimeout(()=>{this.setState({
                alertDangerInputs:false
                    })
                },5000)

            return(
                <div class="alert alert-danger pt-1 pb-1 mb-0" role="alert">
                    La nueva contraseñas no coinciden
                </div>
            )
        }

    }

    componentWillMount(){
        const url = `${URL.UlrShowDataUser}${localStorage.getItem('id')}`

        console.log(url)


        fetch(url)
        .then(data=>data.json())
        .then(res=>{
            console.log(res)
            if(res.email){
                this.setState({
                    objDataUser:res,
    
                    emailCI:res.email,
                    passwordClaveM:res.password,

                    email:res.email,
                    password:res.password,
                    
                })
            }

            if(res.ci){
                this.setState({
                    objDataUser:res,
    
                    emailCI:res.ci,
                    passwordClaveM:res.claveMatricula,

                    ci:res.ci,
                    claveMatricula:res.claveMatricula,
                    
                })
            }
           
        })
        .catch(err=>{
            console.log(err)
        })
    }

    
    onChange(e){

        console.log(e.target.value)

        this.setState({
            [e.target.name]:e.target.value
        })
    }


    showModals(){
        console.log('llego---')
        $('#modalUpdateEmailCI').modal('show')
    }

    showModals2(){
        console.log('llego---')
        $('#modalUpdatePasswordClaveM').modal('show')
    }

    saveDataEmail(e){
        console.log('llego')

        console.log(this.state.claveMatricula)
        console.log(this.state.inputPassword)

        if(this.state.ci){
            if(this.state.claveMatricula===this.state.inputPassword){
                
                console.log('ci -- se guardaron los cambios')
                console.log(this.state)
                
                const newEmail ={
                    idUser:localStorage.getItem('id'),
                    newEmailCI:this.state.emailCI
                }

                const url = URL.UrlUpdateEmailCI;
                const params={
                    method:'PUT',
                    body:JSON.stringify(newEmail),
                    headers:{
                        'Content-Type': 'application/json'
                      }
                }
                fetch(url,params)
                .then(data=>data.json())
                .then(r=>{
                    console.log(r)
                    this.setState({
                        inputPassword:'',
                        alertSucces:true
                    })
                })
                .catch(err=>{
                    console.log(err)
                })

            }
            else{
                console.log('ci -- contraseña incorrecta')
                this.setState({
                    alertDanger:true,
                    inputPassword:''
                })
                
            }
        }

        if(this.state.email){
            if(this.state.password===this.state.inputPassword){
                console.log('email -- se guardaron los cambios')

                const newEmail ={
                    idUser:localStorage.getItem('id'),
                    ci:this.state.ci,
                    newEmailCI:this.state.emailCI
                }
                console.log(newEmail)

                const url = URL.UrlUpdateEmailCI;
                const params={
                    method:'PUT',
                    body:JSON.stringify(newEmail),
                    headers:{
                        'Content-Type': 'application/json'
                      }
                }
                fetch(url,params)
                .then(data=>data.json())
                .then(r=>{
                    console.log(r)
                    
                })
                .catch(err=>{
                    console.log(err)
                })

                
            }
            else{
                console.log('email -- contraseña incorrecta')
            }
        }
    }

    saveNewPassword(){

        console.log(this.state.password)
        console.log(this.state.inputPassword2)
        console.log(this.state.newInputPassword1)
        console.log(this.state.newInputPassword2)

        if(this.state.ci){
            if(this.state.claveMatricula===this.state.inputPassword2){
                console.log('ci-->contraseña correcta')
                if(this.state.newInputPassword1===this.state.newInputPassword2 & this.state.newInputPassword1!='' & this.state.newInputPassword2!='' ){
                    console.log('ci-->las nuevas contrseñas coinciden')
                    const newPassowrdClaveM ={
                        idUser:localStorage.getItem('id'),
                        ci:this.state.ci,
                        actualPassword:this.state.claveMatricula,
                        newPasswordClaveM:this.state.newInputPassword1
                    }
                    console.log(newPassowrdClaveM)

                    const url = URL.UrlUpdatPasswordClveM;
                    const params={
                        method:'PUT',
                        body:JSON.stringify(newPassowrdClaveM),
                        headers:{
                            'Content-Type': 'application/json'
                          }
                    }
                    fetch(url,params)
                    .then(data=>data.json())
                    .then(r=>{
                        console.log(r)
                        this.setState({
                            alertSuccesPassword:true,
                            inputPassword2:'',
                            newInputPassword1:'',
                            newInputPassword2:''
                        })
                        
                    })
                    .catch(err=>{
                        console.log(err)
                    })

                    
                }else{
                    console.log('ci-->las nuevas contraseñas no coinciden  o los campos estam vacios')
                    this.setState({
                        alertDangerInputs:true
                    })
                    
                }
            }else{
                console.log('ci-->contraseña incorrecta')
                this.setState({
                    alertDangerPassword:true
                })
            }
        }

        if(this.state.email){
            if(this.state.password===this.state.inputPassword2){
                console.log('email-->contraseña actual es correcta')

                if(this.state.newInputPassword1===this.state.newInputPassword2 & this.state.newInputPassword1!='' & this.state.newInputPassword2!='' ){
                    console.log('email-->las nuevas contrseñas coinciden')
                    const newPassowrdClaveM ={
                        idUser:localStorage.getItem('id'),
                        ci:this.state.ci,
                        actualPassword:this.state.password,
                        newPasswordClaveM:this.state.newInputPassword1
                    }
                    console.log(newPassowrdClaveM)

                    const url = URL.UrlUpdatPasswordClveM;
                    const params={
                        method:'PUT',
                        body:JSON.stringify(newPassowrdClaveM),
                        headers:{
                            'Content-Type': 'application/json'
                          }
                    }
                    fetch(url,params)
                    .then(data=>data.json())
                    .then(r=>{
                        console.log(r)
                        this.setState({
                            alertSuccesPassword:true,
                            inputPassword2:'',
                            newInputPassword1:'',
                            newInputPassword2:''
                        })
                        
                    })
                    .catch(err=>{
                        console.log(err)
                    })


                }else{
                    console.log('email-->las nuevas contraseñas no coinciden  o los campos estam vacios')
                    this.setState({
                        alertDangerInputs:true
                    })
                    
                }
                
            }else{
                console.log('email-->contraseña actual es incorrecta')
                this.setState({
                    alertDangerPassword:true
                })
            }

        }


    }

    RenderModalEmailCI=()=>{
        return(
            <div>
                <div class="modal fade" id="modalUpdateEmailCI" tabindex="-1" role="dialog" aria-labelledby="myModalLabel"
                aria-hidden="true">
                <div class="modal-dialog" role="document">
                    <div class="modal-content">
                    <div class="modal-header text-center pt-2 pb-2 border-0">
                        <h4 class="modal-title w-100 font-weight-bold"> </h4>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                {this.renderAlert()}

                <label className="labels-form-email">{this.state.ci?'Modificar CI':'Cambiar tu correo electronico'}</label>
                <div className="pl-5 pr-5">
                <div class="custom-file" style={{fontSize:'18px'}}>
                    <input type="email" 
                            name="emailCI" onChange={this.onChange.bind(this)} value={this.state.emailCI}
                            id="defaultLoginFormEmail"
                            class="form-control mb-4" 
                            placeholder="E-mail"
                    >
                    </input>
                </div>
                </div>

                <label className="labels-form-email">{this.ci?'Introduzca su contraseña (Clave matricula) para guardar los cambios':'Introduzca su contraseña para gurdar los cambios'}</label>
                <div className="pl-5 pr-5">
                <div class="custom-file" style={{fontSize:'18px'}}>
                    <input type="password" 
                            name="inputPassword" onChange={this.onChange.bind(this)} value={this.state.inputPassword}
                            id="defaultLoginFormEmail"
                            class="form-control mb-4" 
                            
                    >
                    </input>
                </div>
                </div>

                

                        <div class="modal-footer d-flex justify-content-center border-0 pt-2 pb-2">
                            <button onClick={this.saveDataEmail.bind(this)} class="btn btn-deep-orange" >Guradar cambios</button>
                        </div>

                    
                    </div>
                </div>
            </div>


            </div>
        )
    }


    RenderModalPasswordClaveM=()=>{
        return(
            <div>
                <div class="modal fade" id="modalUpdatePasswordClaveM" tabindex="-1" role="dialog" aria-labelledby="myModalLabel"
                aria-hidden="true">
                <div class="modal-dialog" role="document">
                    <div class="modal-content">
                    <div class="modal-header text-center pt-2 pb-2 border-0">
                        <h4 class="modal-title w-100 font-weight-bold"> </h4>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                        </button>
                    </div>

                    {this.renderAlertPassowrdClaveM()}

                    <label className="labels-form-email">{this.state.ci?'Introduzca la contraseña (Clave matricula) actual':'Introduzca la contraseña actual'}</label>
                <div className="pl-5 pr-5">
                <div class="custom-file" style={{fontSize:'18px'}}>
                    <input type="password" 
                            name="inputPassword2" onChange={this.onChange.bind(this)} value={this.state.inputPassword2}
                            id="defaultLoginFormEmail"
                            class="form-control mb-4" 
                            placeholder="Contraseña actual"
                    >
                    </input>
                </div>
                </div>

                <label className="labels-form-email">{this.ci?'Introduzca la nueva contraseña (Clave matricula) ':'Introduzca la nueva contraseña'}</label>
                <div className="pl-5 pr-5">
                <div class="custom-file" style={{fontSize:'18px'}}>
                    <input type="password" 
                            name="newInputPassword1" onChange={this.onChange.bind(this)} value={this.state.newInputPassword1}
                            id="defaultLoginFormEmail"
                            class="form-control mb-4" 
                            
                    >
                    </input>
                </div>
                </div>

                <label className="labels-form-email">{this.ci?'Repita la nueva contraseña (Clave matricula) ':'Repita la nueva contraseña'}</label>
                <div className="pl-5 pr-5">
                <div class="custom-file" style={{fontSize:'18px'}}>
                    <input type="password" 
                            name="newInputPassword2" onChange={this.onChange.bind(this)} value={this.state.newInputPassword2}
                            id="defaultLoginFormEmail"
                            class="form-control mb-4" 
                            
                    >
                    </input>
                </div>
                </div>
                



                        <div class="modal-footer d-flex justify-content-center border-0 pt-2 pb-2">
                            <button onClick={this.saveNewPassword.bind(this)} class="btn btn-deep-orange" >Guradar cambios</button>
                        </div>

                    
                    </div>
                </div>
            </div>


            </div>
        )
    }

    render(){
       

        if(this.state.objDataUser){
          
            return(
                <div >
                    {this.RenderModalEmailCI()}
                    {this.RenderModalPasswordClaveM()}

                    <div className="content-form-user-update-security">
                        {/* border border-light */}
                        <form class="text-left  p-5" action="#!">
    
                            <p class="h4 mb-4 text-left">Configuracion de seguridad</p>
                            
                

                            <label className="labels-form">Correo electronico o CI</label>

                            <div class="input-group mb-3">
                                <input type="text" class="form-control"
                                        name="name" onChange={this.onChange.bind(this)} value={this.state.emailCI}
                                        placeholder="Recipient's username" 
                                        aria-label="Recipient's username"
                                        aria-describedby="button-addon2" >

                                </input>
                                <div class="input-group-append">
                                    <button onClick={this.showModals.bind(this)} class="btn btn-md btn-outline-default m-0 px-3 py-2 z-depth-0 waves-effect" type="button" id="button-addon2" data-target="#modalUpdateEmailCI">
                                        <i class="fas fa-pen text-green"></i>
                                    </button>
                                </div>
                            </div>

                            
                            <label className="labels-form">Contrasena o Clave de matricula</label>
                            <div class="input-group mb-3">
                                <input type="password" 
                                    value={this.state.pwDefualt}
                                    class="form-control" 
                                    placeholder="Recipient's username" 
                                    aria-label="Recipient's username"
                                    aria-describedby="button-addon2"
                                >
                                </input>
                                <div class="input-group-append">
                                    <button class="btn btn-md btn-outline-default m-0 px-3 py-2 z-depth-0 waves-effect" 
                                        onClick={this.showModals2.bind(this)}
                                        type="button" id="button-addon2"
                                    >
                                    <i class="fas fa-pen text-green"></i>
                                    </button>
                                </div>
                            </div>
    
                        </form>
                    </div>
                   
                </div>
            )
        }else{
            return(
                <div>
                    loding..
                </div>
            )
        }
        
    }
}