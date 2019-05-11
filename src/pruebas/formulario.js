import React, { Component } from 'react'

import Url from '../config'
class Formulario extends Component{

    constructor(props){
        super(props)
            this.state={

            }
    }

    componentWillMount(){
        console.log('componentWillMount--->');

        const myheaders=new Headers();
        myheaders.append('autorization', `bearer ${localStorage.token}`)

        var url=Url.urlPrivate;
        var params={
            method:'GET',
            headers: myheaders           
        }
        fetch(url,params)
            .then(res=>res.json())
            .then(data=>{
                console.log(data)
            })
        
    }

    
    componentDidMount(){
        console.log('componentDidMount--->')
    }

    render(){
        console.log('render--->');
        
        return( 
            <div>
                formulario 
            </div>
        )
    }
}

export default Formulario;