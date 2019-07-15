import React, { Component } from 'react'
import FormAddVideo from './formAddVideo'
import AddExamVideo from './addExamVideo'
import AddMaterialApoyo from './addMaterialApoyo'
import AddMaterialApoyoLinks from './addMaterialApoyoLinks'
// mostrar examen
import ShowExamenVideo from './showExamenVideo'

// button back
import '../../utils/buttonBack/buttonBack.css'


import './homeVideo.css'
import { log } from 'util';
export default class HomeVidel extends Component{

    constructor(props){
        super(props)
            this.state={
                idSeccion:this.props.match.params.id,
                obSeccion:[],
                
                // video time, duration
                timeAllVideo:'',
                timeActualityVideo:'',

                //idVideo
                objVideo:'',
                idVideo:'',

                // showExamenVideo
                showVideoExamen:[],

                date:new Date()
               
            }
    }


    dataparent=(ojbCurso)=>{
        console.log('parent,  home vide ----');
        
            console.log(ojbCurso);
            console.log(ojbCurso._id,'ffffffffffffffffffffffffffffffffffff')
            this.setState({
                objVideo:ojbCurso,
                idVideo:ojbCurso._id
            })
            
    }

    

    durationVide=(durationVideo)=>{

        console.log('duration videoooooooooooooooo homevideo');
        
        // console.log(typeof durationVideo)
        this.setState({
            timeActualityVideo:durationVideo
        })
    }

    allTime=(data2)=>{
        console.log( typeof data2)
            this.setState({
                timeAllVideo:data2
                
            })
    }

    ExamenVideoShow=(objVideo)=>{
        
        // console.log('ExamenVideoShow -------');
        console.log(objVideo);
        this.setState({
            showVideoExamen:objVideo
        })

        
    }

    render(){
        console.log(this.state);
        

        const {history} =this.props
        return(
            <div>
            {/* <a class="btn-floating btn-lg btn-default"><i class="far fa-arrow-alt-circle-left "></i></a> */}
            {/* <button onClick={()=>history.goBack()} className="btn-lg" ><i class="far fa-arrow-alt-circle-left "></i></button> */}

                    {/* <p>  Home video </p> */}
                    {/* {this.props.match.params.id} */}

                <br/>
                <div class="container-video" >
               <div className="row">
               
                <div class="col-8">
                    <div class="col-12">
                    <FormAddVideo 
                        IDseccion={this.state.idSeccion}
                        dataparent={this.dataparent}
                        allTime={this.allTime}
                        durationVideo={this.durationVide}
                    />
                    </div>
                
                   
                </div>
                <div class="col-4  bg-dark">
                <div className="content-text">
                    <h6>
                    <h5>recomendaciones:</h5><br/>
                    <h6>1. Al momento de agragar el viedo, recuerder que el titulo ira como subtitulo de la seccion del curso.</h6> 
                    <h6>2. Si usted quiere agregar un examen al video(curso), la cantidad de preguntas que deben realizarse deben ser mayores a 3 preguntas.</h6>
                    <h6>- Por cada pregunta  que se añada  al examen se debran añadir mas 2 posibles respuesta(escritas) y se debe colocar las respuesta conrrectas con un numero (como se muestra en el ejemplo) </h6>
                    <h6>- Despues de realizar todas la preguntas (cerrada) debe precionar el boton "subir el examen al video", para que el examen se agregue al video, el cual se mostra una vez que el estudinate tome el curso.</h6>
                    </h6>
                   
                </div>
                <br/><br/>
                <div className="date-context">
                    <h6>Fecha:{this.state.date.getDate() + "/" + (this.state.date.getMonth() +1) + "/" + this.state.date.getFullYear()} </h6>
                </div>
                </div> 
                
                </div>

                    <div class="col-8">
                    <h6>¿Desea agregar material de apoyo al video?</h6>
                    <ul class="nav nav-pills mb-3 button-menu-video" id="pills-tab" role="tablist">
                   


                    <li class="nav-item" >
                        <a class="nav-link" id="pills-profile-tab" data-toggle="pill" href="#pills-profile" role="tab"
                        aria-controls="pills-profile" aria-selected="false" class="btn btn-unique">Agregar examen al video</a>
                        
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" id="pills-contact-tab" data-toggle="pill" href="#pills-contact" role="tab"
                        aria-controls="pills-contact" aria-selected="false" class="btn btn-unique">Archivos</a>
                    </li>


                    <li class="nav-item">
                        <a class="nav-link active" id="pills-home-tab" data-toggle="pill" href="#pills-home" role="tab"
                        aria-controls="pills-home" aria-selected="true" aria-selected="false" class="btn btn-unique">Links  </a>
                    </li>
                    </ul>
                  </div>


                    <div class="tab-content" id="pills-tabContent">
                    <div class="tab-pane fade" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
                    
                                    {/* contenido */}
                                    <AddMaterialApoyoLinks
                                         idVideo={this.state.idVideo}
                                    />
                    </div>
                    <div class="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">
                                 
                                    {/* contenido */}
                                 <div className="row">

                                        <div class="col-7 ">
                                        <AddExamVideo
                                            duration={this.state.timeAllVideo}
                                            timeall={this.state.timeAllVideo}
                                            objVideo={this.state.objVideo}
                                            ExamenVideoShow={this.ExamenVideoShow}
                                        />
                                        </div>
                                        <div class="col-5">
                                        <ShowExamenVideo
                                            showVideoExamen={this.state.showVideoExamen}
                                        />
                                        </div>
                                        </div>
                    </div>
                    <div class="tab-pane fade" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab">
                                    {/* Contenio */}
                                    <div class="col-12 ">
                                        <AddMaterialApoyo
                                            idVideo={this.state.idVideo}
                                        />
                                    </div>      
                        </div>
                    </div>
                
                </div>
                {/*---Examen---*/}
                {/* <div className="row bg-dark">
                    <div class="col-7 ">
                    <AddExamVideo
                        duration={this.state.timeAllVideo}
                        timeall={this.state.timeAllVideo}
                        objVideo={this.state.objVideo}
                        ExamenVideoShow={this.ExamenVideoShow}


                    />
                    </div>
                    <div class="col-5">
                    <ShowExamenVideo
                        showVideoExamen={this.state.showVideoExamen}
                    />
                    
                    
                    </div>

                    </div> */}

                    {/* boton que regresa atras */}
                    <div class="contenedorbtn">
                    <button class="botonF1" onClick={()=>history.goBack()}>
                    
                    <span><h6 className="textbtn">Volver</h6></span>
                    </button>
                </div>



            </div>
        )
    }


};