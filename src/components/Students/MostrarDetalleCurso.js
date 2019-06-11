import React, { Component } from 'react'
import './MostrarDetalleCurso.css'
import { format, render, cancel, register } from 'timeago.js';
import Url from '../../config'

export default class MostrarDetalleDelcurso extends Component{
    constructor(props){
        super(props)
            this.state={
              course:this.props.course,
              courseSeccion:[]

            }
    }

    componentWillMount(){

      var url = Url.UrlMostarSeccionUnCurso

      fetch(`${url}${this.props.course._id}`)
      .then(data=>data.json())
      .then(data=>{
          console.log(data);

          this.setState({
            courseSeccion:data
          })
          
      })

    }
    

    render(){
      console.log(this.props);
        return(
            <div>
            <div className="bannser-sections">
              <div className="row"  id="banner">
                <div className="col-sm" id="content">
                  <h2>{this.state.course.namecourse}</h2>
                  <h5>Sigla: {this.state.course.sigla}</h5>
                  <h5>{this.props.idCourse}</h5>
                  <h6>{this.state.course.descripcion}</h6>
                 <br/>

                </div>
                    <div className="card" id="card-content">
                        <img className="card-img-top" src={this.state.course.posterCurso      } alt="Card image cap"></img>
                        <div className="card-body">
                        <h4 className="card-title text-dark"><a>{this.state.course.namecourse}</a></h4>

                          <h6 className="card-title text-dark"><a>Autor:</a></h6>
                          <p className="card-text">{this.state.course.autor}</p>
                          <p className="card-text">Creado hace {format(this.state.course.createDateCourse)}</p>
                          <a href="#" className="btn btn-primary">Tomar Curso</a>
                          <a href="#" className="btn btn-primary">Agregar Curso</a>
                        </div>
                     </div>
              </div>
            </div>

              <div className="container-acordion">
                <div class="accordion md-accordion accordion-3 z-depth-1-half" id="accordionEx194" role="tablist" aria-multiselectable="true">
                <h2 class="text-left text-uppercase  py-4 px-3">Contenido del curso:</h2>

                <hr class="mb-0"></hr>
                <div class="card">

                  <div class="card-header" role="tab" id="heading5">
                    <a class="collapsed" data-toggle="collapse" data-parent="#accordionEx194" href="#collapse5" aria-expanded="false"
                      aria-controls="collapse5">
                      <h3 class="mb-0 red-text">
                        You're the greatest accordion! <div class="animated-icon1 float-right mt-1"><span></span><span></span><span></span></div>
                      </h3>
                    </a>
                  </div>

                  <div id="collapse5" class="collapse" role="tabpanel" aria-labelledby="heading5" data-parent="#accordionEx194">
                    <div class="card-body pt-0">
                    <ul class="navbar-nav mr-auto">
                      <li class="nav-item active">
                        <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
                      </li>
                      <li class="nav-item">
                        <a class="nav-link" href="#">Features</a>
                      </li>
                      <li class="nav-item">
                      <hr></hr>
                      <p> <a class="nav-link" href="#">Pricing</a></p>
                      </li>
                    </ul>
                    </div>
                  </div>
                </div>

                <div class="card">
                {
                    this.state.courseSeccion.map(data=>{
                      var titleSeccion=data.titleSeccion;
                      var valor=titleSeccion.split(" ")[0];
                    return(
                    <div>
                    <div class="card-header" role="tab" id="heading6">
                      <a class="collapsed" data-toggle="collapse" data-parent="#accordionEx194" href={`#${valor}`} aria-expanded="false" aria-controls="collapse6">
                        
                              <h3 class="mb-0 text-dark">
                          seccion:{data.seccion} {data.titleSeccion}<div class="animated-icon1 float-right mt-1"><span></span><span></span><span></span></div>
                        </h3>
                      </a>
                    </div>

                    <div id={valor} class="collapse" role="tabpanel" aria-labelledby="heading6" data-parent="#accordionEx194">
                      <div class="card-body pt-0">
                        <p> { data.video.map(title=>{
                              return <p>{title.title}</p>
                        }) }</p>
                      </div>
                    </div>
                    </div> 
                  )})

                }
                </div>
                
                </div>
                </div>
          </div>
            
        )
    }

}