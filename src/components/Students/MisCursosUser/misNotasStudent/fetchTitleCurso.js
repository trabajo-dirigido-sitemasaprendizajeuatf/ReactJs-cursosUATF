import React, { Component } from 'react'

import URL from '../../../../config'

export default class FecthTileCourse extends Component{
    constructor(props){
        super(props)
            this.state={
                objCurso:''
            }
    }

    componentWillMount(){
        const url=`${URL.UrlMostarCursoPorId}/${this.props.idCourse}`

        
        fetch(url)
        .then(data=>data.json())
        .then(res=>{
            this.setState({
                objCurso:res
            })
        })
    }

    render(){
        if(this.state.objCurso){
            return(
                <h5>
                    <span style={{color:'black'}}>
                        nombre del curso :  {this.state.objCurso.namecourse} - {this.state.objCurso.sigla }
                    </span>
                </h5>
            )
        }else{
            return(
                <h6>Loading...</h6>
            )
        }
      
    }
}