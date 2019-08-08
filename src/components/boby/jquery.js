import 'jquery'
import $ from 'jquery'

    $(window).scroll(function(){

        var scroll = $(window).scrollTop();
        $(".container-image").css({
            width:(100+scroll/6)+"%"

            
        })
        
    })
