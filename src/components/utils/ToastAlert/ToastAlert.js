import React from 'react'
import 'jquery'
import $ from 'jquery'
import './ToastAlert.css'
import { render } from 'timeago.js';

function onClick(){
    console.log('Toast onclick');
    
    $("#myToast").toast({ delay: 3000 });
    $("#myToast").toast('show');
}


const ToastAlert= (props)=>{


    // $(document).ready(function(){
        // $(".show-toast").click(function(){
            // $("#myToast").toast({ delay: 3000 });
            // $("#myToast").toast('show');
    //     }); 
    // });

    return(
    <div class="bs-example">
            {/* <button type="button" onClick={onClick} class="btn btn-primary show-toast">Show Toast</button> */}


            <div class="toast bg-danger" id="myToast" style={{position: 'absolute', top: 0, right: 0}}>
                <div class="toast-header">
                  
                    <strong class="mr-auto"><i class="fa fa-grav"></i> We miss you!</strong>
                    <small>11 mins ago</small>
                    <button type="button" class="ml-2 mb-1 close" data-dismiss="toast">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="toast-body">
                    <div class="text-toast">It's been a long time since you visited us. We've something special for you. <a href="#">Click here!</a></div>
                </div>
            </div>


        </div>
    )
    

}

export default ToastAlert;