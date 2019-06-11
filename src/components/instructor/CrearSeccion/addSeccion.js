import React, { Component } from 'react'
import Url from '../../../config'
import NuevaSeccion from './nuevaSeccion'
import { BrowserRouter as Router, Route, Link, Redirect, withRouter } from "react-router-dom";

import { format, render, cancel, register } from 'timeago.js';



export default class AddSeccion extends Component{

    constructor(props){
        super(props)
            this.state={
                obcurso:this.props.ccurso4,
                iddelcurso:this.props.ccurso4._id,
                courseSeccion:[],
                componente:false
            
            }
            this.nextComponent=this.nextComponent.bind(this)
    }


  async  componentWillMount(){

        var url = `${Url.UrlMostarSeccionUnCurso}${this.state.obcurso._id}`
      await  fetch(url)
         .then(data=>data.json())
         .then(res=>{
             this.setState({
                 courseSeccion:res
             })
             console.log(res.length);
             
         })

    }

   
    nextComponent(e){
        
        this.setState({
            componente:true
        })
    }

    render(){
        // console.log('77777777777777777')
        // console.log(this.state.obcurso)

        console.log(this.state.courseSeccion,'addseccion.js')
        console.log(this.props.IDcurso);
        
        if(this.state.componente){
            return(
                <NuevaSeccion cursoseccion={this.state.courseSeccion} iddelcurso2={this.state.iddelcurso} IDcurso={this.props.IDcurso}/>
            )
        }else
        return(
            <div>
            <div className="bannser-sections">
              <div className="row"  id="banner">
                <div className="col-sm" id="content">
                  <h2>{this.state.obcurso.namecourse}</h2>
                  <h5>Sigla: {this.state.obcurso.sigla}</h5>
                  <h5>{this.props.idCourse}</h5>
                  <h6>{this.state.obcurso.descripcion}</h6>
                  <h6 class="yellow-text"> Creado hace : {format(this.state.obcurso.createDateCourse)}</h6>
                 <br/>
                    
                     </div>
              </div>
            </div>

              <div className="container-acordion container-crear-seccion">
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
                    
                    <div class="row">
                    <div class="col-sm">
                      <a class="collapsed" data-toggle="collapse" data-parent="#accordionEx194" href={`#${valor}`} aria-expanded="false" aria-controls="collapse6">
                        
                              <h3 class="mb-0 text-dark">
                            
                          seccion:{data.seccion} {data.titleSeccion}<div class="animated-icon1 float-right mt-1">
                       
                          <span></span><span></span><span></span></div>
                        
                        </h3>
                        
                      </a>
                      </div>
                      
                          <div class="btn-group btn-group-sm" role="group" aria-label="Basic example">
                         <Link to={`/homevide/${data._id}`}  >   <button type="button" class="btn btn-cyan btn-sm">agregar video </button> </Link>  
                          </div>

                      </div>
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
                <Link to={`/seccions/addseccion/${this.state.courseSeccion.length+1}/${this.state.iddelcurso}`} >
                    <div class="btn-group-vertical w-100" role="group" aria-label="Vertical button group">
                        <button type="button" value="" onClick={this.nextComponent} class="btn btn-indigo ml-0"><i class="fas fa-layer-group p-1"></i> Añadir Nueva Seccion</button>
                    </div>
                    </Link>
                </div>


    
           




          </div>
        )
    }
}