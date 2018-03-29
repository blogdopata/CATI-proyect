$(document).ready(function(){

	$(".effectImage").hover(function(){
		$(this).attr('src','../images/portada.jpg');
    }, function(){
    $(this).attr('src','../images/portada_off.jpg');
   });
});
