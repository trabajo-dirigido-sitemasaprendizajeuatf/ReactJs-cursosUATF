import React, { Component } from 'react'

import URL from '../../../config'
import ViewNotaStudent from './viewNotasStudent'

export default class ViewDataStudent extends Component{

    constructor(props){
        super(props)
        this.state={
            objUser:[]
        }
    }

    componentWillMount(){
        const url = URL.UrlShowDataStundent
        const idUser = {
            idUser:this.props.idUser
        }
        const params={
            method:'POST',
            body:JSON.stringify(idUser),
            headers:{
                'Content-Type': 'application/json'
            }
        }

        fetch(url, params)
         .then(data=>data.json())
         .then(res=>{
             console.log(res)

             this.setState({
                 objUser:res
             })
             this.props.showCi(res.ci)
         })
         .catch(err=>{
             console.log({err:'error en la peticion ->viewDataStuden'})
         })
    }

    render(){

        return( 
            <tbody >
                <tr class="table-info">
                <th scope="row">{this.props.n+1}</th>
                <td className="text-left" style={{ textTransform: 'uppercase'}} >  {this.state.objUser.name} </td>
                <td style={{ textTransform: 'uppercase'}}>{this.state.objUser.lastname}</td>
                <td style={{ textTransform: 'uppercase'}}> {this.state.objUser.motherlastename}</td>
                <td>{this.state.objUser.ci}</td>
                <td>{this.state.objUser.ru}</td>
                <td className="font-weight-bold"> <ViewNotaStudent idUser={this.props.idUser} idCourse={this.props.idCourse} /></td>
                </tr>
            </tbody> 
        )
    }
};