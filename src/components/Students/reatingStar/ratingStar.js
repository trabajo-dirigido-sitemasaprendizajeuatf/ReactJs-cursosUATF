import React, { Component } from 'react';
// import StarRatingComponent from 'react-star-rating-component';
// import StarRatings from './react-star-ratings';

import StarRatings from '../../../../node_modules/react-star-ratings';
import URL from '../../../config' 
// import './ratingStar.css'

import ReatingStar from './main'


import 'bootstrap/js/src/modal'
import $ from 'jquery'

class GReatingStar extends Component {
// 3.5

constructor(props){
  super(props)
    this.state={
      voto:0,
     // alerts
     alertReating:false
    }
}



 componentWillMount(){
    const url=URL.UrlViewReatingStarUser
    const obj ={ 
      idUser:localStorage.getItem('id'),
      idCourse:this.props.idCourse
    }
 
    // console.log(URL , ' -------------------')

    var params={
      method:'POST',
      body:JSON.stringify(obj),
      headers:{
        'Content-Type': 'application/json'
      }
    }

    if(obj.idUser && obj.idCourse){

      fetch(url,params)
        .then(data=>data.json())
        .then(res=>{
          console.log(res)
          this.setState({
            voto:res.voto,
        
          })
        })
        .catch(err=>{
          console.log(err)
        })
    }

 }

  updateReating=()=>{
    
    console.log('update reating  star')

    var idUser = localStorage.getItem('id')
    if(idUser){

      $("#sideModalTLInfoReating").modal('show');

    
    }else{
      this.setState({
        alertReating:true
      })
    }
  }

  editVoto=(voto2)=>{

    console.log('.Edir voto...')
    console.log(typeof(voto2))

    // this.componentWillMount()
      this.setState({
        voto:voto2
    })
  }

  ModalEventEditReating=()=>{
    return(
      <div>
        <div class="modal fade" id="sideModalTLInfoReating" tabindex="-1" role="dialog" aria-labelledby="myModalLabel"
          aria-hidden="true">
          <div class="modal-dialog modal-notify modal-info" role="document">
            <div class="modal-content">
              {/* <div class="modal-header">
                <p class="heading lead">Calificar curso</p>

                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true" class="white-text">&times;</span>
                </button>
              </div> */}

              <div class="modal-body">
                  <div className="pt-5"></div>
                <ReatingStar
                  editVoto={this.editVoto}
                  idCourse={this.props.idCourse}
                />

                <div class="text-center">
                  <p className="font-weight-lighter">Calificar este curso.</p>
                </div>
              </div>

              {/* <div class="modal-footer justify-content-center">
                <a type="button" class="btn btn-info">Get it now <i class="far fa-gem ml-1 white-text"></i></a>
                <a type="button" class="btn btn-outline-info waves-effect" data-dismiss="modal">No, thanks</a>
              </div> */}
            </div>
          </div>
        </div>

        {/* <div class="text-center">
          <a href="" class="btn btn-default btn-rounded" data-toggle="modal" data-target="#sideModalTLInfo">Launch
            Modal Info <i class="far fa-eye ml-1"></i></a>
        </div> */}
      </div>
    )
  }

  alerts=()=>{
    if(this.state.alertReating){
        setTimeout(()=>{

            this.setState({
                alertReating:false
            })
        },5000)
        return(
            <div class="alert alert-danger" role="alert" style={{textAlign:'center'}}>
                Para poder valorar el curso debe iniciar sesion.
            </div>
        )

    }
}

  render() {
    // aggregateRating = 2.35;
  console.log(this.state)
    return (
      <div className="contend-reating-star ">
        
          {this.alerts()}  

          { this.ModalEventEditReating()}
            <StarRatings
              rating={this.state.voto}
              starRatedColor="gold"
              starDimension="50px"
              starSpacing="1px"
            />
          {/* <span className="content-voto pt-2 mt-3">{this.state.voto}</span>  */}
          <br/>
          <br/>
          <i class="fas fa-edit text-primary"></i>
       <a className="font-weight-lighter text-primary" onClick={this.updateReating}>{this.state.voto>0?'Editar calificacion':'Calificar el curso'} </a>
      </div>
      
    );
  }
  
}

export default GReatingStar;
