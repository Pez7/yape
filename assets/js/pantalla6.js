$(document).ready(function(){
	var tarjeta = $('#card').val();
	var mes = $('#month').val();
	var anio = $('#year').val();

	console.log(tarjeta);

	$(tarjeta).change(function(){
		validarTarjeta();
	});
	$(mes).change(function() {
		validarMes();
	});
	$(anio).change(function() {
		validarAnio();
	});
	
	function validarTarjeta(){
		if (tarjeta.length != 16 || isNaN(tarjeta) ){
			return false;
		}else{
			return true;
		}
	}

	function validarMes(){
		if(mes.length != 2 || isNaN(mes)){
			return false;
		}else{
			return true;
		}
	}

	function validarAnio(){
		if(anio.length != 4 || isNaN(anio)){
			return false;
		}else{
			return true;
		}
	}
	
	if(validarTarjeta && validarMes && validarAnio){
		return true;
		$('#continuar').removeClass('disabled');
	}else{
		return false;
		$('#continuar').addClass('disabled');
	}
	$('#continuar').click(function() {
		window.location.href = "pantalla6-2.html";
	});
	

});

