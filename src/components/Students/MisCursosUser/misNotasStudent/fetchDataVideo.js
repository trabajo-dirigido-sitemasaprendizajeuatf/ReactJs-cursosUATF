import React, { Component } from 'react'

import URL from '../../../../config'

export default class FetchDataVideo extends Component{
    constructor(props){
        super(props)
        this.state={
            objVideo:'',

        }
    };

    componentWillMount(){
        
        const url = URL.UrlShowDataVide
        const daTaVideo={
            idCourse:this.props.idCourse,
            idVideo:this.props.idVideo
        }
        const params={
            method:'POST',
            body:JSON.stringify(daTaVideo),
            headers:{
                'Content-Type': 'application/json'
            }
        }

        fetch(url,params)
        .then(data=>data.json())
        .then(res=>{
            this.setState({
                objVideo:res[0]
            })
        })
        .catch(err=>{
            console.log({err:'error en la peticion --> tiltle class (video)'})
        })
    }

    render(){
        return(
            <span>
                {this.state.objVideo.title}
            </span>
        )
    }
}
