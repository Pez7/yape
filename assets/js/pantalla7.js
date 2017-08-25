$(document).ready( function() {
    var nombre = localStorage.getItem("nombre");
    $('#nombre-guardado').text(nombre);
});
