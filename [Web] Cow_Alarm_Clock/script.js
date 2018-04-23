$(document).ready(function() {
    // your code goes in here
    console.log("hello world!");
    var count=1;
    
        setTimeout(function(){
  document.getElementById("myVideo").play();
}, 0);
        setTimeout(function(){
        	$("#onemoo").get(0).play();
        	  setInterval(function(){
        	$("#onemoo").get(0).play();
        		}, 10000);
        },5500);
      

        setInterval(function(){
  			$(".cowcounternumber").html(count);
  			count=count+1;
  			
}, 10000);

	//  Alarm state

          setTimeout(function(){
  	  $(".ufo").addClass("ufoblue");
  	  $(".battery").addClass("batterydoublecharge");
  	    $(".battery").removeClass("battery");

          $(".tractorbeam").addClass("tractorbeamalert");
          $(".innertractorbeam").addClass("innertractorbeamalert");
            
              $(".cowalert").addClass("infinitealert");
              $(".cow").removeClass("cow");

              setTimeout(function(){
          $("#multimoo").get(0).play();
            setInterval(function(){
          $("#multimoo").get(0).play();
            }, 1000);
        },5000);

                   setTimeout(function(){
        document.getElementById("myVideo2").play();
        $(".background-container2").css("opacity", "1");
        }, 0);


  }, 30000);


//  Reset State

  $(".Cowcounter").click(function() {
  	location.reload()
  	// $(".batterydoublecharge").addClass("battery");
   //    $(".battery").removeClass("batterydoublecharge");
   //     $(".tractorbeam").removeClass("tractorbeamalert");
   //        $(".innertractorbeam").removeClass("innertractorbeamalert");
   //          $(".ufo").removeClass("ufoblue");
   //            $(".cow1").addClass("cow");
   //              $(".cowalert").removeClass("infinitealert");
   //               $(".background-container2").css("opacity", "0");
   //               	$("#multimoo").get(0).play("muted", true);
  })




});