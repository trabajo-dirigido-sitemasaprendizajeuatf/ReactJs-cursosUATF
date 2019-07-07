import React, { Component } from 'react'

import './ShowExamenVideo.css'

export default class ShowExamenVideo extends Component{

    constructor(props){
        super(props)
        
    }

    render(){
        return(
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

                        Ejemplo de muestra:
                        <div class="pregresp2">
                        <div class="pregunta2">1. ¿Crees que HTML es una buena tecnología xxxxxxxxxxxxxxxxxxxxxxx?<br />
                        </div>
                        <div class="respuestas2">
                        <input type="radio" name="preg1" value="1" /> Sí<br />
                        <input type="radio" name="preg1" value="2" /> No<br />
                        <input type="radio" name="preg1" value="3" /> Ns/Nc<br />
                        
                        <div class="respuestasCorrectas">
                        ___________________________________________________________ <br/>
                        Respuestas Correctas:<br />
                        1 y 2
                        </div>
                        </div>
                    </div>

                    <div class="pregresp">
                        <div class="pregunta">2. ¿Crees que HTML es una buena tecnología xxxxxxxxxxxxxxxxxxxxxxx?<br />
                        </div>
                        <div class="respuestas">
                        <input type="radio" name="preg2" value="1" /> Sí<br />
                        <input type="radio" name="preg2" value="2" /> No<br />
                        <input type="radio" name="preg2" value="3" /> Ns/Nc<br />
                        </div>
                    </div>


                    <div class="pregresp">
                        <div class="pregunta">3. ¿Crees que HTML es una buena tecnología xxxxxxxxxxxxxxxxxxxxxxx?<br />
                        </div>
                        <div class="respuestas">
                        <input type="radio" name="preg1" value="1" /> Sí<br />
                        <input type="radio" name="preg1" value="2" /> No<br />
                        <input type="radio" name="preg1" value="3" /> Ns/Nc<br />
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