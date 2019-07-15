import React, { Component } from 'react' 

import './buttonBack.css'

export default class ButtonBack extends Component{
    constructor(props){
        super(props)

    }

    render(){
        const { history}=this.props
        return(
            
                // no funciona si si solo es importado
                <div class="contenedorbtn">
                    <button class="botonF1" onClick={()=>history.goBack()}>
                    
                    <span><h6 className="textbtn">Volver</h6></span>
                    </button>
                </div>
            
        )
    }
    
}