import React, { Component } from 'react'
// import 'jquery'
import $ from 'jquery'

import Config from '../../config'

class Signin extends Component{

    constructor(props){
        super(props)
            this.state={
                email:'',
                password:'',
                loginok:'',
                error:'',
                campos:''

            }
            this.send=this.send.bind(this)
    }

    onChange(e){
        console.log(e.target.value)

        this.setState({
            [e.target.name]:e.target.value
        })
    }

    send(e){
        //e.preventDefault  eviat que el submit del btn recargaue la pagina antes de enviar
        e.preventDefault()
        
        const loginUser={
            email:this.state.email,
            password:this.state.password
        }

        var Url = Config.urlLognin
        var params = {
            method:'POST',
            body:JSON.stringify(loginUser),
            headers:{
                'Content-type':'application/json'                
            }
        }

        if(this.state.email!=='' && this.state.password!==''){
                console.log('complete los datos vacios')
                fetch(Url,params)
                    .then(res=>res.json())
                    .then(res=>{
                        console.log(res)
                        if(res.err){
                            console.log(res.err.message+'===>')
                            this.setState({
                                error:'Email o password incorrectos',
                                loginok:'',
                                campos:''
                            })
                        }if(res.message){
                            //Asignando al localStorage el token al momento del login-------npm startdfgdfg
                            console.log(res.token);
                            localStorage.setItem('token',res.token)
                            localStorage.setItem('id',res.id)
                            this.props.updateToken2(res.name, res.email, res.role);    ////--->>> funcion que recibe del padre como parametro

                            console.log('Inicio de session adecuado')
                            this.setState({
                                loginok:'incio de sesion correcto',
                                error:'',
                                campos:'',
                                email:'',
                                password:'',

                            })
                            //codigo de jquery  cerrar modal signin
                            
                        }
                    })
        }else{
            console.log('complete los campos vacios')
            this.setState({
                campos:'complete  los campos vacios',
                error:'',
                loginok:''

            })
        }




        
        console.log(loginUser)
    }

    renderAlert(e){
        // console.log('renderAlert')
        if(this.state.error){
            return(
                <div className="alert alert-danger" role="allert">
                        { this.state.error }
                </div>
            )
        }if(this.state.loginok){
            return(
                <div className="alert alert-success" role="allert">
                            { this.state.loginok }
                </div>
            )
        }

    }
    
    renderCampos(){
        if(this.state.campos){
            return(
                <div className="alert alert-danger" role="alert">
                    { this.state.campos }
                </div>
            )
        }else{

        }
        
    }

    render(){

        return(
            
            <div>
             <form onSubmit={this.send} className="text-center border border-light p-5">
                 {/* class="modal fade" */}
                <div    class="modal fade"     id="modalLoginForm" tabindex="-1" role="dialog" aria-labelledby="myModalLabel"
                    aria-hidden="true">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                        <div className="modal-header text-center">
                            <h4 className="modal-title w-100 font-weight-bold">Sign in</h4>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                            </button>


                        </div>
                            {this.renderAlert()}
                            {this.renderCampos()}

                        <div className="modal-body mx-3">
                            <div className="md-form mb-5">
                            <input value={this.state.email} onChange={this.onChange.bind(this)} name="email" type="text" id="defaultForm-email" className="form-control validate" placeholder="Introduzca su correo electronico"></input>
                            </div>

                            <div className="md-form mb-4">
                            <input  value={this.state.password}  onChange={this.onChange.bind(this) } name="password" type="password" id="defaultForm-pass" className="form-control validate" placeholder="Introduzca su clave o contraseña"></input>
                            </div>

                        </div>
                        <div className="modal-footer d-flex justify-content-center">
                            <button type="submit" className="btn btn-default">Login</button>
                        </div>
                        </div>
                    </div>
                    </div>

                    {/* <div class="text-center">
                    <a href="" class="btn btn-default btn-rounded mb-4" data-toggle="modal" data-target="#modalLoginForm">Launch
                        Modal Login Form</a>
                    </div>  */}
                    </form>
            </div>
                
        )
    }
}

export default Signin