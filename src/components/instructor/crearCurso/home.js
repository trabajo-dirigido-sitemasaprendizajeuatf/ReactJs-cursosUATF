import React, { Component } from 'react'
import Urlapi from '../../../config'
import './home.css'
import { Link } from 'react-router-dom'
import SideBarTeacher from '../SideBarTeacher/barraLateral'

import CrearSeccion from '../CrearSeccion/CrearSeccion'


class Home extends Component{

    constructor(props){
        super(props)
            this.state={
                idTeacher:localStorage.id,
                curso:[]
            }
    }
    componentWillMount(){
        

        console.log(this.state.idTeacher);
        console.log('http://localhost:3005/listcoursesforteacher/idcourse='+this.state.idTeacher);
        
        var Url= `${Urlapi.UrlApi}+listarcursos`

        fetch('http://localhost:3005/listcoursesforteacher/idcourse='+this.state.idTeacher)
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
        console.log('home teacher')
       
        
        return(
            <div className="pl-5 pb-5">

            <SideBarTeacher/>

                {/* <div className="containerBtn text-left">


                <Link className="text-white" to="CreateCourse" >
                    <button type="button" class="btnButton btn btn-primary" id="fullHeightModalRight">
                    <h6 className="pt-2 pb-2"><i class="fas fa-chalkboard-teacher"></i> CREAR NUEVO CURSO</h6>
                    </button>
                </Link>
                </div> */}

            {/* courses */}
            <div className="container-course pt-5 "> 

            <h1 className="text-left pt-5 pl-5 ml-5 pb-5">Mis Cursos</h1>
            {/* <hr className="hr-dark"></hr> */}
            <div className=""></div>
                <div class="card-deck " >
                
                {this.state.curso.map(data=>{
                    return(
                    <div class="row col-md-3 pt-5">
                    <div class="card mb-3">

                        <div class="view overlay">
                        <img class="card-img-top" src={data.posterCurso} alt="Card image cap" style={{height:'170px'}}></img>
                        <Link  to={`/seccions/${data._id}`} >
                            <div class="mask rgba-white-slight"></div>
                        </Link>
                        </div>

                        <div class="card-body">

                        
                        <h6 class="card-title">{data.namecourse}</h6>
                        <p class="card-text">{data.sigla}</p>
                        <p class="card-text">{data.createDateCourse}</p>
                        <Link to= {`/seccions/${data._id}`}>
                        <button type="button" class="btn btn-blue btn-md">Añadir Seccion</button>
                        </Link>
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

export default Home;