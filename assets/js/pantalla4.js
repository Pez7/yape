$(document).ready(function(){
	var nombre = $('#name').val();
	var email = $('#email').val();
	var password = $('#pass').val();
	var vacio = " ";

	if (nombre == vacio) {
		false;
	}else if (email == vacio) {
		false;
	}else if (password == vacio && password > 7) {
		false;
	}

	if (nombre == true && email == true && password == true) {
		$('#crear').removeClass('disabled');
		$('#crear').addClass('correct');
	}

	localStorage.getItem(nombre);
	localStorage.getItem(email);
	localStorage.getItem(password);
});