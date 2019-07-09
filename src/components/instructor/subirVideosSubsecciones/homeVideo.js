import React, { Component } from 'react'
import FormAddVideo from './formAddVideo'
import AddExamVideo from './addExamVideo'
import AddMaterialApoyo from './addMaterialApoyo'

// mostrar examen
import ShowExamenVideo from './showExamenVideo'

import './homeVideo.css'
import { log } from 'util';
export default class HomeVidel extends Component{

    constructor(props){
        super(props)
            this.state={
                idSeccion:this.props.match.params.id,
                obSeccion:[],
                
                // video time, duration
                timeAllVideo:'',
                timeActualityVideo:'',

                //idVideo
                objVideo:'',

                // showExamenVideo
                showVideoExamen:[],

           
               
            }
    }


    dataparent=(ojbCurso)=>{
        console.log('parent,  home vide ----');
        
            console.log(ojbCurso);
            console.log(ojbCurso._id)
            this.setState({
                objVideo:ojbCurso
            })
            
    }

    

    durationVide=(durationVideo)=>{

        console.log('duration videoooooooooooooooo homevideo');
        
        // console.log(typeof durationVideo)
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

    ExamenVideoShow=(objVideo)=>{
        
        // console.log('ExamenVideoShow -------');
        console.log(objVideo);
        this.setState({
            showVideoExamen:objVideo
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
                
                   
                </div>
                <div class="col-4 ">
                    <AddMaterialApoyo/>
                    </div>
                
                </div>
                </div>
                {/*---Examen---*/}
                <div className="row bg-dark">
                    <div class="col-7 ">
                    <AddExamVideo
                        duration={this.state.timeAllVideo}
                        timeall={this.state.timeAllVideo}
                        objVideo={this.state.objVideo}
                        ExamenVideoShow={this.ExamenVideoShow}


                    />
                    </div>
                    <div class="col-5">
                    <ShowExamenVideo
                        showVideoExamen={this.state.showVideoExamen}
                    />
                    </div>

                    </div>
            </div>
        )
    }


};