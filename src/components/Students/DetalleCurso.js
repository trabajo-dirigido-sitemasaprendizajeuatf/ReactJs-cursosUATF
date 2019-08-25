import React, { Component } from 'react'
import MostrarDetalleCurso from './MostrarDetalleCurso'
import Url from '../../config'

export default class DetalleCurso extends Component{
    constructor(props){
        super(props)
            this.state={
                idCourse:this.props.match.params.id,
                course:null
            }
    }

    componentWillMount(){
        console.log('componentDidMount-----');
        
         var url = Url.UrlMostarCursoPorId;
        
         fetch(`${url}/${this.state.idCourse}`)
         .then(res=>res.json())
         .then(res2=>{
             
                this.setState({
                    course:res2
                })
         })

        
    }

    render(){

        // console.log(this.state.course,'llllllllllllll');
        
        if(!this.state.course){
            return <h1>loading....</h1>
        }else   
        return(
            <div className="pb-5">
            <MostrarDetalleCurso course={this.state.course}/>
                {/* <h1>Detalle del curso</h1>
                <h1>{this.props.match.params.id}</h1> */}

                
            </div>
        )
    }

}