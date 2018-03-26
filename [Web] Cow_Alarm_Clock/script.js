$(document).ready(function() {
    // your code goes in here
    console.log("hello world!");
    var count=1;
    
        setTimeout(function(){
  document.getElementById("myVideo").play();
}, 0);
        setTimeout(function(){
        	$("audio").get(0).play();
        	  setInterval(function(){
        	$("audio").get(0).play();
        		}, 10000);
        },5500);
      

        setInterval(function(){
  			$(".cowcounternumber").html(count);
  			count=count+1;
  			
}, 10000);

          setTimeout(function(){
  	  $(".ufo").addClass("ufoblue");
  	  $(".battery").addClass("batterydoublecharge");
  	    $(".battery").removeClass("battery");

          $(".tractorbeam").addClass("tractorbeamalert");
          $(".innertractorbeam").addClass("innertractorbeamalert");
            
              $(".cowalert").addClass("infinitealert");
              $(".cow").removeClass("cow");

             // setTimeout(function(){
         // $("audio").get(0).play();
          //  setInterval(function(){
         // $("audio").get(0).play();
          //  }, 10000);
        //},5000);

                   setTimeout(function(){
        document.getElementById("myVideo2").play();
        $(".background-container2").css("opacity", "1");
        }, 0);


  }, 30000);



  $(".Cowcounter").click(function() {
  	$(".batterydoublecharge").addClass("battery");
      $(".battery").removeClass("batterydoublecharge");
       $(".tractorbeam").removeClass("tractorbeamalert");
          $(".innertractorbeam").removeClass("innertractorbeamalert");
            $(".ufo").removeClass("ufoblue");
              $(".cow1").addClass("cow");
                $(".cowalert").removeClass("infinitealert");
                 $(".background-container2").css("opacity", "0");
  })




});