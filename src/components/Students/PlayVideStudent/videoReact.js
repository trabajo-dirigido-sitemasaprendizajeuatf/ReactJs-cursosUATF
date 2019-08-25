import React, { Component } from 'react';
// import video from '../../videos/video.MP4'

import './VideoReact.css'
import video from './Chernobyl.mp4'
// import poster from '../../img/sia.png'
import MainVideoExamen from '../videoExamen/mainVideoExamen'

import URLtakeExman from '../../../config'
// importando la funcion que convierte los minutos a horas
import utils from './utils'

//for view modal in time determined
import 'bootstrap/js/src/modal'
import $ from 'jquery'





class Playvideo extends Component{

  constructor(props){
    super(props)
      this.state={
        OBJVIDEO:'',
        link:this.props.link2,

          Objvideo:'',
          user:'toby',
          duration:'',
          progressTime:'',
          nReproducciones:'',

          // examen del video
          tiemposDeExam:[],
          cont:0,

          // objeto examenVideo que llega en props  --> this.props.objExamVideo

          examen:''

      }
      
      // console.log(this.state,'0000000000000000000')

      this.durationRef=React.createRef();

      this.currentTime=this.currentTime.bind(this)
  }


  componentDidMount(){
    
    var duration1;
    var p;
    this.durationRef.current.ontimeupdate = (en)=>{
        p = parseInt(en.srcElement.currentTime)
        if(this.state.progressTime!==p){
           this.setState({
              progressTime:p
            })
        }
        // this.setState(prevState => ({ progressTime:prevState!=p?p:'' }))
        // this.setState({
        //   progressTime:p

        // })
    }
    // duracion del video
    this.durationRef.current.onloadedmetadata = (e)=>{
      console.log(e.srcElement.duration);

     
      console.log(e.srcElement.currentTime);
      console.log(e);
      
          duration1=e.srcElement.duration;
          
          this.setState({
            duration:duration1

          })
          
    }
  }


  examenes=()=>{
  
    // var cont=0;
    var tiempoExamen  = []
    
      
      tiempoExamen.push(this.props.objExamVideo.map((d,i)=>{
        console.log(d.timeShowExamen)
        console.log(this.state.progressTime)
        
          if(d.timeShowExamen===this.state.progressTime){
            // this.setState({tiemposDeExam:tiempoExamen,cont:1})
            console.log(d.timeShowExamen)
            
            this.examen()
            
          }
        return d.timeShowExamen
      }))
      
  }


  currentTime(e){
    console.log(e);
    console.log('EXAMEN::::::::::::::::::::::::');
  
  }

  examen=()=>{

    var check=false
    this.props.objTakeExamControl.map((d,i)=>{

        check =d.examenResuelto
    })

      if(this.state.timeShowExamen===this.props.time && check==false){

        $('#modalExamenForm').modal('show');
        this.durationRef.current.pause();
    
      }

  }



  render(){ 
    // var timeVideo = document.getElementById("movie")
     console.log('player video ---------->>>>');
    // console.log(this.props.link2);
    // console.log(this.state.progressTime);
    console.log(this.props.idVideo)
    console.log(this.state.tiemposDeExam)
    // console.log( this.props.objExamVideo.map((d,i)=>{
    //              console.log (d.timeShowExamen)
    //               this.setState({
    //                 tiemposDeExam:d.timeShowExamen
    //               })
    //             }))

    
       
    return (
      <div>
          <div>
              <video ref={this.durationRef} src={this.props.link2} id="movie" class="embed-responsive embed-responsive-16by9" controls autoPlay>
                  {/* <source src={this.props.link2} /> */}
                  <embed src={this.props.link2} type="video/mp4" width="854" height="500" scale="0.85" />
              </video>

              {/* _::::::::metadatos del video del video::::::: */}
              <div>
                <span> tiempo ss:  {this.state.duration}</span> <br/>
                <span> tiempo hh/mm/ss:  {utils.parseTimeString(this.state.duration)}</span>  <br/>
                <span> tiempo ss:  {this.state.progressTime}</span> <br/>
                <span> tiempo hh/mm/ss:  {utils.parseTimeString(this.state.progressTime)}</span> <br/>
                <span>porcentaje:{utils.percentageNumber(this.state.progressTime,this.state.duration)} %  </span> <br/>
                <progress max="100" value={utils.percentageNumber(this.state.progressTime,this.state.duration)} ></progress> <br/>

                <span> {utils.percentageNumber(this.state.progressTime,this.state.duration)===100? "video completado" : 'video no completad'}  </span>
                
                {
                  
                // parseInt(this.state.progressTime)===this.examenes()?this.examen():'' 
                
                
                }

                {this.examenes()}
                
                <MainVideoExamen objExamVideo={this.props.objExamVideo} time={this.state.progressTime} 
                  ObjSeccionesDelCurso={this.props.ObjSeccionesDelCurso}
                />

                <div class="text-center">
                  <a href="" class="btn btn-default btn-rounded my-3" data-toggle="modal" data-target="#modalContactForm">Launch
                    Modal Contact</a>
                </div>
              
              </div>

          </div>
      </div>
    )
  }

}

export default Playvideo;