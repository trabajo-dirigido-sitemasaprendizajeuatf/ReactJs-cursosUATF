import React, { Component } from 'react'
import URL from '../../../config'
import utils from '../playerVideoTeacher/utils'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import './addExamenVideo.css'
export default class AddExamVideo extends Component{
    constructor(props){
        
        super(props)
        
            this.FORMDATA=[];
            this.POSSIBLE=[];
            this.ANSWER=[];

            this.CUESTIONARIO=[];

            this.state={
                obSeccion:[],
                newform:[],
                newFormPossibleAnswer:[],
                newFormAnswer:[],

                questions:[],
                possibleAnswer:[],
                answer:[],

                cuestionario:[],
                // alerts
                alert:false,
                success:false,
                ok:false,

                //puento en el que se mostrara el examen
                init:0,
                end:123
            }
            
            this.myRef=React.createRef();
            this.myRefPosibleResponse=React.createRef()
            this.myRefAnswer=React.createRef();

            this.renderAlrt2=this.renderAlrt2.bind(this)
    }

    

    addQuestion(n){

        console.log('.-------nwa question');
        var nPregunta=this.FORMDATA.length+1
        
          var form =  ( <input type="text" id="materialFormNameModalEx1" class="form-control form-control-sm" placeholder="Introduzca la pregunta"></input>)

         

        if(this.FORMDATA.length<1){
            this.FORMDATA.push(form)
            this.setState({
                newform:this.FORMDATA
            })
        }
        
    }

    addPossibleResponse=()=>{

        var formPossible=  ( <input type="text" id="materialFormNameModalEx1" class="form-control form-control-sm" placeholder="Posibles respuesta"></input>)

        this.POSSIBLE.push(formPossible)
       
        this.setState({
            newFormPossibleAnswer:this.POSSIBLE
        })

    }


    addCorrectAnswer=()=>{
        var formAnswer=(<input type="text" id="materialFormEmailModalEx1" class="form-control form-control-sm" placeholder="Respuesta Correcta"></input>
                        )
    
        this.ANSWER.push(formAnswer)

        this.setState({
            newFormAnswer:this.ANSWER
        })
}



    agregarPregunta(){

        // console.log(this.myRef.current.children);
        // console.log(this.myRefPosibleResponse.current.children);
        // console.log(this.myRefAnswer.current.children);
        
        var aux1
            
            for(var i=0;i<this.myRef.current.children.length;i++){
                // console.log(this.myRef.current.children[i].value)
                aux1=this.myRef.current.children[0].value
            }
       

        var aux2=[]
        for(var i=0;i<this.myRefPosibleResponse.current.children.length;i++){
            // console.log(this.myRefPosibleResponse.current.children[i].value);
            aux2.push(this.myRefPosibleResponse.current.children[i].value)
        }
        
        var aux3=[]
        for(var i=0;i<this.myRefAnswer.current.children.length;i++){
            // console.log(this.myRefAnswer.current.children[i].value);
            aux3.push(this.myRefAnswer.current.children[i].value)
        }


        

        if(aux1!=undefined && aux2[0]!=undefined && aux3[0]!=undefined && aux1!=''&&aux2[0]!=''&&aux3[0]!=''){
           
           var aux4={
            prsegunta:aux1,
            posiblerespuesta:aux2,
            respuestaCorrecta:aux3
            }
        
    
            this.CUESTIONARIO.push(aux4)
            // this.CUESTIONARIO.map(data=>{console.log(data)},'qqqqqqqqqqqq')
            
    
            this.setState({
                cuestionario:{preguntas:this.CUESTIONARIO}
            })
            // console.log(this.state.cuestionario);
            // console.log(this.state.cuestionario.preguntas);
            
            this.setState({success:true})


            //vacia los capos para volver a reallizar la pregunta
            this.setState({
                newform:[],
                newFormPossibleAnswer:[],
                newFormAnswer:[],

                questions:[],
                possibleAnswer:[],
                answer:[],
            })
            this.FORMDATA=[];
            this.POSSIBLE=[];
            this.ANSWER=[];
         

            

        }else{
            this.setState({alert:true})
        }
      
        
        
    }



    sendData(){

        var url=URL.UrlaCuestionarioRepaso
        var params={
            method:'POST',
            body:JSON.stringify(this.state.cuestionario),
            headers:{
                'Content-Type': 'application/json'
            }
        }

        fetch(url,params)
         .then(data=>data.json())
         .then(res=>{
             console.log(res);
            this.setState({ok:true})
             
         })
    }

    renderAlrt2(){

        if(this.state.alert){
                toast.warn('complete la pregunta',{position: "top-right"})
                this.setState({alert:false})
        }else{}

        if(this.state.success){
            toast.success('Pregunta agregada',{position: "top-right"})
            this.setState({success:false})
        }
    }

    updateTime=(e)=>{
        console.log('update time---');
        

        this.setState({
            init:e.target.value
        })
        console.log(this.state.init)

    }

    render(){
        const {history} =this.props

       console.log(this.CUESTIONARIO.length);
       console.log(this.CUESTIONARIO);
       
        
        
        // console.log(this.state.cuestionario);
        // console.log(this.state);
        
        return(
            <div className="body-formlario">

                <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={true}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnVisibilityChange
                draggable
                pauseOnHover
                />  

                {this.renderAlrt2()}
                <div class="container-form-pregunta" id="modalContactForm" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
                <div class="" role="document" id="form-global">

                   
                    <div class="modal-content" >

                        <div class="modal-header primary-color white-text">
                            <h4 class="title">
                                <i class="fa fa-pencil-alt"></i> Añadir Repaso al video</h4>
                    
                        </div>

                        <div className="formulario-pregunta">
                                <div class="modal-body" >


                                <p className="text-left"><i class="fas fa-film"></i> Seleccion el minuto en el que se mostrara el examen</p>        
                                <div class="inputDiv">
                                    <p>time video:{utils.parseTimeString(this.state.init)} <input min="0" max={this.props.timeall} step="1" type="range" name="volumen" value={this.state.init} onChange={this.updateTime.bind(this)}></input></p>
                                </div>

                                    <h3>Cantidad de preguntas realizadas: {this.CUESTIONARIO.length}</h3>

                                    <p className="text-left"><i class="fa fa-pencil-alt prefix"/> Pregunta:{this.FORMDATA.length}</p>
                                    <div ref={this.myRef} class="md-form form-sm">{
                                        this.state.newform.map(data=>{
                                            return(data)
                                        })
                                    }</div>

                                    <p className="text-left"><i class="fa fa-pencil-alt prefix"/> Respuestas posibles:{this.POSSIBLE.length}</p>
                                    <div ref={this.myRefPosibleResponse} class="md-form form-sm"> {
                                        this.state.newFormPossibleAnswer.map(data=>{
                                            return(data)
                                        })
                                    }</div>

                                    <p className="text-left"><i class="fa fa-pencil-alt prefix"></i> Respuestas correctas:{this.ANSWER.length}</p>
                                    <div ref={this.myRefAnswer} class="md-form form-sm">{
                                        this.state.newFormAnswer.map(data=>{
                                            return(data)
                                        })
                                    }</div>
                                </div>

                                <div class="text-center mt-6 mb-2" id="botones-form">
                                    <button  onClick={this.addQuestion.bind(this)}  class="btn btn-primary">Agregar pregunta
                                    </button>
                                    <button  onClick={this.addPossibleResponse.bind(this)}  class="btn btn-primary">Agregar Posibles respuesta
                                    </button>
                                    <button  onClick={this.addCorrectAnswer.bind(this)}  class="btn btn-primary">Agregar respuesta Correcta
                                    </button>
                                </div>

                            

                                <div class="text-center mt-4 mb-2">
                                    <button  onClick={this.agregarPregunta.bind(this)} class="btn btn-primary">Agragar al Examen
                                        <i class="fa fa-send ml-2"></i>
                                    </button>

                                    <button  onClick={this.sendData.bind(this)} class="btn btn-primary">Subir Examen al video 
                                        <i class="fa fa-send ml-2"></i>
                                    </button>
                                </div>

                        </div>
                    </div>
                </div>
                </div>
                
            </div>
        )
    }


};