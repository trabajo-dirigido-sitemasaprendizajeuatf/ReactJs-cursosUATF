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

