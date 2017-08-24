$(document).ready(function() {
	var nom = localStorage.getItem('nombre');

	$('#nombre-guardado').text(nom);
});