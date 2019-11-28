import React, { Component }  from 'react'
import { Link } from 'react-router-dom'

import VerNotas from '../verNotas/verNotas'

import img from './img/sistemas.jpg'
import './main.css'
import './main.js'
class BarraLateral extends Component{

    constructor(props){
        super(props)
            this.state={

            }
    }

    componentDidMount(){
        const btntoogle = document.querySelector('.toogle-btn');

        console.log(btntoogle);
        
    }

    render(){
        return(
            <div>

      <div class="area"></div>
      <nav class="main-menu">
            <ul className="mt-3">
                <li>
                    <Link to="/instructor">
                    <a href="#" className="link-sideBar">
                    <i class="icon-sidebar-teacher fas fa-chalkboard"></i>
                        <span class="nav-text ">
                            Mis cursos
                        </span>
                    </a>
                    </Link>
                  
                </li>
                <li class="has-subnav">
                    <Link to="/CreateCourse">

                    <a href="#" className="link-sideBar" >
                    <i class="icon-sidebar-teacher fas fa-chalkboard-teacher fa-2x"></i>
                        <span class="nav-text">
                            Crear nuevo curso
                        </span>
                    </a>
                    </Link>
                    
                </li>
                <li class="has-subnav">
                    <Link to={`/view/notes/course`}>
                        <a href="#" className="link-sideBar">
                        <i class="icon-sidebar-teacher fas fa-user-graduate fa-2x"></i>
                            <span class="nav-text">
                                Ver notas
                            </span>
                        </a>
                    </Link>
                </li>
                <li class="has-subnav">
                    <a href="#">
                       <i class="fa fa-folder-open fa-2x"></i>
                        <span class="nav-text">
                            Paginas
                        </span>
                    </a>
                   
                </li>
              
                <li>
                    <a href="#">
                        <i class="fa fa-font fa-2x"></i>
                        <span class="nav-text">
                           Apuntes
                        </span>
                    </a>
                </li>
                <li>
                   <a href="#">
                       <i class="fa fa-table fa-2x"></i>
                        <span class="nav-text">
                            Tablas
                        </span>
                    </a>
                </li>
                <li>
                   <a href="#">
                        <i class="fa fa-map-marker fa-2x"></i>
                        <span class="nav-text">
                            Mapas
                        </span>
                    </a>
                </li>
                <li>
                    <a href="#">
                       <i class="fa fa-info fa-2x"></i>
                        <span class="nav-text">
                            Documentacion
                        </span>
                    </a>
                </li>
            </ul>

            <ul class="logout">
                <li>
                   <a href="#">
                         <i class="fa fa-power-off fa-2x"></i>
                        <span class="nav-text">
                            Logout
                        </span>
                    </a>
                </li>  
            </ul>
        </nav>
  
   
            </div>
            )
    }

};

export  default BarraLateral;