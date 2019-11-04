import React, { Component } from 'react'

import './userProfile.css'
import URL from '../../../config'

export default class UserProfile extends Component{
    constructor(props){
        super(props)
        this.state={
            objDataUser:[],

            role:'',
            name:'',
            lastname:'',
            motherlastename:'',
            phone:null,



        }
    }


    componentWillMount(){
        const url = `${URL.UlrShowDataUser}${localStorage.getItem('id')}`

        console.log(url)


        fetch(url)
        .then(data=>data.json())
        .then(res=>{
            console.log(res)
            this.setState({
                objDataUser:res,

                role:res.role,
                name:res.name,
                lastname:res.lastname,
                motherlastename:res.motherlastename,
                phone:res.phone,
            })
        })
        .catch(err=>{
            console.log(err)
        })
    }

    
    onChamge(e){

        console.log(e.target.value)

        this.setState({
            [e.target.name]:e.target.value
        })
    }

    sendData(){

        const url = URL.UrlEditDataUser;

        const newObjDataUser={
                idUser:localStorage.getItem('id'),
                role:this.state.role,
                name:this.state.name,
                lastname:this.state.lastname,
                motherlastename:this.state.motherlastename,
                phone:this.state.phone,

            }
        const  params={
            method:'PUT',
            body:JSON.stringify(newObjDataUser),
            headers:{
                'Content-type':'application/json'
            }
        }

        fetch(url,params)
        .then(data=>data.json())
        .then(res=>{
            console.log(res)
        })
        .catch(err=>{
            console.log(err)
        })
    }


    render(){
       

        if(this.state.objDataUser){
          
            return(
                <div >
                    <div className="content-form-user-profile">
                        {/* border border-light */}
                        <form class="text-left  p-5" action="#!">
    
                            <p class="h4 mb-4 text-left">Configuracion basica</p>
                            
                            <label className="labels-form">Nombres</label>
                            <input type="text" id="defaultLoginFormEmail" name="name" onChange={this.onChamge.bind(this)} value={this.state.name} class="form-control mb-2"></input>
                            
                            <label className="labels-form">Paterno</label>
                            <input type="text" id="defaultLoginFormEmail" name="lastname" onChange={this.onChamge.bind(this)} value={this.state.lastname} class="form-control mb-2"></input>
    
                            <label className="labels-form">Materno</label>
                            <input type="text" id="defaultLoginFormEmail" name="motherlastename" onChange={this.onChamge.bind(this)} value={this.state.motherlastename} class="form-control mb-2"></input>
    
                            <label className="labels-form">Telefono</label>
                            <input type="text" id="defaultLoginFormEmail" name="phone" onChange={this.onChamge.bind(this)} value={this.state.phone} class="form-control mb-2"></input>
    
                        
                            <div class="btn-user-profile text-center">
                                <button class="btn btn-info" onClick={this.sendData.bind(this)} type="submit">Guardar cambios</button>
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