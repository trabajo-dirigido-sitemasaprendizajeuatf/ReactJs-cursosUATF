import React, { Component } from 'react'
import Url from '../../../config'
import { Link } from 'react-router-dom'
import SubirPoster from './subirPoster'
import './crearCurso.css'
class CreateCourso extends Component{

    constructor(props){
        super(props)
            this.state={
                idteacher:localStorage.id,
                namecourse:'',
                sigla:'',
                lavel:'',
                descripcion:'',
                autor:'',
                completeData:'',
                ok:null,
                respuestaServer:''
            
            }
            this.sendData=this.sendData.bind(this)
    }


    sendData(e){
        e.preventDefault()

        const newCourse={
            idTeacher:this.state.idteacher,
            namecourse:this.state.namecourse,
            sigla:this.state.sigla,
            lavel:this.state.lavel,
            descripcion:this.state.descripcion,
            autor:this.state.autor
        }  

        var url=Url.UrlCreateCourse,
            params={
                method:'POST',
                body:JSON.stringify(newCourse),
                headers:{
                    'Content-type':'application/json'
                }
            }

            if(this.state.namecourse !=='' && this.state.sigla !=='' && this.state.lavel !=='' && this.state.descripcion !=='' && this.state.autor !==''){

                fetch(url,params)
                .then(res=>res.json())
                .then(res=>{
                    console.log(res)
                    this.setState({
                        ok:true,
                        respuestaServer:res
                    })
                    
                })
                .catch(err=>{
                    console.log(err);
                    
                })
                
                this.setState({
                    namecourse:'',
                    sigla:'',
                    lavel:'',
                    descripcion:'',
                    autor:'',
                    completeData:''
                    
                })
            }else{
                this.setState({
                    completeData:'Complete los campos vacios'
                })
            }
        
    }

    onChange(e){

        this.setState({
            [e.target.name]:e.target.value
        })
    }

    renderAlert(e){
        if(this.state.completeData){
            return(
                <div class="alert alert-danger text-center" role="alert">
                    <h6 >{this.state.completeData} </h6>
                    
                </div>
            )
        }

        if(this.state.ok){

            return(
                <div class="alert alert-success" role="alert">
                     <h3>Curso creado correctamente</h3>
                </div>
            )
        }
    }

    render(){
        console.log('create course');
        console.log(this.state);
        
        


        if(this.state.ok){
            return(
                <SubirPoster idcourse={this.state.respuestaServer._id}/>
            )
        }else
        return(
            <div>
                <div className="containerBtn text-left text-white p-1">
                    <h5>Complete los campos para crear el curso</h5>
                </div>

                    <br/>
                    <h3 className="font-weight-bold">Datos de curso</h3>
                   
            <div className="container w-50 p-3 bg-white" id="container-form">
            {this.renderAlert()}
                <form onSubmit={this.sendData}>
                <div class="form-row">
                    <div class="form-group col-md-6">
                    <label for="inputEmail4">Materia</label>
                    <input value={this.state.namecourse} onChange={this.onChange.bind(this)} name="namecourse" type="text" class="form-control" id="inputEmail4" placeholder="Materia"></input>
                    </div>
                    <div class="form-group col-md-6">
                    <label for="inputPassword4">Sigla</label>
                    <input value={this.state.sigla} onChange={this.onChange.bind(this)} type="text" name="sigla" class="form-control" id="inputPassword4" placeholder="SIS-756"></input>
                    </div>
                </div>

                <div class="form-group ">
                    <label for="inputAddress">Nivel</label>
                    <input value={this.state.lavel} onChange={this.onChange.bind(this)} name="lavel" type="Number" class="form-control" id="inputAddress" placeholder="1,2,3,4,...."></input>
                </div>
                <div class="form-group purple-border">
                    <label for="exampleFormControlTextarea4">Descripcion del curso</label>
                    <textarea value={this.state.descripcion}  onChange={this.onChange.bind(this)} name="descripcion" class="form-control" id="exampleFormControlTextarea4" rows="3"></textarea>
                </div>
                <div class="form-row">
                    <label for="inputCity">Autor</label>
                    <input   value={this.state.autor} onChange={this.onChange.bind(this)} name="autor" type="text" class="form-control" id="inputCity" placeholder="Ing. Pablo Miranda, youtube, otros"></input>
                </div>
                <br/>
                  
                   <button type="submit" class="btn btn-info btn-block" >Crear curso</button>
                   <a type="button" class="light-blue-text mx-2">
        
                     </a>
                
                </form>

                
            </div>
            </div>
        )
    }
}

export default CreateCourso;