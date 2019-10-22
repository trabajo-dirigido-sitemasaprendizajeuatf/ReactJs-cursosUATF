import React, { Component } from 'react'
import './verNotas.css'

import URL from '../../../config'
import FectTitileCurso from '../../Students/MisCursosUser/misNotasStudent/fetchTitleCurso'
import ViewDataStudent from './viewDataStundent'

import FetchLinkFileNotasTeachert from './fetchLinkFileNotasTeachert'


export default class VerNotas extends Component{

    constructor(props){

        super(props)
        this.state={
            objNotasPorCurso:[]
        }
    }

    componentWillMount(){

        const url = URL.UrlShowNotaStudentsForCourse
        const idTeacher={
            idTeacher:localStorage.getItem('id')
        }

        const params={
            method:'POST',
            body:JSON.stringify(idTeacher),
            headers:{
                'Content-Type': 'application/json'
            }
        }

        fetch(url, params)
         .then(data=>data.json())
         .then(res=>{
            console.log(res)
            console.log(res.length)
            // console.log(res.length)
            if(res.message==='no tiene estudiantes'){
                this.setState({
                    objNotasPorCurso:res.message
                })
            }
            if(res.message==='no tiene cursos'){
                this.setState({
                    objNotasPorCurso:res.message
                })
            }
            if(res.length>0){

                this.setState({
                    objNotasPorCurso:res
                })
            }
         })
         .catch(err=>{
             console.log({Error:'Error en la peticion-->notas fron teacher(ver notas)'})
         })

    }

    
   

    render(){
        console.log(this.state.objNotasPorCurso)
        console.log(this.state.objUser)
        if(this.state.objNotasPorCurso){
        
            if(this.state.objNotasPorCurso!='no tiene estudiantes' && this.state.objNotasPorCurso!='no tiene cursos' )  {

                
            return(
                <div className="content-notas-teacher">

                    <div className="container-title-menu-teacher">
                        <h5>
                            Calificaciones
                        </h5> 
                    </div>
                    <div>
                        <FetchLinkFileNotasTeachert/>
                    </div>
    
    
                    
    
                    {
                        this.state.objNotasPorCurso.map((d,i)=>{
                    
                            
                            return(
                            <div>
                                
                                {
                                    d.map((a,s)=>{
                                        if(s===0){
                                            return(
                                                <span>
                                                    <br/>
                                                    {/* {a.idCourse} */}
                                                    <FectTitileCurso idCourse={a.idCourse}/>    
                                                </span>
                                            )
                                        }
                                    })
                                }   
                            <table class="table table-striped">      
                            <thead className=" darken-4 white-text" style={{background:'#1976D2'}}>
                                <tr>
                                <th>Nro</th>
                                <th >Nombres</th>
                                <th>Paterno</th>
                                <th>Materno</th>
                                <th>C.I.</th>
                                <th>R.U.</th>
                                <th>Nota final</th>
                                </tr>
                            </thead>
                                {
                                      d.map((d1,i1)=>{
                                        return(

                                            <ViewDataStudent idUser={d1.idUser} idCourse={d1.idCourse}  n={i1}/>
                                            
                                        )
                                    })
                                }
                                </table>
                            </div>
                            )
                        })
                    }
                   
                    
                </div>
            )
            }              
            else{
                return(
                    <span>
                        {this.state.objNotasPorCurso}
                    </span>
                )
            }
        }else{
            return(

            <span>
                loading...
            </span>
            )
        }
        
        
    }
};