import React, { Component } from 'react'

import URL from '../../../../config';
import FetchTitleCurso from '../misNotasStudent/fetchTitleCurso'
import FetchDataVideo from './fetchDataVideo'

import './misNotasStudent.css'

export default class MisNotasStudent extends Component{
    constructor(props){
        super(props)
        this.state={
            objMisNotas:[]
        }
    };

    componentWillMount(){

        const url=URL.URLshowNotasPorCursos;
        const idUser ={idUser:localStorage.getItem('id')};

        var params ={
            method:'POST',
            body:JSON.stringify(idUser),
            headers:{
                'Content-Type': 'application/json'
            }
        }

        fetch(url,params)
         .then(data=>data.json())
         .then(doc=>{
             if(doc!='no hay examenes'){
                this.setState({
                    objMisNotas:doc
                })
             }
            
             console.log(this.state.objMisNotas)
         })
         .catch(err=>{
             console.log({err:'error el la petcicon --> misNtasStudent'})
             console.log(err)
         })
    }

    render(){
        console.log(this.state.objMisNotas.length)
        
        if(this.state.objMisNotas.length>0){
            return(
                <div className="content-Notas">
                    {
                        this.state.objMisNotas.map((d,i)=>{

                            
                            var totalNota=0;
                            var cantidadPreguntas=0;
                            var idCourse = d.idCourse;
                            var titleCurso;
                            var k=0;
                            return(
    
                                
                               <div>
                                    {
                                        d.map((a,o)=>{
                                            if(o===0)
                                            return(
                                            <span>
                                                {/* TITLE */}
                                                <FetchTitleCurso
                                                    idCourse={a.idCourse}
                                                />
                                            </span>
                                            )
                                        })
                                        
                                    }
                               
                                    
                                    <table class="table table-striped">
                                            <thead className="light-blue darken-4 white-text">
                                                <tr>
                                                <th>#</th>
                                                <th>Clase(video)</th>
                                                <th>cantidad de preguntas</th>
                                                <th>Calificación obtenida</th>
                                                {/* <th>nota</th>
                                                <th>Position</th>
                                                <th>Age</th> */}
                                                </tr>
                                            </thead>
                                    
                                        {

                                            d.map((d1,i1)=>{

                                                titleCurso=d1.idCourse
                                                
                                                return(
                                                
                                                    <tbody>
                                                        {
                                                            d1.notas.map((d2,i2)=>{
                                                                k=k+1;
                                                                totalNota=totalNota+d2.nota;
                                                                cantidadPreguntas=cantidadPreguntas+d2.cantidadPregunta;
                                                                return(
                                                                    
                                                                    
                                                                        <tr class="table-info">
                                                                        <th scope="row">{ k }</th>
                                                                        {/* d1.idVideo */}
                                                                        <td> <FetchDataVideo
                                                                                idCourse={d1.idCourse}
                                                                                idVideo={d1.idVideo}
                                                                            />
                                                                        </td>
                                                                        <td>{ d2.cantidadPregunta }</td>
                                                                        <td>{ d2.nota }</td>
                                                                        {/* <td>New York City</td>
                                                                        <td>Web Designer</td>
                                                                        <td>23</td> */}
                                                                        </tr>
                                                                    
                                                                )
                                                            })
                                                        
                                                        }
                                                    </tbody>
                                                )
                                            })
                                        }

                                            <tr class="table-info">
                                                <th scope="row"> NOTA FINAL</th>
                                                <td></td>
                                                <td>{ cantidadPreguntas }</td>
                                                <td>{ totalNota }</td>
                                                {/* <td></td>
                                                <td></td>
                                                <td></td> */}
                                            </tr>
                                            
                                        </table>
    
                               </div>
                            )
                        })
                        
                    }
                    
                </div>
            )
        }else{
            return(

                <span>
                    Usted no tiene notas, esto es debido que los cursos que tienes agragados no contienen un examen.
                </span>
            )
        }
        
    }
};