$(document).ready(function(){

  // visit counter
	$.getJSON("https://api.countapi.xyz/hit/cartoonjagat.com/visits", function(response) {
	    $("#visits").text(response.value);
	});
	document.addEventListener('contextmenu', event => event.preventDefault());


}); 