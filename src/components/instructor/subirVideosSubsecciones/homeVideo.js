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


    dataparent(ojbCurso){
        console.log('parent');
        
            console.log(ojbCurso);
            
    }

    

    render(){
        const {history} =this.props
        return(
            <div>
            <a class="btn-floating btn-lg btn-default"><i class="far fa-arrow-alt-circle-left "></i></a>
            <button onClick={()=>history.goBack()} className="btn-lg" ><i class="far fa-arrow-alt-circle-left "></i></button>

                    <p>  Home video </p>
                    {this.props.match.params.id}

                <div class="container-video" >
               <div className="row">
               
                <div class="col-8">
                    <div class="col-12">
                    <FormAddVideo 
                        IDseccion={this.state.idSeccion}
                        dataparent={this.dataparent}
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