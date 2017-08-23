$(document).ready(function(){
	var pin = $('#pass-card').val();



	if (pin != " ") {
		$("#registrar").removeClass('disabled');
	}

	localStorage.setItem(pin);
});

