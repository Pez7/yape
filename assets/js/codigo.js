$(document).ready(function() {
	var numeroGuardado = $('#numero-guardado').text(localStorage.getItem('telefono'));
	var codigoGuardado = localStorage.getItem('code');

	function contador (){
		var n = 0; //inicializador
		var l = document.getElementById("num"); //donde muestra el dato 
		window.setInterval(function(){ 
		  	l.innerHTML = n;
		  	n++;

		  	if(n==22){ //limite del número
		  		n=0;
		  		$.ajax({
					url: '/api/resendCode',
					type: 'POST',
					data: {
						'phone': numeroGuardado
					},
				})
				.done(function(res) {
					console.log("success");
					console.log(res);
					$('.nuevo-codigo').append('<p>'+ res.data.code +'</p>');
				})
				.fail(function() {
					console.log("error");
				})
				.always(function() {
					console.log("complete");
				});
		  	}
		},1000);
	}

	function datos(){
		var info = $('#info-ingresada').val();

		info.change(function(){
			if(info == codigoGuardado){
				window.location.href = "pantalla4.html";
			}
		});
	}

});



