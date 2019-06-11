import React, { Component } from 'react'
import Url from '../../../config'
import AddSeccion from './addSeccion'


export default  class CrearSeccion extends Component{
    constructor(props){
        super(props);
            this.state={
                idCurso:this.props.match.params.id,
                ccurso:null,
                ok:false
            }
            
    }


    componentWillMount(){
         var url = Url.UrlMostarCursoPorId;

         fetch(`${url}/${this.state.idCurso}`)
         .then(res=>res.json())
         .then(res=>{
             
                this.setState({
                    ccurso:res,
                    ok:true
                })

                console.log(this.state.ccurso)
         })

    }



    render(){
    
        // console.log('create seccion-----' );
        // console.log(this.state.ccurso);
        console.log(this.props.match.params.id,'llllllllllllllllllllllpppp')
        
        console.log(this.props.id,'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx');
        
        if(this.state.ok){
            // console.log('iffffffffff');
            // console.log(this.state.ccurso);
            

            // if(){

            // }
            return(
                <div>
                
                <AddSeccion ccurso4={this.state.ccurso} IDcurso={this.props.match.params.id} />

                    {/* {this.props.match.params.id}
                    <br/>
                    {this.state.course.namecourse}
                    <br/>
                    {this.state.course._id} */}
        
                </div>
                )
        }else{
            return(
                <div> Loding ....</div>
            )
        }
      
    }
}