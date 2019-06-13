import React, { Component } from 'react';
// import video from '../../videos/video.MP4'

import './VideoReact.css'
import video from './Chernobyl.mp4'
// import poster from '../../img/sia.png'

// importando la funcion que convierte los minutos a horas
import utils from './utils'

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
          nReproducciones:''
      }
      
      console.log(this.state,'0000000000000000000')

      this.durationRef=React.createRef();

      this.currentTime=this.currentTime.bind(this)
  }

  


  componentDidMount(){
    
    var duration1;
    var p;
    // 
    this.durationRef.current.ontimeupdate = (en)=>{
      // console.log(en.srcElement.currentTime);
        p = en.srcElement.currentTime
        
        this.setState({
          progressTime:p

        })
       
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


  currentTime(e){
    console.log(e);
    console.log('EXAMEN::::::::::::::::::::::::');
  
  }


  render(){ 
    // var timeVideo = document.getElementById("movie")
    //  console.log(timeVideo);
    console.log(this.props.link2);
    
       
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

              
              </div>

          </div>
      </div>
    )
  }

}

export default Playvideo;