import React, { Component }  from 'react'
import { Link } from 'react-router-dom'

import 'jquery'
import $ from 'jquery'


import img from './img/sistemas.jpg'
import './main.css'
// import './main2.js'
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

        // muestra activos los menus seccionados (sidebarAdmin)
            $(function() {
                $(".main-menu-sidebar-admin ul li a").click(function() {
                // quitar .seleccionado a todos (por si hay alguno)
                $(".main-menu-sidebar-admin ul li a").removeClass("seleccionado");
                // agregar seleccionado a "este" elemento.
                $(this).addClass("seleccionado");
                });
            });



        return(
            <div>

      <div class="area"></div>
      <nav class="main-menu-sidebar-admin">

            <ul className="mt-3">
                <li>
                    <Link to="/admin/show/students">
                    <a href="#" className="link-sideBar-admin">
                    <i class="icon-sidebar-admin fas fa-users fa-1x"></i>

                        <span class="nav-text ">
                            Estudiantes
                        </span>
                    </a>
                    </Link>
                  
                </li>

                <li class="has-subnav">
                    <Link to={`/admin/show/all/assistants`}>
                        <a href="#" className="link-sideBar-admin">
                        <i class="icon-sidebar-admin fas fa-user-friends fa-1x"></i>
                            <span class="nav-text">
                                Auxiliares
                            </span>
                        </a>
                    </Link>
                </li>

                <li class="has-subnav">
                    <Link to="/admin/show/all/teachers">

                    <a href="#" className="link-sideBar-admin" >
                    <i class="icon-sidebar-admin fas fa-user-alt fa-1x"></i>
                        <span class="nav-text">
                            Docentes
                        </span>
                    </a>
                    </Link>
                    
                </li>

                <li className="has-subnav">
                    <Link to='/admin/do/scraping'>
                   <a href="#" className="link-sideBar-admin" >
                       <i class="fa fa-table fa-2x"></i>
                        <span class="nav-text">
                            Importar DB estudinates
                        </span>
                    </a>
                    </Link>
                </li>

                <li class="has-subnav">
                <Link to='/admin/backup'>
                    <a href="#" className="link-sideBar-admin">
                       <i class="fa fa-hdd fa-2x"></i>
                        <span class="nav-text">
                            Backup
                        </span>
                    </a>
                    </Link>
                </li>
                
                <li>
                    <a href="#">
                    <i class="icon-sidebar-admin fas fa-chart-bar"></i>
                        <span class="nav-text">
                            Graphs and Statistics
                        </span>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <i class="fa fa-font fa-2x"></i>
                        <span class="nav-text">
                           Quotes
                        </span>
                    </a>
                </li>
              
                <li>
                   <a href="#">
                        <i class="fa fa-map-marker fa-2x"></i>
                        <span class="nav-text">
                            Maps
                        </span>
                    </a>
                </li>
                <li>
                    <a href="#">
                       <i class="fa fa-info fa-2x"></i>
                        <span class="nav-text">
                            Documentation
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