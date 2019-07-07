import React, { Component } from 'react'

import './addMaterialApoyo.css'
export default class addMaterialApoyo extends Component{

    constructor(props){
        super(props)
            this.state={
                obSeccion:[]
            }
    }


    render(){
        const {history} =this.props
        return(
            <div>
                   <div class="" id="modalContactForm" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
<div class="modal-dialog cascading-modal" role="document">

    <div class="modal-content" id="modal-content-from">

        <div class="modal-header primary-color white-text">
            <h4 class="title">
            <i class="far fa-copy"></i> Añadir material de Apoyo</h4>
          
        </div>
        <div class="modal-body" id="modal-body-upload-material-apoyo">

        <div class="md-form form-sm">
            <input  type="file"    name="video" class="custom-file-input" id="customFileLang" lang="in"></input>
            <label  class="custom-file-label" for="customFileLang"></label>
        </div>


            <div class="md-form form-sm">
                <input type="text" id="materialFormEmailModalEx1" class="form-control form-control-sm"></input>
                <label for="materialFormEmailModalEx1">Descripcion</label>
            </div>


            <div class="text-center mt-4 mb-2">
                    <i class="fa fa-send ml-2"></i>

                <button class="btn btn-primary">Enviar
                </button>
            </div>

        </div>
    </div>
</div>
</div>
            </div>
        )
    }


};