import React, { Component } from 'react';

import URL from '../../../config'

export default class EditRole extends Component{

     constructor(props){
          super(props)
          this.state={
               currentRole:this.props.role,
               updateRole:''
          }
     }

     updateRole(e){
          
          console.log(e.target.getAttribute('data'))
          
          const url = URL.UrlUpdateRoleUser;
          const objNewRole ={
               idUser:this.props.idUser,
               newRole:e.target.getAttribute('data')
          }
          const paramas={
               method:'PUT',
               body:JSON.stringify(objNewRole),
               headers:{
                    'Content-Type': 'application/json'
               }
          }

          fetch(url, paramas)
          .then(data=>data.json())
          .then(res=>{
               console.log(res)
               this.setState({
                    currentRole:res.newRole
               })
          })
          .catch(err=>{
               console.log(err)
          })
     }


     render(){
          return(
               <td>
                    <div class="btn-group dropright">
                         <button type="button" class="btn-edit-role btn btn-primary dropdown-toggle px-3" data-toggle="dropdown" aria-haspopup="true"
                         aria-expanded="false">
                         <span>{this.state.currentRole==='student'?'estudiante':this.state.currentRole}</span>
                         {/* <span class="sr-only">Toggle Dropdown</span> */}
                         </button>
                         <div class="menu-select-role dropdown-menu">
                         {
                              this.state.currentRole==='student'?'':<a class="dropdown-item" data='student' onClick={this.updateRole.bind(this)} href="#">estudiante</a>
                         }
                         {
                              this.state.currentRole==='teacher'?'':<a class="dropdown-item"  data='teacher' onClick={this.updateRole.bind(this)} href="#">docente</a>
                         }
                         {
                              this.state.currentRole==='assistant'?'':<a class="dropdown-item" data='assistant' onClick={this.updateRole.bind(this)} href="#">auxiliar</a>
                         }
                         
                         {
                              this.state.currentRole==='admin'?'':<a class="dropdown-item" data='admin' onClick={this.updateRole.bind(this)} href="#">administrador</a>
                         }
                         

                         {/* <a class="dropdown-item" href="#">admin</a> */}

                         {/* <a class="dropdown-item" href="#">Auxiliar</a>
                         <a class="dropdown-item" href="#">docente</a> */}
                         
                         </div>
                    </div>
               </td>
          )
     }
}