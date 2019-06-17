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
                obSeccion:[],
                
                // video time, duration
                timeAllVideo:'',
                timeActualityVideo:''
            }
    }


    dataparent(ojbCurso){
        console.log('parent,  home vide ----');
        
            console.log(ojbCurso);
            
    }

    

    durationVide=(durationVideo)=>{

        console.log('duration videoooooooooooooooo homevideo');
        
        console.log(typeof durationVideo)
        this.setState({
            timeActualityVideo:durationVideo
        })
    }

    allTime=(data2)=>{
        console.log( typeof data2)
            this.setState({
                timeAllVideo:data2
            })
    }

    render(){
        console.log(this.state);
        

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
                        allTime={this.allTime}
                        durationVideo={this.durationVide}
                    />
                    </div>
                    <div class="col-12 ">
                    <AddExamVideo
                        duration={this.state.timeAllVideo}
                        timeall={this.state.timeAllVideo}
                    />
                    </div>
                </div>
                <div class="col-4 ">
                    <AddMaterialApoyo/>
                    </div>
                
                </div>
                </div>
            </div>
        )
    }


};