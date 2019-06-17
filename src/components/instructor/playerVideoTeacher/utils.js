
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

function second(time){
  return  Math.floor((Math.floor(time/60)*60)+(time%60))
}


export default {
      parseTimeString,
      parseTimeMinute,
      percentageNumber,
      second
}
