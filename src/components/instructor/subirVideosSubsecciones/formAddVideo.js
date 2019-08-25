import React, { Component } from 'react'
import './homeVideo.css'
import URL from '../../../config'
import PlayerVide from '../playerVideoTeacher/videoReact'

// importando loe requerimientos de toastTigy
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default class FormAddVideo extends Component{

    constructor(props){
        super(props)
            this.state={
            // this.props.IDseccion
                idSeccion:this.props.IDseccion,
                title:'',
                video:'',
                objVideo:[],
                tipoVide:'',
                archivoValido:false,
                validartCampo:false,
                namefile:'Subir video',
                ok:false                 //controla qu el viode aya cargado  true or false 
            }

            this.myRef=React.createRef();
            this.myRefLabel=React.createRef();
            this.sendData=this.sendData.bind(this)
            this.renderAlert=this.renderAlert.bind(this)
    }

    onChange(e){
        
        this.setState({
            [e.target.name]:e.target.value
        })
        
        // console.log(this.myRef.current.files[0].name,'ññññññññññññññ');
        
    }
    onChangeFile(e){
        this.setState({namefile:this.myRef.current.files[0].name,
            [e.target.name]:e.target.value
        })
        
    }


    
    sendData(e){
        e.preventDefault()

       console.log(this.myRef.current.files[0]);

       
       if(this.state.video!== '' && this.state.title!=='')
       {
           console.log('campos llenados');

           console.log(this.myRef.current.files[0].type)
            

           var tipoVide=this.myRef.current.files[0].type
           this.setState({tipoVide:tipoVide})

        
           if(tipoVide==='video/mp4' || tipoVide==='video/quicktime'){

               console.log( ' tipo de archivo valido' )
                   
                    
                   var formData = new FormData()
                   formData.append('video', this.myRef.current.files[0])
                   
                       
                   var url=`${URL.UrlUploadVideo}${this.state.idSeccion}/title=${this.state.title}`
                   // console.log(url);
                   
                   var params={
                           method:'POST',
                           body:formData,
                       }

                   fetch(url,params)
                   .then(data=>data.json())
                   .then(data=>{
                       console.log(data);

                       this.props.dataparent(data) //envia los datos de la seccion creada al padre

                       this.setState({
                           objVideo:data,
                           ok:true
                       })
                       
                   })
                   .catch(err=>{
                       console.log(err);
                       
                   })
           }else{
                   console.log( 'tipo de archivo no valido' )
                   this.setState({
                       archivoValido:true
                   })
           }
           
       }else{
           console.log('llene los campos vacion');
           this.setState({
            validartCampo:true
           })
       }
      
       
      
       
    }   

    // notify = () => toast("Wow so easy !");
    
    renderAlert(){
        
        if(this.state.validartCampo){
            
            // () => toast("Wow so easy !");
            toast.warn(" Complete los campos vacios !",{position:"top-left"})
            this.setState({validartCampo:false})
        }

        if(this.state.archivoValido){
                toast.error('tipo de archivo valido',{position:"top-left"})
                this.setState({archivoValido:false})
        }
        if(this.state.ok){ toast.success(' Subiendo archivo espere unos segundo ! ') 


        }
    }

    render(){
            // console.log(this.state.title);
            // console.log(this.state);
            if(this.state.ok && this.state.objVideo){
                return(
                    <PlayerVide objVideo2={this.state.objVideo}
                                duration={this.props.durationVideo}
                                allTime={this.props.allTime}
                     />

                )
            }else
        return(
            <div className="z-depth-2">


                <ToastContainer
                position="top-left"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnVisibilityChange
                draggable
                pauseOnHover
                />

                        <div class="modal-header primary-color white-text">
                            <h4 class="title">
                            <i class="fas fa-video"></i>  Agregar Video</h4>
                    
                        </div>

                <div className="container-form bg-white border">
                
                <div className="container">
                {/* <h1>subir Poster</h1> */}
                {/* <tr>{this.props.IDseccion}</tr> */}

                <form  onSubmit={this.sendData}  class="text-center  border-light p-5" >
            

                {this.renderAlert()}
                    {/* <p class="h3 mb-4">subir video del curso</p> */}
                    {/* <p>Seleccione un video</p> */}
                    <div class="custom-file">

                      

                        <div class="md-form form-sm">
                        <input ref={this.myRef} type="file" onChange={this.onChangeFile.bind(this)}  value={this.state.video} name="video" class="custom-file-input" id="customFileLang" lang="in"></input>
                        <label  class="custom-file-label" for="customFileLang">{this.state.namefile.split('',35).join('')}</label>
                        </div>
                        <div class="md-form form-sm">
                         <input value={this.state.title} onChange={this.onChange.bind(this)} name="title" type="text" id="defaultLoginFormEmail" class="form-control form-control-sm" placeholder="Subtitulo o titulo del video"></input>
                        <br/>
                        </div>
                        
                    </div>
                            <button  class="btn btn-primary btn-block" type="submit">Subir  video</button>
                </form>
                </div>
            </div>
            </div>
        )
    }


};