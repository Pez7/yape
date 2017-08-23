$(document).ready(function() {
	contador();
	datos();

	//var numeroGuardado = $('#numero-guardado').text(localStorage.getItem('datovane'));
	if(datos()){
		window.location.href = "pantalla4y6.html";
	}
});

var datos = function(){
	var info = $('#info-ingresada').val();
	
	$.ajax({
		url: '/api/resendCode',
		type: 'POST',
		data: {
			'terms':true,
			'code': info
		},
	})
	.done(function(res) {
		console.log("success");
		console.log(res.data.code);

	})
	.fail(function() {
		console.log("error");
	})
	.always(function() {
		console.log("complete");
	});
	
}