var videoflag = false
var x = document.getElementById("myVideo");

$(document).ready(function(){
  $(document).mousemove(function(e){
    $("span").text(e.pageX + ", " + e.pageY);
  });
});

$("#myVideo").mousemove(function(e){
	if(!videoflag){
		x.controls = true;
		videoflag = true;
	}
});
$("#myVideo").mouseleave(function(){
	if(videoflag){
		x.controls = false;
		videoflag = false;
	}
});
