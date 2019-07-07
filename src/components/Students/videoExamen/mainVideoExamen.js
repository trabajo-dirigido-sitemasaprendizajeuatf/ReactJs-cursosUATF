import React, { Component } from 'react'

import './mainVideoExamen.css'

export default class MainVideoExamen extends Component{

    constructor(props){
        super(props)

        this.state={
            
        }
    }

    render(){
        return(

            <div>
            {/* modal fade */}
                <div class="modal fade" id="modalContactForm" tabindex="-1" role="dialog" aria-labelledby="myModalLabel"
  aria-hidden="true">
  <div class="modal-dialog cascading-modal" role="document">
    <div class="modal-content">

      <div class="modal-header light-blue darken-3 white-text">
        <h4 class="title"><i class="fas fa-pencil-alt"></i>Complete el siguiente examen</h4>
        <button type="button" class="close waves-effect waves-light" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">×</span>
        </button>
      </div>
      <div class="modal-body ">
        

    <form class="conten-form">

        <div class="pregresp">
        <div class="pregunta">1. ¿Crees que HTML es una buena tecnología xxxxxxxxxxxxxxxxxxxxxxx?<br />
        </div>
        <div class="respuestas">
          <input type="radio" name="preg1" value="1" /> Sí<br />
          <input type="radio" name="preg1" value="2" /> No<br />
          <input type="radio" name="preg1" value="3" /> Ns/Nc<br />
        </div>
      </div>

      <div class="pregresp">
        <div class="pregunta">2. ¿Crees que HTML es una buena tecnología xxxxxxxxxxxxxxxxxxxxxxx?<br />
        </div>
        <div class="respuestas">
          <input type="radio" name="preg2" value="1" /> Sí<br />
          <input type="radio" name="preg2" value="2" /> No<br />
          <input type="radio" name="preg2" value="3" /> Ns/Nc<br />
        </div>
      </div>


      <div class="pregresp">
        <div class="pregunta">3. ¿Crees que HTML es una buena tecnología xxxxxxxxxxxxxxxxxxxxxxx?<br />
        </div>
        <div class="respuestas">
          <input type="radio" name="preg1" value="1" /> Sí<br />
          <input type="radio" name="preg1" value="2" /> No<br />
          <input type="radio" name="preg1" value="3" /> Ns/Nc<br />
        </div>
      </div>

</form>
        
        <div class="text-center mt-1-half">
          <button class="btn btn-info mb-2 waves-effect waves-light">Send </button>
        </div>

      </div>
    </div>
  </div>
</div>

{/* <div class="text-center">
  <a href="" class="btn btn-default btn-rounded my-3" data-toggle="modal" data-target="#modalContactForm">Launch
    Modal Contact</a>
</div> */}
            </div>
        )
    }

}