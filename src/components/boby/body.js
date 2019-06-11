import React, { Component } from 'react'
import UrlListarCursos from '../../config'
import { Link } from 'react-router-dom'
import DetalleCurso from '../Students/DetalleCurso'
import { format, render, cancel, register } from 'timeago.js';

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
            <div>
            <br/>
            <h1>loading....</h1>
            <div class="spinner-grow text-primary" role="status">
           <span class="sr-only">Loading...</span>
           </div>
           <div class="spinner-grow text-secondary" role="status">
           <span class="sr-only">Loading...</span>
           </div>
           <div class="spinner-grow text-success" role="status">
           <span class="sr-only">Loading...</span>
           </div>
           <div class="spinner-grow text-danger" role="status">
           <span class="sr-only">Loading...</span>
           </div>
           <div class="spinner-grow text-warning" role="status">
           <span class="sr-only">Loading...</span>
           </div>
           <div class="spinner-grow text-info" role="status">
           <span class="sr-only">Loading...</span>
           </div>
           <div class="spinner-grow text-light" role="status">
           <span class="sr-only">Loading...</span>
           </div>
           
   </div>
           )

       }else
        return(
            <div className="">
                {/* <div className="containerBtn text-left">
                <Link className="text-white" to="CreateCourse" >
                    <button type="button" class="btnButton btn btn-primary " id="fullHeightModalRight">
                        <i class="fas fa-chalkboard-teacher"></i> CREAR NUEVO CURSO 
                    </button>
                </Link>
                </div> */}

            {/* courses */}
            <div className="container-course "> 
            <div className=""></div>
                <div class="card-deck " >
                
                {this.state.curso.map(data=>{
                    return(
                    <div class="row col-md-3 ">
                    <div class="card mb-3">

                        <div class="view overlay">
                        <img class="card-img-top" src={data.posterCurso} alt="Card image cap"></img>
                        <Link to={`/DetalleCurso/${data._id}`}>
                            <div class="mask rgba-white-slight"></div>
                        </Link>
                        </div>

                        <div class="card-body">
                        
                        <h6 class="card-title">{data.namecourse}</h6>
                        <p class="card-text">{data.sigla}</p>
                        <p class="card-text">{data.autor}</p>
                        <p class="card-text">{format(data.createDateCourse)}</p>
                        
                        <button type="button" class="btn btn-light-blue btn-md">Añadir Seccion</button>

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