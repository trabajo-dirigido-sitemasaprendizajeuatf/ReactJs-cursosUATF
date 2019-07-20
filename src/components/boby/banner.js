import React, { Component } from 'react'
import './banner.css'
import image from './img/img1.jpg'
export default class Banner extends Component{
    constructor(props){
        super()
        this.state={
        }
    }

  
    
    render(){
        return(
        <div class="home-banner">
            <div class="">
                <div class="banner-image" style={{backgroundImage:`url(https://i.udemycdn.com/notices/featured_banner/image/75febe45-a418-4a8a-89c0-5dd36281918e.jpg)`}} >
                {/* <img alt="Imagen promocional" class="" src="https://i.udemycdn.com/notices/featured_banner/image/75febe45-a418-4a8a-89c0-5dd36281918e.jpg"></img> */}
                
                    <div class=" banner-content text-left white-text">
                            <h1 class="">
                            <strong>Aprende en la carrera de ingenieria de sistemas</strong>
                            </h1>

                            <p>
                            <strong>Nuestros cursos ahora tambien en la web </strong>
                            </p>
                        </div>
                    </div>
            </div>
        </div>
        )
    };
};