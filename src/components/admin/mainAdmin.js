import React, { Component } from 'react'

import SideBarAdmin from './sideBarAdmin/barraLateral'

export default class MainAdmin extends Component{

    constructor(props){
        super(props)
        this.state={

        }
    }

    render(){
        return(
            <div>
                
                <SideBarAdmin />

            </div>
        )
    }
}