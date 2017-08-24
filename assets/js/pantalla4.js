$(document).ready(function(){

	$(document).on('keyup', '#name', function(event) {
		event.preventDefault();
		var nombre = $('#name').val();
		if (nombre != "") {
			localStorage.setItem("nombre", nombre);
			console.log(nombre);
			//Validar();
		}
		
	});

	$(document).on('change', '#email', function(event) {
		event.preventDefault();
		var email = $('#email').val();
		if (email != "") {
			localStorage.setItem("email", email);
			console.log(email);
			//Validar();
		}
	});

	$(document).on('keyup', '#pass', function(event) {
		event.preventDefault();
		var contra = $('#pass').val();
		if (contra != "") {
			localStorage.setItem("contra", contra);
			console.log(contra);
			Validar();
		}
	});


	function Validar(){
	var name = localStorage.getItem("nombre");
	var email = localStorage.getItem("email");
	console.log(email);
	var password = localStorage.getItem("contra");

		if (name != "" && email != "" && password !="") {
			$('#crear').removeClass('disabled')
		} else {
			$('#crear').attr('disabled', 'true');
		}
	}
	
	$('#crear').click(function(){
		document.location.href = "pantalla5.html";
	})
});










