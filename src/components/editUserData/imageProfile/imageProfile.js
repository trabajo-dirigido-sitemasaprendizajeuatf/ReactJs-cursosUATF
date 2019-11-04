import React, { Component } from 'react'

import './imageProfile.css';
import imaUser from './img/default.png'

import URL from '../../../config'

import 'bootstrap/js/src/modal'
import $ from 'jquery'

export default class ImageProfile extends Component{
    constructor(props){
        super(props)
        this.state={

            linkFile:null,
            nameFile:'Seleccion una imagen'
        }

        this.myRef = React.createRef()
    }

    componentWillMount(){
        
        const url = `${URL.UrlShowImageAvatar}${localStorage.getItem('id')}`
        
        fetch(url)
        .then(data=>data.json())
        .then(res=>{
            console.log(res)
            console.log(res.message)
            if(!res.message){
                this.setState({
                    linkFile:res.linkAvatar
    
                })
            }
           
        })
    }


    onChange(){

        console.log(this.myRef.current.files[0])
        this.setState({
            nameFile:this.myRef.current.files[0].name.substr(0,30)
        })

    }

    SendData(){

        if(this.myRef.current.files.length>0){

            const url = `${URL.UrlUploadProfileUser}${localStorage.getItem('id')}`
            var formData = new FormData();
            formData.append('image', this.myRef.current.files[0])

            var params = {
                method:'POST',
                body:formData,
            }

            fetch(url,params)
            .then(data=>data.json())
            .then(respuesta=>{
                console.log(respuesta.linkfile)
                
                this.setState({
                    linkFile:respuesta.linkfile,
                    nameFile:'Seleccione una imagen'
                })

                
                // console.log(this.state.linkFile)
            })
            .catch(err=>{
                console.log(err)
            })
        }
        
        
    }

    renderModal=()=>{
        return(
            <div>
                <div class="modal fade" id="modalImageProfile" tabindex="-1" role="dialog" aria-labelledby="myModalLabel"
                aria-hidden="true">
                <div class="modal-dialog" role="document">
                    <div class="modal-content">
                    <div class="modal-header text-center pt-2 pb-2 border-0">
                        <h4 class="modal-title w-100 font-weight-bold"> </h4>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                        </button>
                    </div>

                    {/* <div class="card-content-image-file card">
                    <div class="containner-img view overlay">
                        <img class="img-fluid" src={imaUser} alt="Foto de usuario"  style={{height:'400px', width:'400px'}}  ></img>
                    </div>
                    <br/>
                    

                </div>   */}
                <div className="pl-5 pr-5">
                <div class="custom-file" style={{fontSize:'18px'}}>
                            <input onChange={this.onChange.bind(this)} ref={this.myRef} type="file" name="image" class="custom-file-input" id="customFileLang" lang="in"></input>
                            <label class="custom-file-label" for="customFileLang"> {this.state.nameFile} </label>
                    </div>
                </div>

                

                        <div class="modal-footer d-flex justify-content-center border-0 pt-2 pb-2">
                            <button class="btn btn-deep-orange" onClick={this.SendData.bind(this)}>Guradar imagen de perfil</button>
                        </div>

                    
                    </div>
                </div>
            </div>


            </div>
        )
    }

 

    render(){

        return(
            <div>
                
                {this.renderModal()}

                <div className="content-image-profile">
                    <p class="title-image-data-user h4 mb-4 text-left">Foto de perfil</p>

                    <div class="card-content-image-file card">

                    <div class="containner-img view overlay">
                        <img class="img-fluid" src={ this.state.linkFile? this.state.linkFile:imaUser} alt="Foto de usuario"  style={{height:'400px', width:'400px'}}  ></img>
                
                    </div>

                    <div class="card-body">

                        <h4 class="card-title">Foto de perfil de usuario</h4>
                        <p class="card-text">Se recomienda que la foto o imagen de perfil tenga las siguinetes dimenciones 400 x 400 px.</p>
                       
                        <a href="#" class="btn btn-info" data-toggle="modal" data-target="#modalImageProfile">Cambior foto de perfil</a>

                    </div>

                    </div>
                </div>
               
            </div>
        )
    }
}