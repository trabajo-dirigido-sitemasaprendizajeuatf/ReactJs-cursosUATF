import React, { Component } from 'react'
import URL from '../../../config'



export default class FetchFileTeacher extends Component{

    constructor(props){
        super(props)
        this.state={
            linkFile:''
        }
    }


    componentWillMount(e){

        

        fetch(URL.UrlDownloadFileTeacherts)
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
                <div className="content-icons-download-file">
                            <a href={this.state.linkFile} >
                                <i class="icon-file-excel fas fa-file-excel"></i>
                            </a>
                            <p class="iconDescription">Descargar la lista de docentes</p>
                </div>
            </div>
        )
    }
}