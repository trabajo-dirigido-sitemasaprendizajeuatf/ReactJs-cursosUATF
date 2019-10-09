import 'jquery'
import $ from 'jquery'

$(document).ready(main);

function main(){
    const btntoogle = document.querySelector('#toggle-btn-navar');
    if(btntoogle!=null){

        btntoogle.addEventListener('click',()=>{
            document.getElementById('sidebar').classList.toggle('active')
        })
    }

}

//btn-menu-navbar  --> ocualta la barra laateral
$(document).ready(()=>{
    $('#btn-menu-navbar').on('click',()=>{
        var active=document.getElementById('sidebar')
        

        if($('#sidebar').hasClass('active')){
            $('#sidebar').removeClass('active')
        }
    })
    
});

