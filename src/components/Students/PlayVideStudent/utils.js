
//funcion que convierte los seguundos a h/mm/ss
function parseTimeString (time) {

        var hours = Math.floor( time / 3600 );  
        var minutes = Math.floor( (time % 3600) / 60 );
        var seconds = time % 60;
        
        //Anteponiendo un 0 a los minutos si son menos de 10 
        minutes = minutes < 10 ? '0' + minutes : minutes;
        
        //Anteponiendo un 0 a los segundos si son menos de 10 
        seconds = seconds < 10 ? '0' + seconds : seconds;
        
        var result = hours + ":" + minutes + ":" + seconds;  // 2:41:30

      return result
  }


//funcion que convierte los segundos a mm/ss
function parseTimeMinute(time){
        var minutes = Math.floor( time / 60 );
        var seconds = time % 60;
        
        //Anteponiendo un 0 a los minutos si son menos de 10 
        minutes = minutes < 10 ? '0' + minutes : minutes;
        
        //Anteponiendo un 0 a los segundos si son menos de 10 
        seconds = seconds < 10 ? '0' + seconds : seconds;
        
        var result = minutes + ":" + seconds;  // 161:30

    return result
}


function percentageNumber(number,numberTotal){
  var persentage = Math.round((number/numberTotal)*100)

  return persentage
}


// convierte la fecha de fornati ISO (YYYY-MM-DDTHH:MM:SSZ)   ---> "2019-01-14T20:14:49.414Z"

function convertirFecha(date){
    var meses = new Array("Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre");

    var f=new Date(date);

    var fecha=`${f.getDate()} de ${meses[f.getMonth()]} de ${f.getFullYear()}`

    return fecha;

    // document.write(f.getDate() + " de " + meses[f.getMonth()] + " de " + f.getFullYear());
}

function covertirAhoraMinuto(date){

    var day = new Array("Lunes","Martes","miércoles","Jueves","Viernes","sábado","Domingo");
    var f = new Date(date);

    var fecha= `${day[f.getDay()-1]} a las ${f.getUTCHours()}:${f.getUTCMinutes()}`;

    return fecha;
    
}


export default {
      parseTimeString,
      parseTimeMinute,
      percentageNumber,
      convertirFecha,
      covertirAhoraMinuto
}
