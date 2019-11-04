import React,  { Component } from 'react'
import './editDataUser.css'
import EditProfile from './userProfile/userProfile'
import ImageProfile from './imageProfile/imageProfile'
import UpdateSegurityUser from './updateSegurityUser/updateSegurityUser'

export default class EditDataUser extends Component{

    constructor(props){
        super(props)
        this.state={
        
        }
        

    }

   

    render(){
        return(
            <div className="body-edit-data">
                
                {/*--- menu de leccion superior--- */}
                <div className="container-menu-superior ">

               {/* title menu */}
                    <div className="container-title-edit-data">
                       <h2>
                             Mi Perfil
                        </h2> 
                    </div>

                    <div className="d-flex justify-content-start">
         
                        <ul class="nav nav-pills3 " id="pills-tab" role="tablist">
                            <li class="nav-item">
                                <a class="nav-link active pl-0 pr-0 ml-0 mr-3" id="pills-home-tab-student" data-toggle="pill" href="#pills-home" role="tab"
                                aria-controls="pills-home" aria-selected="true">Perfil de usuario</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link pl-0 pr-0 ml-0 mr-3" id="pills-profile-tab-Student" data-toggle="pill" href="#pills-profile" role="tab"
                                aria-controls="pills-profile" aria-selected="false">Imagen de perfil</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link pl-0 pr-0 ml-0 mr-3" id="pills-contact-tab-student" data-toggle="pill" href="#pills-contact" role="tab"
                                aria-controls="pills-contact" aria-selected="false">Seguridad de la cuenta</a>
                            </li>
                        </ul>
                        
                    </div>
                </div>
                

                {/* contenido */}
                <div className="">

                    <div class="tab-content" id="pills-tabContent">
                        <div class="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab-student">

                                <EditProfile
                                />
                        
                        </div>
                        <div class="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab-Student">
                            <br/>
                            
                                <ImageProfile
                                />

                        </div>
                        <div class="tab-pane fade" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab-student">
                            
                                <UpdateSegurityUser />
                        </div>
                    </div>
                </div>

            </div>
        )
    };
}