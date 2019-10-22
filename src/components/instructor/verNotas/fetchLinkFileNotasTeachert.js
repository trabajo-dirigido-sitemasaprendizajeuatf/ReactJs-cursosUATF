import React, { Component } from 'react'
import URL from '../../../config'



export default class fetchLinkFileNotasTeachert extends Component{

    constructor(props){
        super(props)
        this.state={
            linkFile:''
        }
    }


    componentWillMount(){

        var url=URL.UrlDownloadFileNotasTeacher;
        const idTeacher={
            idTeacher:localStorage.getItem('id')
        }
        const params={
            method:'POST',
            body:JSON.stringify(idTeacher),
            headers:{
                'Content-Type': 'application/json'
            }
        }
        fetch(url,params)
        .then(data=>data.json())
        .then(res=>{
            console.log(res.linkFile)
            this.setState({
                linkFile:res.linkFile
            })
        })
    }


    render(){
        return(
            <div>
                <div className="content-icons-download-file-notas">
                            <a href={this.state.linkFile} >
                                <i class="icon-file-excel-notas fas fa-file-excel"></i>
                            </a>
                            <p class="iconDescription-notas">Descargar notas</p>
                </div>
            </div>
        )
    }
}