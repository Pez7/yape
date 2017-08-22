$(document).ready(function() {

    $('#acepto').on('click', function() {
        allowContinue();
    });

    $(".numero").on("keyup", "input[name=phone]", function(event) {
        if(phoneIsValid()) {
            showPhoneOkMessage();
        } else  {
            showPhoneErrorMessage();
        }
        allowContinue();
    });

    function phoneIsValid() {
        if ($("input[name=phone]").val().length != 9 || isNaN($("input[name=phone]").val())) {
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
        //guardamos el numero de telefono a localStorage
        localStorage.setItem('phone',$("input[name=phone]").val());
    }

    function allowContinue() {
        if( $("#acepto").is(':checked') && phoneIsValid() ){
            $("#phone_button").removeClass('disabled');
        } else {
            $("#phone_button").addClass('disabled');
        }
    }
});
