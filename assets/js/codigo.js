$(document).ready(function() {
	var numeroGuardado = localStorage.getItem('phone');
	var codigoGuardado = localStorage.getItem('code');
	var codigoIngresado = "";

	$('#numero-guardado').text(numeroGuardado);

	contador();

	$(".input-field").on("keyup", ".info-ingresada", function(event) {
		codigoIngresado = $(this).val();
        validarCodigo();
    });

	function contador() {
		var contador = 0; //inicializador

		window.setInterval(function(){
		  	$("#num").text(contador);
		  	contador++;

		  	if(contador == 22){ //limite del número
		  		contador = 0;
		  		$.ajax({
					url: '/api/resendCode',
					type: 'POST',
					data: {
						'phone': numeroGuardado
					},
				})
				.done(function(response) {
					var newCode = response.data;
					console.log("[SUCCESS]");
					$("#modal_code h4").text(response.message);
		            $("#modal_code .code").text(newCode);
		            localStorage.setItem('code', newCode);
		            $('.modal').modal("open");
				})
				.fail(function() {
					console.log("[ERROR]");
				});
		  	}
		}, 1000);
	}

	function validarCodigo(){
		console.log("[VALIDATE]");
		if(codigoIngresado == codigoGuardado){
			console.log("[REDIRECT]");
			window.location.href = "pantalla4.html";
		}
	}

    // MODAL
    $('.modal').modal();
});



