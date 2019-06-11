import React, { Component } from 'react'
import FormAddVideo from './formAddVideo'
import AddExamVideo from './addExamVideo'
import AddMaterialApoyo from './addMaterialApoyo'

import './homeVideo.css'
export default class HomeVidel extends Component{

    constructor(props){
        super(props)
            this.state={
                idSeccion:this.props.match.params.id,
                obSeccion:[]
            }
    }


    render(){
        const {history} =this.props
        return(
            <div>
            <button onClick={()=>history.goBack()} className="btn-lg" ><i class="far fa-arrow-alt-circle-left "></i></button>

                <th>
                    <p>  Home video </p>
                    {this.props.match.params.id}
                </th>

                <div class="container-video" >
               <div className="row">
               
                <div class="col-8">
                    <div class="col-12">
                    <FormAddVideo 
                        IDseccion={this.state.idSeccion}

                    />
                    </div>
                    <div class="col-12 bg-primary">
                    <AddExamVideo/>
                    </div>
                </div>
                <div class="col-4 bg-warning">
                    <AddMaterialApoyo/>
                    </div>
                
                </div>
                </div>
            </div>
        )
    }


};