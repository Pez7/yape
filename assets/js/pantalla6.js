$(document).ready(function(){
	$('body').on("keyup", "input", function(){
		validarTodosLosCampos();
	});
	$('#continuar').click(function() {
		window.location.href = "pantalla6-2.html";
	});
	
	function validarTarjeta(){
		var tarjeta = $('input:text[name=card]').val();

		if (tarjeta.length != 16 || isNaN(tarjeta) ){
			return false;
		}else{
			return true;
		}
	}

	function validarMes(){
		var mes = $('input#month').val();

		if(mes.length != 2 || isNaN(mes)){
			return false;
		}else{
			return true;
		}
	}

	function validarAnio(){
		var anio = $('input#year').val();

		if(anio.length != 4 || isNaN(anio)){
			return false;
		}else{
			return true;
		}
	}
	
	function validarTodosLosCampos() {
		if(validarTarjeta() && validarMes() && validarAnio()){
			$('#continuar').removeClass('disabled');
			return true;
		}else{
			$('#continuar').addClass('disabled');
			return false;
		}
	}
});

