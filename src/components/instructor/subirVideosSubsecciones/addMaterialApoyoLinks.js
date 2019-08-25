import React, { Component } from 'react'
import URL from '../../../config'
import { ToastContainer, toast } from 'react-toastify';

import './addMaterialApoyo.css'
import { stringify } from 'querystring';
import { log } from 'util';

export default class addMaterialApoyoLinks extends Component{

    constructor(props){
        super(props)
            this.state={
                //  idVideo=this.props.idVideo}
                idVideo:this.props.idVideo,

                link:'',
                namelink:'',

                // alerts
                inputs:false,
                succes:null,
                resServer:null,
                info:null
            }   
    }

    onChangeInput(e){

        this.setState({
            [e.target.name]:e.target.value
        })
    }

    sendData(){
        if(this.props.idVideo){
            if(this.state.link!=='' && this.state.namelink!==''){
                // fetch para enviar los datos al servidor
                var data={
                    idVideo:this.props.idVideo,
                    nameLink:this.state.namelink,
                    link:this.state.link
                }
                console.log(data)
                
                var url=`${URL.UrlUploadLinks}`
                var params={
                    method:'POST',
                    body:JSON.stringify(data),
                    headers:{
                        'Content-Type': 'application/json'
                      }
                }
    
                fetch(url,params)
                 .then(res=>res.json())
                 .then(res=>{
                     console.log(res)
                     this.setState({succes:true})
                 })
                 .catch(err=>{
                     console.log({err,error:'No se guardaron los datos'})
                     this.setState({resServer:true})
                 })
    
    
            }else{
                console.log('comlete los campos vacios');
                
                this.setState({inputs:true})
            }
        }else{
            console.log('------primero suba el video')
            this.setState({
                info:true
            })
        }
    
    }

    renderAlert=()=>{

        if(this.state.inputs){
            // toast.warn("Comlete los campos vacios",{position:'top-left'})
            // this.setState({inputs:false})

            setTimeout(()=>{this.setState({
                inputs:false
                    })
                },7000)
            return(
                <div class=" text-info p-0" role="alert">
                    {/* <button  class="close" data-dismiss="alert">
                        <span aria-hidden="true">×</span>
                    </button> */}
                   ¡Comlete los campos vacios!

                </div>
            )
        }
        if(this.state.resServer){
            // toast.warn("ERROR: No se guardaron los datos",{position:'top-left'})
            // this.setState({resServer:null})
            setTimeout(()=>{this.setState({
                resServer:null
                    })
                },7000)
            return(
                <div class=" text-info p-0" role="alert">
                    {/* <button  class="close" data-dismiss="alert">
                        <span aria-hidden="true">×</span>
                    </button> */}
                   ERROR: No se guardaron los datos

                </div>
            )
        }

        if(this.state.succes){
            // toast.success("El Link se guardo correctamente",{position:'top-left'})
            setTimeout(()=>{this.setState({
                info:null
                    })
                },7000)
            return(
                <div class=" text-info p-0" role="alert">
                    {/* <button  class="close" data-dismiss="alert">
                        <span aria-hidden="true">×</span>
                    </button> */}
                   El Link se guardo correctamente

                </div>
            )
        }

        if(this.state.info){
            // toast.info("Antes de enviar el material de apoyo agregue un video",{position:'top-left'})
            // this.setState({info:null})
            setTimeout(()=>{this.setState({
                info:null
                    })
                },7000)
            return(
                <div class=" text-info p-0" role="alert ">
                    {/* <button  class="close" data-dismiss="alert">
                        <span aria-hidden="true">×</span>
                    </button> */}
                   !Antes de enviar el material de apoyo agregue un video¡

                </div>
            )
        }
    }

    render(){

        console.log(this.state)
        return(
            <div>

                    {/* <ToastContainer
                        position="top-left"
                        autoClose={5000}
                        hideProgressBar={true}
                        newestOnTop={false}
                        closeOnClick
                        rtl={false}
                        pauseOnVisibilityChange
                        draggable
                        pauseOnHover
                    /> */}


                    {/* modal fade */}
                <div class="" id="modalContactForm1" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
                    <div class="modal-dialog cascading-modal mt-5" id="from-modal-file" role="document">

                        <div class="modal-content" id="modal-content-from">

                            <div class="modal-header primary-color white-text">
                                <h4 class="title">
                                <i class="fas fa-link"></i>Añadir un link como material de apoyo</h4>

                                
                            
                            </div>
                            <div class="modal-body" id="modal-body-upload-material-apoyo">
                   {this.renderAlert()}

                            <h6>Puede agregar un link de descarga,video,etc..</h6>
                            <div class="md-form form-sm">
                                <input  type="text" value={this.state.link} onChange={this.onChangeInput.bind(this)}  name="link" class="custom-file-input" id="customFileLang" lang="in"></input>
                                <label  class="custom-file-label" for="customFileLang">{this.state.link}</label>
                            </div>

                                    
                                <div class="md-form form-sm">
                                    <input value={this.state.namelink} onChange={this.onChangeInput.bind(this)} name="namelink" type="text" id="materialFormEmailModalEx1" class="form-control form-control-sm" placeholder="Nombre del links"></input>
                                    <label for="materialFormEmailModalEx1"></label>
                                </div>


                                <div class="text-center mt-4 mb-2">
                                        <i class="fa fa-send ml-2"></i>

                                    <button onClick={this.sendData.bind(this)} class="btn btn-primary">Enviar link</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        )
    }


};