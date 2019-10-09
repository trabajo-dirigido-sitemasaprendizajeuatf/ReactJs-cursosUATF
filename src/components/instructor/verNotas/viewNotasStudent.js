import React, { Component } from 'react'

import URL from '../../../config'

export default class ViewNotaStudent extends Component{

    constructor(props){
        super(props)
        this.state={
            nota:0
        }
    }

    componentWillMount(){
        const url = URL.UrlShowNotaStudent;
        const dataStudent = {
            idUser:this.props.idUser,
            idCourse:this.props.idCourse
        }

        const params ={
            method:'POST',
            body:JSON.stringify(dataStudent),
            headers:{
                'Content-Type':'application/json'
            }
        }

        fetch(url, params)
         .then(data=>data.json())
         .then(res=>{
            console.log(res)
            this.setState({
                nota:res
            })
         })
         .catch(err=>{
             console.log({err:'error en la pecticion->viewNotasStudent'})
         })
    }

    render(){
        return(
            <div>
                { this.state.nota.nota }
            </div>
        )
    }
};