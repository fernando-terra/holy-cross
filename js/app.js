$(document).ready(function(){
    $('#enviaroracao').click(function(){
        var mail_from = $("#pray_name").val();
        var mail_message = $("#pray_message").val();
        var mail_city = $("#pray_city").val();
        
        var mail_body = "Nome: " + mail_from + " | Cidade: " + mail_city + " | Mensagem: " + mail_message;
        var payload = "body=" + mail_body;
        
        console.log(mail_body);

        $.ajax({
            type: "POST",
            url: "php/mail.php",
            data: payload,
            sucess: function() {
                alert("Já estamos intercedendo por você!");
            }
        });
    });
});