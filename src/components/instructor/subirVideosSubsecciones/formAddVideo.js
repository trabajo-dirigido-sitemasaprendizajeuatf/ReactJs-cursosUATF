import React, { Component } from 'react'
import './homeVideo.css'
import URL from '../../../config'

import 'jquery'
import $ from 'jquery'

export default class FormAddVideo extends Component{

    constructor(props){
        super(props)
            this.state={
            // this.props.IDseccion
                idSeccion:this.props.IDseccion,
                title:'',
                objVideo:[],
                tipoVide:'',
                archivoValido:'',
                validartCampo:false
            }

            this.myRef=React.createRef();
            this.sendData=this.sendData.bind(this)
            this.renderAlert=this.renderAlert.bind(this)
            this.renderAlerTypeVide=this.renderAlerTypeVide.bind(this)
    }

    onChange(e){
        
        this.setState({
            [e.target.name]:e.target.value
        })
    }

    
    sendData(e){
        e.preventDefault()

       console.log(this.myRef.current.files[0]);

       
       if(this.myRef.current.files[0]){
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

                        this.props.dataparent(data)

                        this.setState({
                            objVideo:data,
                            archivoValido:true
                        })
                        
                    })
                    .catch(err=>{
                        console.log(err);
                        
                    })
            }else{
                    console.log( 'tipo de archivo no valido' )
                    this.setState({
                        validartCampo:'no valido'
                    })
            }
        }else{
            this.setState({
                validartCampo:true
            })
        }
       
    }   

    renderAlert(){
        
        if(this.state.validartCampo){
            
            $("#myToast").toast({ delay: 3000 });
           $("#myToast").toast('show');
            return(
                <div class="alert alert-danger" role="alert">
                Seleccione un video
                
                </div>

            )
           
        }else{}

        if(this.state.archivoValido===true){
            
            return(

                <div class="alert alert-success" role="alert">
                    tipo de archivo valido
                </div>
            )
        }
    
    }

    renderAlerTypeVide(){

        if(this.state.archivoValido==='no valido'){
          
            return(

                <div class="alert alert-danger" role="alert">
                    tipo de archivo NO valido
                </div>
            )
        }
    }

    render(){
            console.log(this.state.title);
            
        return(
            <div>

                <div className="container-form">
                <div className="container">
                {/* <h1>subir Poster</h1> */}
                <tr>{this.props.IDseccion}</tr>

                <form  onSubmit={this.sendData}  class="text-center border border-light p-5" >
                {this.renderAlert()}
                    <p class="h3 mb-4">subir video del curso</p>
                    <p>Seleccione un video</p>
                    <div class="custom-file">

                      
                        <br/>
                        <input ref={this.myRef} type="file" name="image" class="custom-file-input" id="customFileLang" lang="in"></input>
                        <input value={this.state.title} onChange={this.onChange.bind(this)} name="title" type="text" id="defaultLoginFormEmail" class="form-control mb-4" placeholder="Subtitulo o titulo del video"></input>
                        <br/>
                        <label class="custom-file-label" for="customFileLang">subir video</label>
                    </div>
                            <button  class="btn btn-info btn-block" type="submit">Subir  video</button>
                </form>
                </div>
            </div>
            </div>
        )
    }


};