import React, { Component } from 'react'

import MenuSideBar from '../SideBarTeacher/barraLateral'
import VerNotas from './verNotas'

 export default class MainViewNotas extends Component{
    constructor(props){
        super(props)
        this.state={

        }
    }

    render(){
        return(
            <div>
                <MenuSideBar/>
                
                <VerNotas/>
            </div>
        )
    }
 }