import React, { Component } from 'react'

import './studentScraping.css'
import URL from '../../../config'

export default class StudentScraping extends Component{

    constructor(props){
        super(props)
        this.state={
            email:'admin@gmail.com',
            password:'admin',
            inputEmail:'',
            inputPassword:'',

            respuesta:'',
            progresBar:false,
            progress:0
        }

        // this.onChange=this.onChange.bind(this)
    }

    peticion(e){
        e.preventDefault()

        console.log('llego la peticion')
        if(this.state.inputEmail ===this.state.email && this.state.password===this.state.inputPassword){
            
            var Url = URL.UrlUploadStudentMongoDB
           
            fetch(Url)
            .then(res=>res.json())
            .then(res=>{
                console.log(res.update)
                this.setState({
                    respuesta:res.update,
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
                progresBar:false
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
                        <span className="center">auctualizando la base de datos</span>
                        <div class="progress">
                        <div class="progress-bar" role="progressbar" style={{width: `${this.state.progress}%`}} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                    </div>
                )
        }
        
    }

    render(){
        return(
            <div className="content-upload">

                <div className="content-form-scraping">
                        
                    <form class="text-center border border-light p-5 z-depth-1" action="#!">
                        <p class="h4 mb-4">Importar la lista de estudiantes</p>
                
                        <input name='inputEmail' onChange={this.onChange.bind(this)}  value={this.state.inputEmail} type="email" id="defaultSubscriptionFormPassword" class="form-control mb-4" placeholder="Correo electronico"></input>
                        <input name='inputPassword' onChange={this.onChange.bind(this)} value={this.state.inputPassword} type="password" id="defaultSubscriptionFormEmail" class="form-control mb-4" placeholder="contraseña"></input>
                        {this.renderProgresBar()}
                        
                        <button onClick={this.peticion.bind(this)} class="btn btn-info btn-block">Importar lista</button>
                    </form>
                </div>
            </div>
        )
    }
}