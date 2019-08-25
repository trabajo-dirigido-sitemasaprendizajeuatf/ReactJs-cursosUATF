import React, { Component } from 'react'

import './ShowExamenVideo.css'

export default class ShowExamenVideo extends Component{

    constructor(props){
        super(props)
        
    }

    render(){
    
            if(this.props.showVideoExamen.length>0 ){
                console.log(this.props.showVideoExamen);
                
                return (
                         <div>
                    {/* modal fade */}
                        <div class="" id="modalContactForm2" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
                <div class="modal-dialog cascading-modal" role="document">
                    <div class="modal-content">

                    <div class="modal-header light-blue darken-3 white-text">
                        <h4 class="title"><i class="fas fa-pencil-alt"></i>Vista previa del examen que sera incluido en el video</h4>
                        <button type="button" class="close waves-effect waves-light" data-dismiss="modal" aria-label="Close">
                        {/* <span aria-hidden="true">×</span> */}
                        </button>
                    </div>

                    <div class="modal-body" id="form-examen-show">
                        

                    <form class="conten-form2">

                        {
                            this.props.showVideoExamen.map((data,i)=>{
                                return(
                                    <div class="pregresp2">
                                        <div class="pregunta2">{`${i+1}. ${data.pregunta}`}<br />
                                            </div>
                                            
                                            {
                                                data.posiblerespuesta.map((posibleres,indice)=>{
                                                    return(
                                                    <div>
                                                    <div class="respuestas2">
                                                    {indice+1}) <input type="radio" name="preg1" value={indice+1} />  {posibleres}<br/>
                                                    </div>
                                                    </div>
                                                    )
                                                })
                                            }
                                            {/* <input type="radio" name="preg1" value="2" /> No<br />
                                            <input type="radio" name="preg1" value="3" /> Ns/Nc<br /> */}
                                            
                                            <div class="respuestasCorrectas">
                                            _____________________<br/>
                                           <h6>Respuestas Correctas:</h6> 
                                           <span>{data.respuestaCorrecta.map((d3,i3)=>{ 
                                                    return(
                                                    <div className="contend-res">
                                                        <h6 className="resp">{d3})</h6>
                                                    </div>
                                                )}
                                               )}</span>
                                            </div>
                                        
                                    </div>
                                )
                            })
                        }

                        {/* <div class="pregresp2">
                            <div class="pregunta2">1. ¿Crees que HTML es una buena tecnología ?<br />
                                </div>
                                <div class="respuestas2">
                                <input type="radio" name="preg1" value="1" /> Sí<br />
                                <input type="radio" name="preg1" value="2" /> No<br />
                                <input type="radio" name="preg1" value="3" /> Ns/Nc<br />
                                
                                <div class="respuestasCorrectas">
                                _____________________<br/>
                                Respuestas Correctas:<br />
                                1 y 2
                                </div>
                            </div>
                        </div> */}
                     </form>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            )
            }else{
                return(
            <div>
                    {/* modal fade */}
                        <div class="" id="modalContactForm2" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
                <div class="modal-dialog cascading-modal" role="document">
                    <div class="modal-content">

                    <div class="modal-header light-blue darken-3 white-text">
                        <h4 class="title"><i class="fas fa-pencil-alt"></i>Vista previa ejemplo</h4>
                        <button type="button" class="close waves-effect waves-light" data-dismiss="modal" aria-label="Close">
                        {/* <span aria-hidden="true">×</span> */}
                        </button>
                    </div>
                    <div class="modal-body" id="form-examen-show">
                        

                    <form class="conten-form2">

                        Ejemplo de muestra:
                        <div class="pregresp2">
                        <div class="pregunta2">1. ¿Crees que HTML es una buena tecnología ?<br />
                        </div>
                        <div class="respuestas2">
                       1 <input type="radio" name="preg1" value="1" /> Sí<br />
                       2 <input type="radio" name="preg1" value="2" /> No<br />
                       3 <input type="radio" name="preg1" value="3" /> Ns/Nc<br />
                        
                        <div class="respuestasCorrectas">
                        _____________________<br/>
                        Respuestas Correctas:<br />
                        1
                        </div>
                        </div>
                    </div>

                    <div class="pregresp">
                        <div class="pregunta">2. ¿Crees que HTML es una buena tecnología?<br />
                        </div>
                        <div class="respuestas">
                        1 <input type="radio" name="preg1" value="1" /> Sí<br />
                        2 <input type="radio" name="preg1" value="2" /> No<br />
                        3 <input type="radio" name="preg1" value="3" /> Ns/Nc<br />
                        </div>
                        <div class="respuestasCorrectas">
                        _____________________<br/>
                        Respuestas Correctas:<br />
                          1 <br/>
                          2
                        </div>
                    </div>


                    <div class="pregresp">
                        <div class="pregunta">3. ¿Crees que HTML es una buena tecnología?<br />
                        </div>
                        <div class="respuestas">
                        1 <input type="radio" name="preg1" value="1" /> Sí<br />
                        2 <input type="radio" name="preg1" value="2" /> No<br />
                        3 <input type="radio" name="preg1" value="3" /> Ns/Nc<br />
                        </div>

                        <div class="respuestasCorrectas">
                        _____________________<br/>
                        Respuestas Correctas:<br />
                          3
                        </div>
                    </div>

                </form>
                        
                        {/* <div class="text-center mt-1-half">
                        <button class="btn btn-info mb-2 waves-effect waves-light">Send </button>
                        </div> */}

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
}