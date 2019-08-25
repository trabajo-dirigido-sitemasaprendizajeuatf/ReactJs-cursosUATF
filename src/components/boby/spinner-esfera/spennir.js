import React, { Component } from 'react'

import './spenner.css'

export default class Spinner extends Component{

    constructor(props){
        super(props)
    }

    render(){
        return(
            <div>
			<h1>...Conectando...</h1>
				<div class="center-ps">
				< div class="loader-ps"></div>
				</div>
				
            </div>
        )
    }
};