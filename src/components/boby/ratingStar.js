import React, { Component } from 'react';
// import StarRatingComponent from 'react-star-rating-component';
// import StarRatings from './react-star-ratings';

import StarRatings from '../../../node_modules/react-star-ratings';
import URLratingStar from '../../config' 
import './ratingStar.css'

class GlobalReatingStar extends Component {
// 3.5

constructor(props){
  super(props)
    this.state={
      promedio:0,
      cantidadAlumnos:0,
      cantidadVotos:0
    }
}

changeRating( newRating, name ) {
  this.setState({
    rating: newRating
  });
}

 componentWillMount(){
    const URL= URLratingStar.UrlRatingStar;
    const idCourse ={ idCourse:this.props.idCourse}
 
    // console.log(URL , ' -------------------')

    var params={
      method:'POST',
      body:JSON.stringify(idCourse),
      headers:{
        'Content-Type': 'application/json'
      }
    }

    fetch(URL,params)
      .then(data=>data.json())
      .then(res=>{
        console.log(res)
        this.setState({
          promedio:res.promedio,
          cantidadAlumnos:res.cantidadAlumnos,
          cantidadVotos:res.sumavotos,
      
        })
      })
      .catch(err=>{
        console.log(err)
      })

 }

  render() {
    // aggregateRating = 2.35;
  console.log(this.state)
    return (
      <div className="contend-start ">

            <StarRatings
              rating={this.state.promedio}
              starRatedColor="gold"
              starDimension="20px"
              starSpacing="1px"
            />
          <span className="content-promedio pt-2 mt-3">{Math.round(this.state.promedio*100)/100 } ( { this.state.cantidadAlumnos} )</span> 
       
      </div>
      
    );
  }
  
}

export default GlobalReatingStar;
