import React,  { Component } from 'react'


import './mainSearch.css'
import ShowModal  from './showModal'

import jquery from 'jquery'
import $ from 'jquery'


export default class SearchNavbar extends Component{

    constructor(props){
        super(props)
        this.state={
            objCursos:[{d:0}],
            focus:false,

            // tern serach 
            tern:''
            
        }
        this.textInput = React.createRef();
    }

    focusEvent(e){
        console.log(e.target.value)
      var c=  this.textInput.current
        console.log(c)

        this.setState({
            focus:true
        })

    }


    focusEventClose=(estado)=>{
        this.setState({
            focus:estado,
            tern:''
        })
    }

 
    onchangeInput(e){
        e.preventDefault();
        
        // console.log(e.target.value)

        this.setState({
            [e.target.name]:e.target.value
        })
        
    }


    render(){


        // console.log('====================================');
        // console.log(this.state.objCursos);
        // console.log(this.state.objCursos.length);
        // console.log('====================================');

        return(
            <div>
            <div className="search-box">
                <form class=" from-search form-inline active-cyan-4 long">
                    <input ref={this.textInput} onFocus={this.focusEvent.bind(this)} 
                        value={this.state.tern} onChange={this.onchangeInput.bind(this)}
                        name="tern"
                        class="form-sear-nav form-control form-control-sm mr-1" id="search" type="text" placeholder="Search" aria-label="Search">
                    </input>
                    <i class="btn-search-nav fas fa-search" aria-hidden="true"></i>
                </form>
            </div>
            


            {/* tabla de busqueda de los cursos --> search */}
            
            {
                this.state.objCursos.length>0 && this.state.focus?
                <ShowModal
                    tern={this.state.tern}
                    focusEventClose={this.focusEventClose}
                />
                :
                ''
            }

            {/* <ShowModal/> */}
           

            </div>
        )
    }
}
