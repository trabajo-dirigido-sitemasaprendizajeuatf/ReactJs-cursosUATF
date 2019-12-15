import React, { Component } from 'react'
import './errorPermisos.css'
export default class ErrorPermisos extends Component{
    constructor(props){
        super(props)
        this.state={

        }
    }

    render(){
        return(
            <div className="acces-denegado">
                error 404 
                                <div class='hover'>
                <div class='background'>
                    <div class='door'>403</div>
                    <div class='rug'></div>
                </div>
                <div class='foreground'>
                    <div class='bouncer'>
                    <div class='head'>
                        <div class='neck'></div>
                        <div class='eye left'></div>
                        <div class='eye right'></div>
                        <div class='ear'></div>
                    </div>
                    <div class='body'></div>
                    <div class='arm'></div>
                    </div>
                    <div class='poles'>
                    <div class='pole left'></div>
                    <div class='pole right'></div>
                    <div class='rope'></div>
                    </div>
                </div>
                </div>

            </div>   
        )
    }
}