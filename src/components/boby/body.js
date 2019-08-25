import React, { Component } from 'react'
import UrlListarCursos from '../../config'
import { Link } from 'react-router-dom'
import DetalleCurso from '../Students/DetalleCurso'
import { format, render, cancel, register } from 'timeago.js';
import Banner from './banner'
import StarRating from './ratingStar'

// spinner Loding
import Spinner from './spinner-esfera/spennir'
import SpinnerLoading from './spinner-loading/spinner-loadin'

import './body.css'

class Body extends Component{

   
    constructor(props){
        super(props)
            this.state={
                idStudent:localStorage.id,
                curso:[],
                autor:''
            }
    }

    componentWillMount(){
        

        console.log(this.state.idStudent);
        console.log('http://localhost:3005/listcoursesforteacher/idcourse='+this.state.idStudent);
        
        

        fetch(UrlListarCursos.UrlListartodoslosCursos)
        .then(res=>res.json())
        .then(res=>{
            console.log(res);

            this.setState({
                curso:res
            })
       console.log(this.state.curso);
            
        })
            
    }

    render(){
        console.log(this.state.curso,'ffffffffffffffffffff');
        
        console.log('home teacher')
       if(!this.state.curso[0]){
           return(
            <div className="pt-5">
          
                  <Spinner/> 
             </div>
           )

       }else
        return(
            <div className="home-body">
                {/* <div className="containerBtn text-left">
                <Link className="text-white" to="CreateCourse" >
                    <button type="button" class="btnButton btn btn-primary " id="fullHeightModalRight">
                        <i class="fas fa-chalkboard-teacher"></i> CREAR NUEVO CURSO 
                    </button>
                </Link>
                </div> */}

            {/* courses */}



            <Banner/>

            
            <div className="container-course"> 
            <h3 className="font-weight-bolde pb-5 text-left"> Nuestros cursos ahora a tu alcance</h3>

            <div className=""></div>
                <div class="card-deck" >
                
                {this.state.curso.map(data=>{
                    return(
                    <div class="row col-md-3 ">
                    <div class="card mb-3 hoverable">

                        <div class="view overlay">
                        <img class="card-img-top" src={data.posterCurso} alt="Card image cap"></img>
                        <Link to={`/DetalleCurso/${data._id}`}>
                            <div class="mask rgba-white-slight"></div>
                        </Link>
                        </div>

                        <div class="card-body info">
                        
                        <h6 class="card-title text-left">{data.namecourse}</h6>
                        <p class="card-text text-left">{data.sigla}</p>
                        <p class="card-text text-left">{data.autor}</p>
                        {/* <p class="card-text">{format(data.createDateCourse)}</p> */}
                        <div className="content-rating">
                        <p class="card-text text-center pt-3 pb-3  container-ratinstar"> {<StarRating idCourse={data._id}/>} </p>

                        </div>
                        
                         
                         
                        {/* <button type="button" class="btn btn-light-blue btn-md">Añadir Seccion</button> */}

                        </div>

                        </div>
                    </div>
                    )
                })}
                </div>
                </div>
                </div>

        )
    }


}


export default Body;