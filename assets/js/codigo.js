$(document).ready(function() {
	contador();
	datos();

	//var numeroGuardado = $('#numero-guardado').text(localStorage.getItem('datovane'));
	if(datos()){
		window.location.href = "pantalla4y6.html";
	}
});

var contador = function(){
	var n = 0; //inicializador
	var l = document.getElementById("num"); //donde muestra el dato 
	window.setInterval(function(){ 
	  	l.innerHTML = n;
	  	n++;

	  	if(n==22){ //condición de veces que avence el número
	  		n=0;
	  	}
	},1000);
}

var datos = function(){
	var info = $('#info-ingresada').val();
	
}