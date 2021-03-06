import React, { Component } from 'react'
import './subirPoster.css'

import { Link } from "react-router-dom"

export default class SubirPoster extends Component{
    constructor(props){
        super(props)
            this.state={
                idcourse:this.props.idcourse,
                nameFile:'Seleccione una imagen',
                cursoCreado:false

            }

            this.myRef = React.createRef();

            this.sendData=this.sendData.bind(this)
    }

    onchangeName(e){
        // console.log(this.myRef.current.files.length);

        if(this.myRef.current.files.length>0){
            this.setState({
                nameFile:this.myRef.current.files[0].name.substr(0,30)
            })

        }
    }

    sendData(e){
        e.preventDefault()

        if(this.myRef.current.files.length>0){
            console.log(this.myRef.current.files[0].name);

            var formData = new FormData()
            formData.append('image', this.myRef.current.files[0])
             
            var params={
                 method:'POST',
                 body:formData,
               
             }
     
            fetch(`http://localhost:3005/uploadimg/idcourse=${this.props.idcourse}`,params)
            .then(data=>data.json())
            .then(data=>{
                console.log(data);
     
                this.setState({
                 nameFile:'Seleccione una imagen',
                 cursoCreado:true
                })
                
            })
            
        }
       
    }   


    render(){



        if(this.state.cursoCreado){
            return(
                <div>
            <div className="container w-50 pt-5" id="container-poster">
            {/* <h1>subir Poster</h1> */}
            {/* <h1>{this.props.idcourse}</h1> */}

            <form class="from-upload-image text-center border border-light p-5 z-depth-5 pt-5" >

                <p class="h4 mb-4">Curso creado exitosamente</p>

                
                    <div className="pt-5 pb-3">
                        <Link to="/instructor"> 
                            <button class="border-circle btn btn-info btn-block" type="submit">Aceptar</button>
                        </Link>
                        
                    </div>
                

            </form>
            </div>
        </div>
            )
            
        }else{
            return(
                <div>
                    <div className="container w-50 pt-5" id="container-poster">
                    {/* <h1>subir Poster</h1> */}
                    {/* <h1>{this.props.idcourse}</h1> */}
    
                    <form  onSubmit={this.sendData}  class="from-upload-image text-center border border-light p-5 z-depth-5 pt-5" >
    
                        <p class="h4 mb-4">Poster del Curso</p>
    
                        <p>Seleccione una imagen para el poster del cruso.</p>
    
                        <div class="custom-file">
                            <input onChange={this.onchangeName.bind(this)} ref={this.myRef} type="file" name="image" class="custom-file-input" id="customFileLang" lang="in"></input>
                            <label class="custom-file-label" for="customFileLang"> {this.state.nameFile} </label>
                        </div>
                            <div>
                                <br/>
                                <button  class="border-circle btn btn-info btn-block" type="submit">Enviar poster</button>
                            </div>
                        
    
                    </form>
                    </div>
                </div>
            )
        }
       
    }
}