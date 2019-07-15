import React, { Component }  from 'react'

import img from './img/sistemas.jpg'
import './main.css'
import './main.js'
class BarraLateral extends Component{

    constructor(props){
        super(props)
            this.state={

            }
    }

    // componentDidMount(){
    //     const btntoogle = document.querySelector('.toogle-btn');

    //     console.log(btntoogle);
        
    // }

    render(){
        return(
            <div>


                <div id="sidebar">
                    <div className="toogle-btn">
                         <a href="#"><i class="fas fa-align-justify"></i></a>
                    </div>
                        
                
                    <ul>
                    
                        <li><a href="#"  data-toggle="collapse" data-target="#navbarSupportedContent2"> <i class="fas fa-graduation-cap"></i> Carreras</a></li>
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
            )
    }

};

export  default BarraLateral;