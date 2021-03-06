import React, {Component } from 'react'

import './backup.css'
import URL from '../../../config'

export default class Backup extends Component{
 
    constructor(props){
        super(props)
        this.state={
            email:'admin@gmail.com',
            password:'admin',

            inputEmail:'',
            inputPassword:'',

            respuesta:'',
            progresBar:false,
            progress:0,

            messageOk:false
        }

        // this.onChange=this.onChange.bind(this)
    }

    peticion(e){
        e.preventDefault()

        console.log('llego la peticion')
        if(this.state.inputEmail ===this.state.email && this.state.password===this.state.inputPassword){
            
            var Url = URL.UrlBackup

            fetch(Url)
            .then(res=>res.json())
            .then(res=>{
                console.log(res)
                this.setState({
                    respuesta:'ok',
                    inputEmail:'',
                    inputPassword:'',
                    progresBar:true
                    
                })
            })
            .catch(err=>{
                console.log(err)
            })
        }else{
            console.log('password o email incorrectos')
        }

    }

    onChange(e){
        
        console.log(e.target.value)
        this.setState({
            [e.target.name]:e.target.value
        })
    }



    renderProgresBar=()=>{

        if(this.state.progresBar){

        setTimeout(()=>{
            this.setState({
                progresBar:false,
                messageOk:true
            })
        },7000)

        var cont=0
       var i = setInterval(() => {
            cont=cont+20
            // console.log(cont)
            
            if(this.state.progress>=100){
                clearInterval(i)
            }else{
                console.log(this.state.progress)
                this.setState({
                    progress:cont
                })
            }
        }, 1000);

                return(
                    <div className="mb-3">
                        <span className="center">Progreso de realizacion de backup</span>
                        <div class="progress">
                        <div class="progress-bar" role="progressbar" style={{width: `${this.state.progress}%`}} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                    </div>
                )
        }
        
    }

    renderAlert=()=>{
        if(this.state.messageOk){
            setTimeout(() => {
                this.setState({
                    messageOk:false
                })
            }, 7000);

            return(
                <div className="alert alert-info" role="alert">
                     <i class="fas fa-clipboard-check"></i>   Se realizo el backup correctamnete
                </div>
            )
        }
    }

    render(){
        return(
            <div className="content-upload">
                <div className="content-form-scraping">
                        
                    <form class="text-center border border-light p-5 z-depth-1" action="#!">
                        <p class="h4 mb-4">Realizar backup de la Base de datos MongoDB</p>

                        <input name='inputEmail' onChange={this.onChange.bind(this)}  value={this.state.inputEmail} type="email" id="defaultSubscriptionFormPassword" class="form-control mb-4" placeholder="Correo electronico"></input>
                        <input name='inputPassword' onChange={this.onChange.bind(this)} value={this.state.inputPassword} type="password" id="defaultSubscriptionFormEmail" class="form-control mb-4" placeholder="contraseña"></input>
                        {this.renderProgresBar()}
                        {this.renderAlert()}
                        <button onClick={this.peticion.bind(this)} class="btn btn-info btn-block">Iniciar el backup</button>
                    </form>
                </div>
            </div>
        )
    }
}