import React, { Component } from 'react'
import './banner.css'
import './jquery.js'
import image from './img/banner.jpg'
export default class Banner extends Component{
    constructor(props){
        super()
        this.state={
        }
    }

//     <div class="home-banner">
//     <div class="">
//         <div class="banner-image" >
            
//         {/* <img alt="Imagen promocional" class="" src="https://i.udemycdn.com/notices/featured_banner/image/75febe45-a418-4a8a-89c0-5dd36281918e.jpg"></img> */}
        
//             <div class=" banner-content text-left white-text">
//                     <h1 class="">
//                     <strong>Aprende en la carrera de ingenieria de sistemas</strong>
//                     </h1>

//                     <p>
//                     <strong>Nuestros cursos ahora tambien en la web </strong>
//                     </p>
//                 </div>
//             </div>
//     </div>
// </div>
    
    render(){
        return(
            <div>
                <section className="zoomm ">
                    <div className="container-image gradient ">
                                        
                        <div className="container-text"> 
                            <p className="title-text"> Céntrate en tu futuro</p>
                            <p className="contenido-texto">Toma nuestros cursos enfocados en tus objetivos</p> 
                        </div>
                                {/* src={image} */}
                        <img  className="img" src={image}  alt=""></img>
                        
                    </div>
                </section>
              
            </div>
        )
    };
};