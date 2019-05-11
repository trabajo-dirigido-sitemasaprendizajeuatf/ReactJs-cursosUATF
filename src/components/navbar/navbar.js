import React, { Component } from 'react'
import faker from 'faker'

import { Link } from "react-router-dom"
import Signup from '../login/signup'
import Signin from '../login/signin';
import './navbar.css'
// BARRA LATERAL
import './barraLateral/main.css'
import './barraLateral/main.js'

import iconSistem from '../img/sistemas.jpg'
class Navbar extends Component{

    constructor(props){
        super(props)
            this.state={
               token:''
            }
            
            
    }

    selecNavbar(){
        if(!this.props.token){
            return false
        }else{
            
            return true
        }
    }

    

    render(){
        // console.log(faker.internet.email())
        return(
           
           
           <div>
            {/* <h1 style={{backgroundColor: `${faker.internet.color()}`}}>FAKER</h1> */}

            <nav className="navbar navbar-expand-lg navbar-light bg-white">
            {/*  */}
            <a class="navbar-brand" href="#">
                <img src={iconSistem} height="45" alt="mdb logo"></img>
            </a>
                <a className="navbar-brand" href="#" id="toggle-btn-navar"><i class="fas fa-braille"></i>Categorias   </a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">

                    {/* //---------------- */}
                    {
                        this.props.token ? 
                        <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                        : ''
                    }

                    {/* --------------------- */}
                        {/* <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a> */}
                    </li>
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Dropdown
                        </a>
                        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                        <a className="dropdown-item" href="#">Action</a>
                        
                        <a className="dropdown-item" href="#">Another action</a>
                        <div className="dropdown-divider"></div>
                        <a className="dropdown-item" href="#">Something else here</a>
                        </div>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
                    </li>
                    </ul>
                    
                    

                    
                    
                    <form class="form-inline active-cyan-4 long">
                        <input class="form-control form-control-sm mr-3 w-75" id="search" type="text" placeholder="Search" aria-label="Search"></input>
                        <i class="fas fa-search" aria-hidden="true"></i>
                    </form>

                    <ul class="navbar-nav ml-auto nav-flex-icons">
                        
                        <li class="nav-item">
                            <a class="nav-link" href="#">
                            <i></i> Instructor
                            <span class="sr-only">(current)</span>
                            </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">
                            <i></i> Mis cursos</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link waves-effect waves-light">1
                            <i class="fas fa-envelope"></i>
                            </a>
                        </li>

                        {
                            this.props.token ? 
                                <li class="nav-item avatar dropdown">
                                    <a class="nav-link dropdown-toggle" id="navbarDropdownMenuLink-55" data-toggle="dropdown"
                                    aria-haspopup="true" aria-expanded="false">
                                    {/* "https://mdbootstrap.com/img/Photos/Avatars/avatar-2.jpg" */}
                                    <img src="https://mdbootstrap.com/img/Photos/Avatars/avatar-2.jpg" class="rounded-circle z-depth-0" alt="avatar image" height="38"></img>
                                   
                                    
                                   
                                    </a>
                                    <div class="dropdown-menu dropdown-menu-right dropdown-secondary"
                                    aria-labelledby="navbarDropdownMenuLink-55">

                                    <Link className="nav-link" to="/signin" data-toggle="modal" data-target="#modalLoginForm">Signin</Link>
                                
                                    <Link className="nav-link" to="/signup" data-toggle="modal" data-target="#modalRegisterForm">Signup</Link>
                                    
                                    <a class="dropdown-item" href="#">Mi cuenta</a>
                                    <a class="dropdown-item" href="#">Cursos agregados</a>
                                    <a class="dropdown-item" href="#">My account</a>
                                    <a class="dropdown-item" href="#">Cerrar sesión</a>
                                    </div>
                                </li>
                            : <td>
                                <li>
                                <button type="button" class="btn btn-outline-default waves-effect btn-md" to="/signin" data-toggle="modal" data-target="#modalLoginForm">
                                   Sign in
                                </button>
                                <button type="button" class="btn btn-danger btn-md" data-toggle="modal" data-target="#modalRegisterForm">
                                    Sign up
                                </button></li>

                              </td>
                              
                        }
                        
                    </ul>

                    <Signup/>
                    {/* <Signin/> */}

            </div>
            </nav>

{/* :::::::::::::::::::::::::::::::::::::BARRA LAETARL:::::::::::::::::::::::::::::::::::::::::::: */}
        
            <div>


                <div id="sidebar">
                    
                        
                
                    <ul>
                    
                        <li><a href="#"  data-toggle="collapse" data-target="#navbarSupportedContent2"> <i class="fas fa-book-reader"></i> Todos Cursos</a></li>
                            <div className="sub-menu">

                                <div class="collapse navbar-collapse" id="navbarSupportedContent2">

                                    <ul class="navbar-nav mr-auto">
                                    <li class="nav-item active">
                                        <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" href="#">Features</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" href="#">Pricing</a>
                                    </li>
                                    </ul>

                                </div>
                            </div>
                        
                        <li><a href="#"> <i class="fas fa-atlas"></i>Por materias</a></li>
                        <li><a href="#"><i class="fas fa-boxes"></i>Otros</a></li>
                        <li><a href="#"><i class="fas fa-boxes"></i>Otros</a></li>
                        <li><a href="#"><i class="fas fa-boxes"></i>Otros</a></li>
                        <li><a href="#"><i class="fas fa-boxes"></i>Otros</a></li>
                        <li><a href="#"><i class="fas fa-boxes"></i>Otros</a></li>
                        <li><a href="#"><i class="fas fa-boxes"></i>Otros</a></li>
                        
                            <button class="navbar-toggler toggler-example" type="button" data-toggle="collapse" data-target="#navbarSupportedContent1"
                        aria-controls="navbarSupportedContent1" aria-expanded="false" aria-label="Toggle navigation"><span class="dark-blue-text"><i
                            class="fas fa-bars fa-1x"></i></span></button>

                    <div class="collapse navbar-collapse" id="navbarSupportedContent1">

                        <ul class="navbar-nav mr-auto">
                        <li class="nav-item active">
                            <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Features</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Pricing</a>
                        </li>
                        </ul>

                    </div>
                        
                        
                    </ul>
                </div>
            </div>
           </div>
        )
    }
}

export default Navbar