import React, { Component } from 'react'
import './login.css'
import './signup.css' 

import Config from '../../config'
class Signup extends Component{

    constructor(props){
        super(props)
            this.state={
                name:'',
                lastname:'',
                email:'',
                password:'',
                phone:'',
                erroremail:'',
                responoseLogin:'',
                compliteData:''

            }
            //this.onChange = this.onChange.bind(this)
            this.send=this.send.bind(this)
            
    }

    send(e){
        e.preventDefault()
        //console.log(this.state)


        const newUser={
            name:this.state.name,
            lastname:this.state.lastname,
            email:this.state.email,
            password:this.state.password,
            phone:this.state.phone
        }
        
        var Url=Config.Url,
            params={
                method:'POST',
                body:JSON.stringify(newUser),
                headers:{
                    'Content-type':'application/json'
                }

            }
        if(this.state.name!=='' && this.state.lastname!=='' && this.state.email!=='' && this.state.password!==''&&this.state.phone!==''){
            console.log('rgistro realizado exitosamente')

            this.setState({
                compliteData:''
            })

            fetch(Url,params)
            .then(res=>res.json())
            .then(res=>{
                console.log(res)

                if(res){
                    if(res.message){
                        console.log(res.message)
                        this.setState({
                            erroremail:res.message,
                            responoseLogin:''

                        })
                    }if(res.token){
                            this.setState({
                                responoseLogin:'Registro realizado correctamente',
                                erroremail:''
                            })
                    }
                }
            })
        }else{
            console.log('complete los campos vacios')
            this.setState({
                compliteData:'Complete los campos vacios'
            })
        }

        
        console.log(Config.Url)

    }



    onChange(e){
        // console.log(e.target.value)

        this.setState({
            [e.target.name]:e.target.value
        })
    }

    //renderiza una alerta correcta o incorrecta
    renderAlert(){
        // if(){
            
        // }

        if(!this.state.erroremail){
            if(this.state.responoseLogin){
                return(
                    <div className="alert alert-success" role="alert">
                        {this.state.responoseLogin}
                    </div>
                )
            }
        }else{
            return(
                <div className="alert alert-danger" role="alert">
                    {this.state.erroremail}
                </div>
            )
        }

      
    }

    renderCampos(){

        if(this.state.compliteData){
            return(
                <div className="alert alert-danger" role="alert">
                     {this.state.compliteData}
                </div>
            )
        }else{
           
        }
    }

    render(){

        return(
            
            <div>
                {/* class="modal fade" */}
             <div  className="modal fade"    id="modalRegisterForm" tabindex="-1" role="dialog" aria-labelledby="myModalLabel"
                aria-hidden="true">
                <div className="modal-dialog" role="document">
                    
                        <div className="content-from-signup modal-content ">
                        <div className="bg-imagen-signup">

                            <div className="modal-header text-center text-white">
                                <h4 className="modal-title w-100 font-weight-bold">Sign up</h4>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                                </button>
                            </div>

                            {this.renderAlert()}
                            {this.renderCampos()}

                            {/* formulario de signup */}
                            <form onSubmit={this.send} className="text-center text-white  p-5">

                                <div className="form-row mb-4">
                                    <div className="group-signup md-form mb-2 ">
                                        {/* <label htmlFor="">Nombre</label> */}
                                        <input value={this.state.name} onChange={this.onChange.bind(this)} name="name" type="text" id="defaultRegisterFormFirstName" className="form-control" placeholder="Nombre"></input>
                                        
                                    </div>
                                    <div className="group-signup w-responsive md-form mb-2">
                                        <input value={this.state.lastname} onChange={this.onChange.bind(this)} name="lastname"  type="text" id="defaultRegisterFormLastName" className="form-control" placeholder="Apellido Paterno"></input>
                                        
                                    </div>
                                </div>

                                <div className="group-signup md-form mb-2">
                                    <input value={this.state.email} onChange={this.onChange.bind(this)} name="email" type="email" id="defaultRegisterFormEmail" className="form-control mb-4" placeholder="E-mail "></input>

                                </div>

                                <div className="group-signup md-form mb-2" >
                                    <input  value={this.state.password} onChange={this.onChange.bind(this)} name="password" type="password" id="defaultRegisterFormPassword" className="form-control" placeholder="Contraseña o clave" aria-describedby="defaultRegisterFormPasswordHelpBlock"></input>
                                    <small id="defaultRegisterFormPasswordHelpBlock" className="form-text text-muted mb-4">
                                            Al menos 8 caracteres y 1 digito.
                                    </small>
                                </div>

                                <div className="group-signup md-form mb-2">

                                    <input name="phone" value={this.state.phone} onChange={this.onChange.bind(this)} type="number" id="defaultRegisterPhonePassword" className="form-control" placeholder="Numero de celular" aria-describedby="defaultRegisterFormPhoneHelpBlock"></input>
                                    
                                    <small id="defaultRegisterFormPhoneHelpBlock" className="form-text text-muted mb-4">
                                        Opcional - forma 2 de registro
                                    </small>
                                </div>


                                {/* <div class="custom-control custom-checkbox">
                                    <input type="checkbox" class="custom-control-input" id="defaultRegisterFormNewsletter"></input>
                                    <label class="custom-control-label" for="defaultRegisterFormNewsletter">Subscribe to our newsletter</label>
                                </div> */}


                                {/* <button class="btn btn-info my-4 btn-block" type="submit">Sign in</button> */}


                                <p>or sign up with:</p>

                                <a type="button" className="light-blue-text mx-2">
                                    <i className="fab fa-facebook-f"></i>
                                </a>
                                <a type="button" className="light-blue-text mx-2">
                                    <i className="fab fa-twitter"></i>
                                </a>
                                <a type="button" className="light-blue-text mx-2">
                                    <i className="fab fa-linkedin-in"></i>
                                </a>
                                <a type="button" className="light-blue-text mx-2">
                                    <i className="fab fa-github"></i>
                                </a>
                                
                                {/* ---formulario de signup----- */}

                                <div className=" modal-footer d-flex justify-content-center">
                                    <button id="send"name="send" type="submit" className="btn-form-signUp btn btn-deep-orange">Sign up</button>
                                </div>
                            </form>
                            </div>
                    </div>
                </div>
                </div>

            </div>
                
        )
    }
}

export default Signup