import React, { Component } from 'react'
import Url from '../../../config'
import { ToastContainer, toast } from 'react-toastify';


import './addMaterialApoyo.css'
export default class addMaterialApoyo extends Component{

    constructor(props){
        super(props)
            this.state={
                idVideo:this.props.idVideo,
                obSeccion:[],
                nameFile:'',
                file:'',
                filenameinput:'',

                // alerts Variables
                warArchivo:null,
                inputs:null,
                info:null,
                succes:null
            }

            this.myRef=React.createRef();
    }

    onChangefile(e){
        
        console.log(this.myRef)
        console.log(this.myRef.current.files[0].name);

        this.setState({
            file:this.myRef.current.files[0],
            nameFile:this.myRef.current.files[0].name
        })
        
    }

    onChangeInput(e){

        this.setState({
            [e.target.name]:e.target.value
        })
    }

    sendData=(e)=>{
        
        console.log(this.props.idVideo);
        
        console.log('llego los datos')
    // http://localhost:3005/Upload/file/Materia/Apoyo/idVideo=5d20d5a71b6a092c1408243c/filename=este es el nombre del file
        
        var url=`${Url.UrlUploadMaterialSupport}/idVideo=${this.props.idVideo}/filename=${this.state.filenameinput}`

        
        
        
        if(this.state.file!=='' && this.state.filenameinput!==''){
            var tipoArchivo=this.myRef.current.files[0].type
            console.log(tipoArchivo);
            
            if(tipoArchivo === 'text/plain' || tipoArchivo === 'application/pdf' || tipoArchivo === 'application/msword' || tipoArchivo==='image/jpeg' || tipoArchivo==='image/png'){

             //fecth que envia los archivos al servidor
                
                const formdata = new FormData()
                formdata.append('file',this.myRef.current.files[0])

                const params={
                    method:'POST',
                    body:formdata
                }

                fetch(url,params)
                .then(data=>data.json())
                .then(data=>{
                    console.log(data);
                    this.setState({
                        succes:true,
                        file:'',
                        filenameinput:''
                    })

                }).catch(err=>{
                    console.log({error:'Error al guardar el archivo',err})
                    this.setState({
                        info:true
                    })
                })
                
    
            }else{
                this.setState({
                warArchivo:true
                })
            }


        }else{
            this.setState({
                inputs:true
            })
        }

       

    }

    renderAlert=()=>{
        // toast.error(" Complete los campos vacios !",{position:"top-left"})
        
        if(this.state.warArchivo){
            toast.error("Tipo de archivo no valido, vuelva a intentarlo",{position:"top-left"})
            this.setState({
                warArchivo:null 
            })
        }

        if(this.state.inputs){
            toast.warn("¡Complete los campos!",{position:"top-left"})
            this.setState({
                inputs:false
            })
        }

        if(this.state.info){
            toast.info("Antes de enviar el material de apoyo, agregue el video",{position:"top-left"})
            this.setState({
                info:null
            })
        }

        if(this.state.succes){
            toast.success("Material de apoyo enviado",{position:"top-left",hideProgressBar: true})
            this.setState({
                succes:null
            })
        }
    }

    render(){

        // const {history} =this.props
        return(
            <div>

            <ToastContainer
            
                position="top-left"
                autoClose={5000}
                hideProgressBar={true}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnVisibilityChange
                draggable
                pauseOnHover
            />

                <div class="" id="modalContactForm1" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
                    <div class="modal-dialog cascading-modal mt-5" id="from-modal-file1" role="document">

                        <div class="modal-content" id="modal-content-from">


                            {this.renderAlert()}
                            <div class="modal-header primary-color white-text">
                                <h4 class="title">
                                <i class="far fa-file-archive"></i> Añadir un archivo como material de Apoyo</h4>

                                
                            
                            </div>
                            <div class="modal-body" id="modal-body-upload-material-apoyo">
                            <h6>Puede agregar un archivo(.pdf,.txt,.doc)</h6>
                            <div class="md-form form-sm">
                                <input  type="file" ref={this.myRef} onChange={this.onChangefile.bind(this)}  name="file" class="custom-file-input" id="customFileLang" lang="in"></input>
                                <label  class="custom-file-label" for="customFileLang">{this.state.nameFile}</label>
                            </div>

                                    
                                <div class="md-form form-sm">
                                    <input value={this.state.filenameinput} onChange={this.onChangeInput.bind(this)} name="filenameinput" type="text" id="materialFormEmailModalEx1" class="form-control form-control-sm" placeholder="Nombre del recurso"></input>
                                    <label for="materialFormEmailModalEx1"></label>
                                </div>


                                <div class="text-center mt-4 mb-2">
                                        <i class="fa fa-send ml-2"></i>

                                    <button onClick={this.sendData} class="btn btn-primary">Enviar </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                {/* <div class="text-center">
  <a href="" class="btn btn-default btn-rounded my-3" data-toggle="modal" data-target="#modalContactForm1">Launch
    Modal Contact</a>
</div> */}
            </div>
        )
    }


};