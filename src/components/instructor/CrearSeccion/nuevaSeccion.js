import React, { Component } from 'react'
import './mainCrearSeccion.css'
import URL from '../../../config'

import { BrowserRouter as Router, Route, Link, Redirect, withRouter } from "react-router-dom";
import history from '../../utils/history'

class NuevaSeccion extends Component{

    constructor(props){
        
        super(props);
        
        console.log(this.props.match.params);
        
            this.state={
                iddelcurso:this.props.match.params.id,
                titleSeccion:'',
                seccion:this.props.match.params.n,
                errcampos:'',
                seccioncreado:''

            }
            // console.log(this.props.cursoseccion);   
            this.sendData=this.sendData.bind(this)
            // this.renderAlert=this.renderAlert.bind(this)
    }
  

    onChange(e){
        this.setState({
            [e.target.name]:e.target.value
        })
    }

    sendData(e){
        e.preventDefault();

        var addNewSeccion={
            idcurso:this.state.iddelcurso,
            seccion:this.state.seccion,
            titleSeccion:this.state.titleSeccion
        }

        var url= URL.Urladdnewseccion,
            params={
                method:'POST',
                body:JSON.stringify(addNewSeccion),
                headers:{
                    'Content-type':'application/json'
                }
            }
            
            console.log(addNewSeccion)

        if(this.state.titleSeccion!==''){
            fetch(url,params)
            .then(data=>data.json())
            .then(res=>{
                console.log(res)
                history.goBack()
            })
            .catch(err=>{
                console.log(err)
            })

            this.setState({
                titleSeccion:'',
                errcampos:'ok',
                seccioncreado:'la seccion a sido creado correctamente'
            })


            console.log('datos enviados');
            
        }else{
            this.setState({
                errcampos:''
            })
            console.log('complete los campos vacios')
        }
       
    }

    renderAlert(){
        
        if(!this.state.errcampos){
            return(
                <div class="alert alert-danger" role="alert">
                Complete el titulo de la seccion
                </div>
            )
        }else{}

        if(this.state.seccioncreado){
            
            return(

                <div class="alert alert-success" role="alert">
                Seccion creado correctamente
                </div>
            )
        }else{
           
            
        }
    }



    render(){

        // const { history } = this.props


        // console.log(this.state.obcourseseccion);
        // console.log(this.props.iddelcurso2);
        // console.log(this.state.seccion);
        
        
        return(
            <div>
            <div className="container-form-newSeccion">
                {this.renderAlert()}
                <form  class="text-center border border-light p-5 form-newSeccion">
                    <p class="h4 mb-4">Crear una nueva seccion</p>
                    <p>Para crear una nueva seccion, complete los campos vacios</p>
                    <p>
                        <a href="" target="_blank">See the last newsletter</a>
                    </p>
                    <input value={this.state.titleSeccion}  onChange={this.onChange.bind(this)} name="titleSeccion" type="text" id="defaultSubscriptionFormPassword" class="form-control mb-4  " placeholder="Titulo de la seccion"></input>
                    <input  value={this.state.seccion}  name="seccion" type="number" id="defaultSubscriptionFormEmail" class="form-control mb-4" placeholder="ej:1,2,3,4"></input>
                
                    <div class=" btn-group-vertical w-100" role="group" aria-label="Vertical button group">
                   
                    <div className="row">
                        <button   onClick={()=>history.goBack()} type="button"  class="btn btn-cyan ml-0"> <i class="far fa-arrow-alt-circle-left"></i> Regresar</button>

                        <button  onClick={this.sendData}  type="submit"  class="btn btn-indigo ml-0"><i class="fas fa-layer-group p-1"></i> Crear Nueva Seccion</button>
                        {/* <Link to={`/seccions/${this.props.IDcurso}`}><button   type="submit"  class="btn btn-cyan ml-0"> <i class="far fa-arrow-alt-circle-left"></i> Regresar</button></Link> */}

                    </div>
                    </div>
                </form>
             </div>
        </div>
        )
    }   
}

export default NuevaSeccion;