import React, { Component } from 'react'
import URL from '../../../config'

import { Link } from 'react-router-dom'
import StarRating from '../../boby/ratingStar'

// import  './misCursosUser.css'

export default class MisCursosUser extends Component{

    constructor(props){
        super(props)
        this.state={

            curso:[]
        }
    };
    
    componentWillMount(){

        var url = URL.UrlShowMisCoursesStudent;
        var idUser ={idUser:localStorage.getItem('id')}
        var params ={
            method:'POST',
            body:JSON.stringify(idUser),
            headers:{
                'Content-Type': 'application/json'
              }
        }
        
        fetch(url,params)
            .then(res=>res.json())
            .then(data=>{
                console.log(data)
                this.setState({
                    curso:data
                })
            })
            .catch(err=>{
                console.log(err)
            })
    }

    render(){
        console.log('cursos student')
       
        
        return(
            <div className="home-body pb-5">


             {/*----- courses---- */}

            <div className="container-course"> 
            <h3 className="font-weight-bolde pb-5 text-left pt-4">Mis estudios</h3>


            <div className=""></div>
                <div class="card-deck p-0" >
                
                {this.state.curso.map(data=>{
                    return(
                    <div class="row col-md-3 ">
                    <div class="card  hoverable m-1">

                        <div class="view overlay">
                        <img class="card-img-top" src={data.posterCurso} alt="Card image cap"></img>
                        <Link to={`/playerCourse/${data._id}`}>
                            <div class="mask rgba-white-slight"></div>
                        </Link>
                        </div>

                        {/* <Link to={`/playerCourse/${data._id}`}> 
                                <a href="#" className="btn btn-primary m-0">
                                  Tomar Curso
                                </a>
                              </Link> */}



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
    
};