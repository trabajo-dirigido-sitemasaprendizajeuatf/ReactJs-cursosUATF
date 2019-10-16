import React, { Component } from 'react'
import UrlListarCursos from '../../../config'
import { Link } from 'react-router-dom'

import StarRating from '../../boby/ratingStar'



function searchChingFor(term){
    return (x)=>{
        if(x.namecourse.toLowerCase().includes(term.toLowerCase()) || !term){
            return x.namecourse.toLowerCase().includes(term.toLowerCase())
        }
    }
}


export default class showModal extends Component{

   
    constructor(props){
        super(props)
            this.state={
                idStudent:localStorage.id,
                curso:[],
                autor:'',

                // tern for search
                tern:''
            }
    }

    componentWillMount(){
        
        
        

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

    onClick(e){
        e.preventDefault();
        
        console.log(e.target.value)

        this.props.focusEventClose(false)

    }

    render(){
      
        console.log(this.props.tern)
        return(

            <div className="content-search ">

            
            <div className="content-table">
             
            
            <div className=""> 
            {/* <h3 className="font-weight-bolde pb-5 text-left"> Nuestros cursos ahora a tu alcance</h3> */}

            <button onClick={this.onClick.bind(this)} type="btn-close-search button" class="close mr-5" aria-label="Close">
             <span aria-hidden="true">x</span>
             
            </button>

            <div className=""></div>
                <div class="card-deck pb-5" >
                
                {
                    this.state.curso.filter(searchChingFor(this.props.tern)).map(data=>{
                    return(
                    <div class="row col-md-3 ">
                    <div class="card mb-3 hoverable ml-2 mr-2">

                        <div class="view overlay" onClick={this.onClick.bind(this)}>
                        <img class="card-img-top" style={{height:'160px'}} src={data.posterCurso} alt="Card image cap"></img>
                        <Link to={`/DetalleCurso/${data._id}`}  >
                            <div class="mask rgba-white-slight"></div>
                        </Link>
                        </div>

                        <div class="card-body info">
                        
                        <h6 class="card-title text-left">{data.namecourse}</h6>
                        <p class="card-text text-left">{data.sigla}</p>
                        <p class="card-text text-left">{data.autor}</p>
                        {/* <p class="card-text">{format(data.createDateCourse)}</p> */}

                        </div>

                        </div>
                    </div>
                    )
                })}
                </div>
                </div>
                </div>
             </div>
    
        )


    }
}
