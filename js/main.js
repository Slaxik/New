$(document).ready(function(){
 $('#cart_lg>span').hover(function() {
 	$('#cart_lg>span>sub').css('background-color','#F06723');
 	$('#cart_lg>span>sub').css('color','#FFF');
 }, function() {
 	$('#cart_lg>span>sub').css('background-color','#fff');
 	$('#cart_lg>span>sub').css('color','#000');
 });
});