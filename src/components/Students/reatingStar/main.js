import React, { Component } from 'react'
import './main.css'

import URL from '../../../config'

class ReatingStar extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            rating:0,


         };
        //  this.onChange=this.onChange.bind(this)
    }


    // componentDidMount() {
        
    //     const url=URL.UrlViewReatingStarUser;
    //     const obj ={
    //             idCourse:this.props.idCourse,
    //             idUser:localStorage.getItem('id')
              
    //     }
        
    //     const params ={
    //         method:'POST',
    //         body:JSON.stringify(obj),
    //         headers: {
    //             'Content-Type':'application/json'
    //         }
    //     }

    //     fetch(url, params)
    //         .then(data=>data.json())
    //         .then(res=>{
    //             console.log('===Reatingd======');
    //             console.log(res);
    //             console.log('======end Reatings===');
    //           this.setState({
    //               rating:res.voto
    //           })
    //         })
    //         .catch(err=>{
    //             console.log({err:'error en la peticion de fetch al servidor'},err)
    //         })

    // }



    onChange(event){

        console.log(event.target.value)
        
        const voto=event.target.value
        // console.log(typeof(voto))
        this.props.editVoto(parseInt(voto))

        // this.setState({
        //     rating:event.target.value
        // })
        // console.log('onclick')

        const url=URL.UrlVotarRatingStart;
        const obj ={
                idCourse:this.props.idCourse,
                idUser:localStorage.getItem('id'),
                voto:voto
        }
        
        const params ={
            method:'POST',
            body:JSON.stringify(obj),
            headers: {
                'Content-Type':'application/json'
            }
        }

        if(localStorage.getItem('id')){
            
            fetch(url, params)
                .then(data=>data.json())
                .then(res=>{
            

                })
                .catch(err=>{
                    console.log({err:'error en la peticion de fetch al servidor',err})
                })
        }else{
            console.log('debe inicia sesion para poder valorar el curso')
           
        }


    }




    render() {
        console.log(this.state)
        return (
            <div>


                <div className="containner-start">

                        <ul class="rate-area" >
                    
                        <input onClick={this.onChange.bind(this)} type="radio" id="5-star" name="rating" value="5" /><label for="5-star" title="Exelente">5 stars</label>
                        <input onClick={this.onChange.bind(this)} type="radio" id="4-star" name="rating" value="4" /><label for="4-star" title="Bueno">4 stars</label>
                        <input onClick={this.onChange.bind(this)} type="radio" id="3-star" name="rating" value="3" /><label for="3-star" title="Promedio">3 stars</label>
                        <input onClick={this.onChange.bind(this)} type="radio" id="2-star" name="rating" value="2" /><label for="2-star" title="No esta bien">2 stars</label>
                        <input onClick={this.onChange.bind(this)} type="radio" id="1-star" name="rating" value="1" /><label for="1-star" title="Malo">1 star</label>
                    </ul> 
                </div>

            </div>
        );
    }
}



export default ReatingStar;