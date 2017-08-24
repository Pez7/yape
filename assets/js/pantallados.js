$(document).ready(function() {
    var telefono = "";

    $(".numero").on("keyup", "input[name=phone]", function(event) {
        telefono = $("input[name=phone]").val();

        if(phoneIsValid()) {
            showPhoneOkMessage();
        } else {
            showPhoneErrorMessage();
        }

        allowContinue();
    });

    $('#acepto').on('click', function() {
        allowContinue();
    });

    function phoneIsValid() {
        if (telefono.length != 9 || isNaN(telefono)) {
            return false;
        } else {
            return true;
        }
    }

    function showPhoneErrorMessage() {
        $("input[name=phone]").css('border-color','#FF0000');
        $("input[name=phone]").removeClass('valid').addClass('invalid');
    }

    function showPhoneOkMessage() {
        $("input[name=phone]").css('border-color','#0aa827');
        $("input[name=phone]").removeClass('invalid').addClass('valid');
    }

    function allowContinue() {
        if( $("#acepto").is(':checked') && phoneIsValid() ){
            $("#phone_button").removeClass('disabled');
        } else {
            $("#phone_button").addClass('disabled');
        }
    }

    $('#phone_button').on('click', function() {
        $.ajax({
        url: '/api/registerNumber',
        type: 'POST',
        data: {'terms': true, 'phone': telefono},
        })
        .done(function(response) {
            console.log("[SUCCESS]");
            $("#modal_code h4").text(response.message);
            var codigoGenerado = response.data.code
            $("#modal_code .code").text(codigoGenerado);
            localStorage.setItem('code',codigoGenerado);
            localStorage.setItem('phone', telefono);
            //alert(response.message + " - CODIGO : " + response.data.code);
        })
        .fail(function(response) {
            console.log("[ERROR]");
        })
    });

    // MODAL
    $('.modal').modal();
});
