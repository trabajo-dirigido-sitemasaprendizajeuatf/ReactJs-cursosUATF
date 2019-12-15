import React, { Component } from 'react'

//agregar a un curso a mis cursos
import URL from '../../../config'

import './agregarCurso.css'

import 'bootstrap/js/src/modal'
import $ from 'jquery'

export default class AgregarCurso extends Component{
        constructor(props){
            super(props)
            this.state={
                idCourse:this.props.idCourse,
                idSeccion:'',
                idUser:localStorage.getItem('id'),

                //alerts
                debeloguearse:false,
                cursoAgregado:false
            }
        }

        agregarCurso=()=>{

            const objCurso={
                idCourse:this.props.idCourse,
                idUser:localStorage.getItem('id')
            }

            var url = URL.UlrAgregarCursoMisCurso
            var params={
                method:'POST',
                body:JSON.stringify(objCurso),
                headers:{
                    'Content-Type': 'application/json'
                  }
            }

            if(this.state.idUser!='' && this.state.idUser!=undefined && this.props.idCourse){
                console.log(this.state.idUser)
                fetch(url,params)
                .then(data=>data.json())
                .then(res=>{
                    console.log(res)
                    if(res.ok){
                      console.log(Object.keys(res))
                      var b = Object.keys(res)
                      
                      this.props.modtrarModalEvent(b[0])
                    }
                    if(res.message){
                      console.log(Object.keys(res))
                      var c = Object.keys(res)
                      this.props.modtrarModalEvent(c[0])
                    }

                })
                .catch(err=>{
                    console.log(err)
                })
            
            }else{

                console.log('primero debe registrarse anstes de agregar el curso')
                var d='debeLoguearse'
                this.props.modtrarModalEvent(d)
            }
            
        }



        render(){

            console.log(this.props.idCourse)
            console.log(this.state)
            return(
              
             
                <div onClick={this.agregarCurso}  className=" btn-agregar-curso btn btn-primary">
                    Agregar a mis cursos
                </div>
             
                
            );
        }
};