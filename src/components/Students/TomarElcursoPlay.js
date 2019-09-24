import React, { Component} from 'react'
import { Link } from 'react-router-dom'
import Playvideo from './PlayVideStudent/videoReact'
import URL from '../../config'
import './TomarElcursoPlayer.css'

import ChatGbobalStudent from './chats/chatGlobalStudent'
import URLtakeExman from '../../config'

import TmaterialApoyo from './tmaterialApoyo/materialApoyo'

// muestra los datos del curso
import DatosDelCurso  from '../Students/tdatosCurso/datosDelCurso'

//psinner lodingMessages
import LoadingMessage from '../Students/chats/loadingMessages/loadingMessages';

import ReatingStart from './reatingStar/main'

import GReatingStar from './reatingStar/ratingStar'


export default class TomarCursoPlay extends Component{

    constructor(props){
        super(props);
        this.state={
            IDCOURSE:this.props.match.params.id,
            ObjSeccionesDelCurso:[],
            linkvideo:'',
            idVideo:'',
            objExamVideo:[],
            objTakeExamControl:[]
        }
        this.myRef=React.createRef()
        // this.onChange=this.onChange.bind(this)
        console.log(this.state.linkvideo);
        
    };


    onChange=(link,idVid)=>{


        // console.log(link.replace("\\",'/'));
        // link=link.replace("\\",'/')
      
      
      this.setState({
          linkvideo:link,
          idVideo:idVid
      })
      console.log('o')
      var url = URLtakeExman.UrlExamenVideo;
        var idVideo={idVideo:idVid}
  
         var params={
          method:'POST',
          body:JSON.stringify(idVideo),
          headers:{
            'Content-Type':'application/json'
          }
        }
  
        fetch(url,params)
          .then(data=>data.json())
          .then(data=>{
            console.log('video react ---->>>')
            console.log(data)
            this.setState({
                objExamVideo:data,
                
            })
            var idUser = localStorage.getItem('id')
            var idVideo;

            data.map((d,i)=>{ 
              idVideo = d.idVideo;
            })

          this.fetchCheckExam(idUser,idVideo)

          })
          .catch((err)=>{
            console.log(err)
          })
    }


    componentWillMount(){

        var url=`${URL.UrlMostarSeccionUnCurso}${this.props.match.params.id}`
        console.log(url)
        fetch(url)
         .then(res=>res.json())
         .then(data=>{
           console.log("++++++++++++++++++++ddddd")
            console.log(data);
            this.setState({
                ObjSeccionesDelCurso:data
            })

            
            
         })
         .catch(err=>{console.log(err)})


         //verifica si el examen ya fue tomado

        //  fectchCheckExam()
    }

    //realiza una peticion al servidor de los examenes ya tomados
    fetchCheckExam=(idUser,idVideo)=>{


      var objPeticion = {
        idUser:idUser,
        idVideo:idVideo
      }
      //http://localhost:3005/courses/examen/resolved 
      var url = URL.UrlTakeExamControl
      var params = {
        method:'POST',
        body:JSON.stringify(objPeticion),
        headers:{
          'Content-Type': 'application/json'
        }
      }

      fetch(url,params)
        .then(data=>data.json())
        .then(res=>{
          this.setState({
            objTakeExamControl:res
          })
          console.log('========@@@@@==============');
          console.log(res)
          console.log('========@@@@@==============');
        })
        .catch((err)=>{
            console.log(err)
        })
      
    }


    render(){
      console.log(this.state.linkvideo,'9999999');

        return(
            <div className="container-curso-playerVideo pt-4 pl-4 pr-4">

                <section class="magazine-section">

                <div class="row">
                    {/* ------------seccion del videos player-------- */}
                    <div class="col-lg-8 col-md-12" id="video-container">

                    <div class="single-news mb-lg-0 mb-4" >
                    
                        <div class="video overlay rounded z-depth-1-half mb-2" id="video-containe2"  >
                        {/* <img class="img-fluid" src="https://mdbootstrap.com/img/Photos/Slides/3.jpg" alt="Sample image"></img> */}
                        <Playvideo 
                          link2={this.state.linkvideo} 
                          idVideo={this.state.idVideo} 
                          objExamVideo={this.state.objExamVideo}
                          ObjSeccionesDelCurso={this.state.ObjSeccionesDelCurso}  
                          objTakeExamControl={this.state.objTakeExamControl}
                        />
                        
                        <a>
                            <div class="mask rgba-white-slight"></div>
                        </a>
                        </div>


                    </div>

                    </div>
                    {/* --------end of seccion de video plaer----- */}

                 

                    {/* -----lateral derecho----- */}
                    <div class="col-lg-4 col-md-12">
                    <div class="single-news mb-5">


{/* -------SCROLL - CONTENIDO DEL CURSO--------- */}
 <div class="table-wrapper-scroll-y my-custom-scrollbar  ">
          {/* titulo del scrol --Contenido del curso */}
          
        <div className=" border-0 pt-2 pl-3 pt-2 pb-2" style={{background:'#6664D4'}}>
          <tr>
          <th><h6 className="font-weight-bold text-white " id="seccion-title">Contenido del curso</h6></th>
          </tr>
        </div>

 {
     this.state.ObjSeccionesDelCurso.map(data=>{
                return(

                    <table id="mdb-flag-table" class="table table-hover border-0">
                        <thead>
                        <tr>
                        <th className="border-0"><h6 className="font-weight-bold border-0" id="seccion-title"> Seccion:{data.seccion} {data.titleSeccion}</h6></th>
                        </tr></thead>
                        <tbody>
                            {data.video.map(data2=>{
                                return (
                                    <tr>
                                    <td class="flag-name video-seccion border-0" id="title-video">
                                   <a><div ref={this.myRef} id={data2.idVideo} onClick={()=> this.onChange(data2.linkfile,data2.idVideo)}>
                                     <i class="fas fa-play-circle p-1"  ></i>{data2.title}
                                    </div></a>
                                     {/* <input type="text" name="idvideo" onClick={this.onChange.bind(this)} value={data2.linkfile}></input> */}
                                     </td>
                                    {/* <td class="disabled"></td>
                                    <td><i class="far fa-arrow-alt-circle-down">
                                      <a href="../pdfs/reporte2-05-10.pdf" download="Reporte2Mayo2010">Materia de apoyo</a>
                                    </i></td> */}

                                    <td class="disabled border-0"></td>
                                    <td className="border-0">
                                      <a href="#">
                                        <TmaterialApoyo
                                          idVideo={data2.idVideo}
                                        /> 
                                      </a>
                                      
                                    </td>
                                    
                                      </tr>
                                )
                            })}
                        </tbody>
                     </table>
                )
     })
 
 }
  
</div>
{/* -------------------- */}



                    </div>

                    </div>
                    {/* ---end de lateral derecho-- */}


           

                </div>
{/* ------DATOS DEL CURSO */}


            

                </section>
{/* ------------- */}





<div class=" classic-tabs mx-2 p-0">


<ul class="nav nav-pills mb-2 menu-horizontal" id="myClassicTabShadow" role="tab">
  <li class="nav-item">
    <a class="nav-link  active  waves-light active show"  id="profile-tab-classic-shadow" data-toggle="tab" href="#profile-classic-shadow"
      role-toggle="tab" aria-controls="profile-classic-shadow" aria-selected="true">Descripción</a>
  </li>
  <li class="nav-item">
    <a class="nav-link  waves-light" id="follow-tab-classic-shadow" data-toggle="tab" href="#follow-classic-shadow"
      role="tab" aria-controls="follow-classic-shadow" aria-selected="false">Preguntas y respuesta</a>
  </li>
  <li class="nav-item">
    <a class="nav-link waves-light" id="contact-tab-classic-shadow" data-toggle="tab" href="#contact-classic-shadow"
      role="tab" aria-controls="contact-classic-shadow" aria-selected="false">Calificar el curso</a>
  </li>
  <li class="nav-item">
    <a class="nav-link waves-light" id="awesome-tab-classic-shadow" data-toggle="tab" href="#awesome-classic-shadow"
      role="tab" aria-controls="awesome-classic-shadow" aria-selected="false">Be awesome</a>
  </li>
</ul>

  <hr className="hr-menu"/>

<div class="tab-content card z-depth-0" id="myClassicTabContentShadow">
  <div class="tab-pane fade active show" id="profile-classic-shadow" role="tabpanel" aria-labelledby="profile-tab-classic-shadow">
    <p>
          

          <DatosDelCurso
            idCourse={this.state.IDCOURSE}
          />


    </p>
  </div>
  <div class="tab-pane fade" id="follow-classic-shadow" role="tabpanel" aria-labelledby="follow-tab-classic-shadow">
    <p>

          {
            this.state.idVideo?<ChatGbobalStudent
                              idVideo={this.state.idVideo}
                            />
            :<LoadingMessage/>
            
          
          
          }
          

    </p>
  </div>
  <div class="tab-pane fade" id="contact-classic-shadow" role="tabpanel" aria-labelledby="contact-tab-classic-shadow">
   
      <div className="content-reatings">
      <section className="mt-5">
        <h3 class="h4-responsive font-weight-bold text-center my-1"><i class="fas fa-american-sign-language-interpreting"></i>  Calificar el curso</h3>
          <p class="text-center w-responsive mx-auto mb-5 p-5">Puedes calificar este curso de acuerdo a la cantidad de estrellas, 1 estrella: malo, 
          2 estrellas: No esta bien, 3 estrellas: Promedio, 4 estrella: Bueno y 5 estrellas: Exelente.</p>
      </section>
      
              <div className="containner-start">
                  {/* <ReatingStart
                    idCourse={this.state.IDCOURSE}
                  /> */}
                  <GReatingStar
                    idCourse={this.state.IDCOURSE}
                  />
              </div>
   
      </div>

  </div>
  <div class="tab-pane fade" id="awesome-classic-shadow" role="tabpanel" aria-labelledby="awesome-tab-classic-shadow">
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
      dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
      ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore
      eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
      deserunt mollit anim id est laborum.</p>
  </div>
</div>

</div>




            </div>
        )
    };
};