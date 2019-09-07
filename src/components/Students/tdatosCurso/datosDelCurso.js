import React, { Component } from 'react'

import URL from '../../../config'
export default class DatosDelCurso extends Component{
    constructor(props){
        super(props)
        this.state={
            idCourse:this.props.idCourse,
            course:null,

            // datos del curso
            namecourse:null,
            descripcion:null,
            autor:null
        }
    };


    componentWillMount(){

        var url = URL.UrlMostarCursoPorId;
        
        fetch(`${url}/${this.state.idCourse}`)
         .then(res=>res.json())
         .then(res2=>{
             
                this.setState({
                    course:res2,
                    namecourse:res2.namecourse,
                    descripcion:res2.descripcion,
                    sigla:res2.sigla,
                    autor:res2.autor
                })

                
                        
                
            
         })


       
    }

    render(){
        console.log('----datos del curso---')
        console.log(this.state)
        return(
            <div className="container pl-0 pr-0">
                <section class="my-3">
                   
                   <div className="text-left pl-2">
                       <h5> Acerca de este curso:</h5>
                   </div>

                    <div class="card-header border-0 font-weight-normal d-flex justify-content-between z-depth-0">
                    <p class="mr-0 mb-0">Materia : {this.state.namecourse}
                    
                        <p className="font-weight-light text-left m-0">
                           Sigla : {this.state.sigla}
                        </p>  
                    </p>
                    </div>

                    <div class="media mt-0 px-1">
                    <div class="media-body text-left pl-2">
                        <h5 class="font-weight-normal mt-0 pt-4 pl-2">
                            Descripcion
                        </h5>
                        
                        <hr class="my-4 m-0 p-0"></hr>
                        
                        <p className="lead pl-3">
                                {/* A qui va la descripcion del curso */}
                                {this.state.descripcion}
                        </p>
 
                        <h5 class="font-weight-normal mt-0 pt-4 pl-2">
                            Instructor 
                        </h5>
                        <hr class="my-4 m-0 p-0"></hr>

                        <p className="lead pl-3">
                                {/* A qui va la descripcion del curso */}
                             Instructor :   {this.state.autor}
                        </p>
                    </div>
                    </div>

                </section>
            </div>
        )
    };
};