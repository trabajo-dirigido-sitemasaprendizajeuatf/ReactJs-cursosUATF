import React, { Component } from 'react'
import './homeVideo.css'
import URL from '../../../config'

export default class FormAddVideo extends Component{

    constructor(props){
        super(props)
            this.state={
                idSeccion:this.props.IDseccion,
                obSeccion:[],
                tipoVide:'',
                archivoValido:false,
                validartCampo:false
            }

            this.myRef=React.createRef();
            this.sendData=this.sendData.bind(this)
            this.renderAlert=this.renderAlert.bind(this)
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
                        
                    var url=URL.UrlUploadVideo
                    var params={
                            method:'POST',
                            body:formData,
                        }

                    fetch(`${url}${this.state.idSeccion}`,params)
                    .then(data=>data.json())
                    .then(data=>{
                        console.log(data);
                        this.setState({
                            obSeccion:data,
                            archivoValido:true
                        })
                        
                    })
                    .catch(err=>{
                        console.log(err);
                        
                    })
            }else{
                    console.log( 'tipo de archivo no valido' )
                    this.setState({
                        validartCampo:false
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
            return(
                <div class="alert alert-danger" role="alert">
                Sleccione un video
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
        
        if(this.state.archivoValido===false && this.state.validartCampo===true){
            return(

                <div class="alert alert-danger" role="alert">
                    tipo de archivo NO valido
                </div>
            )
        }
    }


    render(){

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
                        
                        <input ref={this.myRef} type="file" name="image" class="custom-file-input" id="customFileLang" lang="in"></input>
                        <label class="custom-file-label" for="customFileLang">subir video</label>
                    </div>
                        <div>
                            <br/>
                            <button  class="btn btn-info btn-block" type="submit">Subir  video</button>
                        </div>
                </form>
                </div>
            </div>
            </div>
        )
    }


};