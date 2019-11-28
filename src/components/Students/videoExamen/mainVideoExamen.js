import React, { Component } from 'react'

import URLtakeexamvideo from '../../../config'
import './mainVideoExamen.css'
import URLcourseTakesExam from '../../../config'

import 'bootstrap/js/src/modal'
import $ from 'jquery'

export default class MainVideoExamen extends Component{

    constructor(props){
        super(props)
        this.state={
                       // llega desde props (todo el cuestionario)->  this.props.objExamVideo
            objExamenVideo:[],
            
            respuestasCorrectas:'',
            respuestasUser:'',
            
            cantidadPreguntas:'',
            idUser:'',
            idCourse:'',

            nota:0,
            sobre:0,
            calificado:this.props.modalSgow
            

        }
        this.respuestaCorrectaRef=React.createRef();
        this.respuestaCorrectaRef2=React.createRef();
    }
    

    async onChange(e){
        e.preventDefault();
      // console.log(e.target.querySelectorAll(".pregresp"))
      var preguntas =Array.from(e.target.querySelectorAll(".pregresp"));


       var respuestasDelUser=[]

    await  preguntas.map((d,i)=>{

        // console.log(d.querySelectorAll(".respuestas"));
        var res =Array.from(d.querySelectorAll("input[type=radio]"));
        res.map((d2,i2)=>{
          // console.log(d2)
          if(d2.checked){
              respuestasDelUser.push({[i+1]:parseInt(d2.value)})
              console.log(d2)
          }

        })
      })
    console.log(respuestasDelUser);

    var respeustasCorretas=[]

    await this.props.objExamVideo.map((d,i)=>{
      // console.log(d)
        if(this.props.time===d.timeShowExamen){
          d.examen.map((d2,i2)=>{
            respeustasCorretas.push({[i2+1]:parseInt(d2.respuestaCorrecta[0])})
            // console.log(d2.respuestaCorrecta)
          })
        }
       })

       console.log(respeustasCorretas)


      //  calificacion del examne
      var nota=0;
      var sobre=respeustasCorretas.length;

    // console.log(respeustasCorretas[0])

    await  respuestasDelUser.map((d,i)=>{
       console.log(d[`${i+1}`])
       if( d[`${i+1}`]===respeustasCorretas[i][`${i+1}`]){
         console.log("son iguales")
         nota++;
       }
        
      })

      console.log('nota/total')
      console.log(`${nota}/${respeustasCorretas.length}`)

      var c=respeustasCorretas.length
      this.setState({
        nota:nota,
        cantidadPreguntas:c
      })


      var idVideoExam;
      var idExamen;
       this.props.objExamVideo.map((d,i)=>{
          if(this.props.time===d.timeShowExamen){
            // console.log( d.idVideo)
            idVideoExam = d.idVideo;
            idExamen = d._id
         }
      })

      var idCourse;
      var idSeccion;
      this.props.ObjSeccionesDelCurso.map((d,i)=>{
          // console.log(d)
          return(
            d.video.map((d2,i1)=>{
                // console.log(d2.idVideo)
                if(d2.idVideo===idVideoExam){
                   idSeccion = d._id;
                   idCourse = d.idCourse;
                }
            })
          )
      })


      // datos del examen
      var objExam={
        idVideo:idVideoExam,
        idSeccion:idSeccion,
        idCourse:idCourse,
        idUser:localStorage.getItem('id'),
        notas:{
          idExamen:idExamen,
          respuestasDelUser:respuestasDelUser,
          respeustasCorretas:respeustasCorretas,
          nota:nota,
          cantidadPregunta:respeustasCorretas.length,
          examenResuelto:true,
          timeShowExam:this.props.time
        }

      }
      
      var url = URLcourseTakesExam.UlrCourseTakeExam;
      var params={
        method:'POST',
        body:JSON.stringify(objExam),
        headers:{
          'Content-Type':'application/json'
        }
      }

      fetch(url,params)
        .then(res=>res.json())
        .then(data=>{
          console.log(data)

          this.setState({
            calificado:true,
            nota:nota,
            sobre:sobre
          })
          // this.props.formReload()
          
          this.props.playerVideo()
        })
        .catch((err)=>{
          console.log(err)
        })

      console.log(params)

      console.log('====================================');
      console.log(this.props.ObjSeccionesDelCurso)
      console.log(this.props.objExamVideo)
      console.log(this.props.time)
      console.log('====================================');
      

    }

    senData=()=>{

      this.setState({objExamenVideo:this.props.objExamVideo})
        
    }

   calificado=()=>{
    
    setTimeout(()=>{
      this.setState({
        calificado:false
      },2000)
    })
    
   }

    ShowAnswers=()=>{
      
      setTimeout(()=>{
        this.setState({
          calificado:false
        })
      },2000)

      
      return(
        <form class="form-nota-exam text-center border border-light p-5 mb-4">
            <div class="text-center">
            <h2 class="dark-text mb-4"><strong>Calificacion Obtenida </strong></h2>
            </div>
            
            <p class="text-success mb-4"><h3>Nota: {this.state.nota}/{this.state.sobre}</h3></p>

            <p class="text-muted mb-0">Resultados obtenidos: {this.state.nota} </p>
            <p class="text-muted mb-4">Cantidad de Preguntas: {this.state.sobre} </p>

            {/* <button   class="btn btn-outline-default waves-effect w-50" style={{borderRadius:'7em'}}>Aceptar</button> */}
        
        </form>
      )
     
    }

    render(){
      console.log('===========fffff=========================');
      console.log(this.props.modalSgow);
      console.log('====================================');

        return(


            <div>
            {/* modal fade */}
                <div class="modal fade" id="modalExamenForm" tabindex="-1" role="dialog" aria-labelledby=""
                  aria-hidden="true">
                  <div class="modal-dialog cascading-modal" role="document">
                    <div class="modal-content">

                      <div class="modal-header light-blue darken-3 white-text">
                        {
                          this.state.modalSgow?
                            <h4 class="title"><i class="fas fa-glasses"></i>Calificación obtenida</h4>
                          :
                            <h4 class="title"><i class="fas fa-pencil-alt"></i>Complete el siguiente examen de reguntas cerradas</h4>

                        }
                        <button type="button" class="close waves-effect waves-light" data-dismiss="modal" aria-label="Close">
                          {/* <span aria-hidden="true">×</span> */}
                        </button>
                      </div>
                      <div class="modal-body ">

                      {
                        this.props.modalSgow? this.ShowAnswers()
                        :
                          <form onSubmit={this.onChange.bind(this)} class="conten-form">
                              {
                                
                                this.props.objExamVideo.map((data, indice)=>{
                                  // this.props.time===data.timeShowExamen?
                                  if(this.props.time===data.timeShowExamen){
                                    return(
                                      data.examen.map((d,i)=>{
                                        console.log(d.posiblerespuesta)
                                        console.log(d)
                                          return(
                                        
                        
                                              <div class="pregresp">
                                                <div class="pregunta">{d.pregunta}<br />
                                              </div>
                                              {
                                                  d.posiblerespuesta.map((d2,i2)=>{
                                                    return(
                                                    
                                                      <div class="respuestas">
                                                        <input type="radio"  name={d.pregunta} value={i2+1} /> {i2+1} )R.-{d2}<br />
                                                        {/* <div ref={this.respuestaCorrectaRef2}  >{d.respuestaCorrecta}</div> */}
                                                        {/* <input type="text" ref={this.respuestaCorrectaRef}  value={d.respuestaCorrecta}></input> */}
                                                    
                                                      </div>
                        
                                                    )
                                                      
                                                  })
                                                  
                                              }
                                              
                                            </div>
                                          )
                                      })
                                    )
                                  }
                                  
                                
                                })
                                


                              }
                          
                                {/* <div class="pregresp">
                                  <div class="pregunta">2. ¿Crees que HTML es una buena tecnología xxxxxxxxxxxxxxxxxxxxxxx?<br />
                                  </div>
                                  <div class="respuestas">
                                    <input type="radio" name="preg2" value="1" /> Sí<br />
                                    <input type="radio" name="preg2" value="2" /> No<br />
                                    <input type="radio" name="preg2" value="3" /> Ns/Nc<br />
                                  </div>
                                </div> */}

                                <div class="text-center mt-1-half">
                                    <button  class="btn btn-primary mb-2 waves-effect waves-light w-50" style={{borderRadius:'7em'}}>Enviar </button>
                                </div>
                                  
                                  {/* <ShowNotasExam/> */}

                          </form>
                      }
                      </div>
                    </div>
                  </div>
                </div>

                {/* <div class="text-center">
                  <a href="" class="btn btn-default btn-rounded my-3" data-toggle="modal" data-target="#modalContactForm">Launch
                    Modal Contact</a>
                </div> */}
            </div>
        )
    }

}