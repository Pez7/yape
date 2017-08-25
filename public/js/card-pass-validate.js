$(document).ready(function(){
	var tarjetaAlmacenada = localStorage.getItem('card');

    tarjetaAlmacenada = tarjetaAlmacenada.substr(-4);
    $("#numeroTarjeta").text(tarjetaAlmacenada);

    $("body").on("keyup", "input#pass-card", function(event) {
        var passCard = $(this).val();

        if(passCard.length == 4){
            $('#registrar').removeClass('disabled');
        } else {
            $("#registrar").addClass('disabled');
        }
    });
});

