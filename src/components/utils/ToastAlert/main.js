import 'jquery'
import $ from 'jquery'



$(document).ready(toastAlert2)

function toastAlert2(){
       
         $("#myToast").toast({ delay: 3000 });
           $("#myToast").toast('show');
};

export default toastAlert2()