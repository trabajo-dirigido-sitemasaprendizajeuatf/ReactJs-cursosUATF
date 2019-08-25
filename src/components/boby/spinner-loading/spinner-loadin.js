import React, { Component } from 'react'

import './spinnerLoading.css'

export default class SpinnerLoading extends Component{

    constructor(props){
        super(props)
    }

    render(){
        return(
            <div>
                <h1 className="pb-2" >...Cargando...</h1><br/>
                <div class="lds-roller">
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </div>
            
        )
    }
};