import React, { Component } from 'react'
import faker from 'faker'

import { Link } from "react-router-dom"
import Signup from '../login/signup'
import Signin from '../login/signin';
import './navbar.css'
// BARRA LATERAL
import './barraLateral/main.css'
import './barraLateral/main.js'

// Home instructor
import Home from '../instructor/crearCurso/home'

// img's  
import iconSistem from '../img/sistemas.jpg'
import avatarImg from '../img/avatar.jpg'

class Navbar extends Component{

    constructor(props){
        super(props)
            this.state={
               tokenNav:'',

            }
            
            this.closeUser=this.closeUser.bind(this);
            this.initialName=this.initialName.bind(this);
    }

    selecNavbar(){
        if(!this.props.token){
            return false
        }else{
            
            return true
        }
    }

    closeUser(e){

        e.preventDefault()
        localStorage.token="";
        localStorage.id="";
        
        this.props.cerrarSesion()
        

    }
    
    initialName(e){
        if(this.props.name!=null){
            var name=this.props.name;
        
            var nameIncial=name.substr(0,1)
            var nameInicialCapitalice=nameIncial.toUpperCase();
    
            return(
                <li>{nameInicialCapitalice}</li>
            )
        }
        
        
    }

    render(){
        // console.log(faker.internet.email())
        console.log(this.props);
        // console.log('ñññññññññ')
        
        return(
           
           
           <div>
            {/* <h1 style={{backgroundColor: `${faker.internet.color()}`}}>FAKER</h1> */}
            {/* fixed-top */}
                                    {/*fixed-top  */}
            <nav className="navbar  navbar-expand-lg navbar-white white scrolling-navbar fixed-top" id="navbar-global">
            {/*  */}
            <a class="navy-blue-skin">
              <Link to="/">  <img src={iconSistem} height="44" alt="mdb logo" className="animated jello slow infinite "></img></Link>
            </a>
                {/* <a className="navbar-brand text-dark" href="#" id="toggle-btn-navar"><i class="fas fa-graduation-cap"></i>Carreras   </a>
                <button id="btn-menu-navbar" className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button> */}

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">

                    {/* //---------------- */}
                    {
                        this.props.token ? 
                       <Link to='/'> <a className="nav-link text-dark" href="#">Home <span className="sr-only">(current)</span></a> </Link>
                        : ''
                    }

                    {/* --------------------- */}
                        {/* <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a> */}
                    </li>
                    {/* <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle text-dark" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Dropdown
                        </a>
                        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                        <a className="dropdown-item" href="#">Action</a>
                        
                        <a className="dropdown-item" href="#">Another action</a>
                        <div className="dropdown-divider"></div>
                        <a className="dropdown-item" href="#">Something else here</a>
                        </div>
                    </li>
                    <li className="nav-item ">
                        <a className="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
                    </li> */}
                    </ul>

                    <form class="form-inline active-cyan-4 long">
                        <input class="form-control form-control-sm mr-3 w-75" id="search" type="text" placeholder="Search" aria-label="Search"></input>
                        <i class="fas fa-search" aria-hidden="true"></i>
                    </form>

                    <ul class="navbar-nav ml-auto nav-flex-icons">
                        {
                            this.props.role==='teacher'? <li class="nav-item">
                                <a>
                                <i></i>  <Link className="nav-link text-dark" to="/instructor">Instructor</Link>
                                <span class="sr-only">(current)</span>
                                </a>
                                </li>
                                :''
                        }
                        
                        
                        {/* <li class="nav-item">
                            <a class="nav-link text-dark" href="#">

                            <i></i><Link className="text-dark" to="/my/courses/student">  Mis cursos </Link></a>
                        </li> */}

                        <li class="nav-item">
                            <a class="nav-link text-dark" href="#">

                            <i></i><Link className="text-dark" to="/my/courses/sudent/report">  Mis cursos </Link></a>
                        </li>

                        <li class="nav-item">
                            <a class="nav-link waves-effect waves-light">1
                            <i class="fas fa-envelope"></i>
                            </a>
                        </li>

                        {
                            this.props.token ? 
                                <li class="nav-item avatar dropdown">
                                    <a  class="nav-link dropdown-toggle" id="navbarDropdownMenuLink-55" data-toggle="dropdown"
                                    aria-haspopup="true" aria-expanded="false">
                                    {/* "https://mdbootstrap.com/img/Photos/Avatars/avatar-2.jpg" */}
                                    {/* <img  src={ avatarImg } class="rounded-circle z-depth-0" alt="avatar image" height="38"></img> */}
                                    <div className="user-avatar" style={{backgroundColor: `${faker.internet.color()}`}}>
                                    
                                        <span className="user-initial">{this.initialName()} </span>
                                    </div>
                                    
                                   
                                    </a>
                                    <div class="dropdown-menu dropdown-menu-right dropdown-secondary"
                                    aria-labelledby="navbarDropdownMenuLink-55">
                                    <a class="dropdown-item" href="#">{this.props.email? this.props.email:this.props.name}</a>
                                   
                                    <Link className="nav-link" to="/signin" data-toggle="modal" data-target="#modalLoginForm">Signin</Link>
                                
                                    <Link className="nav-link" to="/signup" data-toggle="modal" data-target="#modalRegisterForm">Signup</Link>
                                    
                                    
                                    <a class="dropdown-item" href="#">Mi cuenta</a>
                                    <a class="dropdown-item" href="#">Cursos agregados</a>
                                    <a class="dropdown-item" href="#">My account</a>
                                    <a class="dropdown-item" href="#" onClick={this.closeUser}>Cerrar sesión</a>
                                    </div>
                                </li>
                            : <td>
                                <li>
                                <button type="button" class="btn btn-outline-default waves-effect btn-md mb-1 mt-0" to="/signin" data-toggle="modal" data-target="#modalLoginForm">
                                   Sign in
                                </button>
                                <button type="button" class="btn btn-danger btn-md mb-1 mt-0" data-toggle="modal" data-target="#modalRegisterForm">
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
        
            <div >


                <div id="sidebar" className="menu-containner">
                    
                        
                
                    <ul>
                    
                        <li><a href="#"  data-toggle="collapse" data-target="#navbarSupportedContent2"> <i class="fas fa-graduation-cap"></i>Ingenieria de sistemas</a></li>
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
                        
                        <li><a href="#"> <i class="fas fa-atlas"></i>Telecomunicaciones</a></li>
                        <li><a href="#"><i class="fas fa-boxes"></i>Postgrado ingenieria de sistemas</a></li>
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