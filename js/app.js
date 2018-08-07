function notify()
{
    alert("Em breve estaremos recebendo pedidos de oração. Aguarde!");
}

function sendMail()
{
    var mail_from = $("#pray_name");
    var mail_message = $("#pray_message");
    var mail_city = $("#pray_city");
    
    var mail_body = "Nome: " + mail_from + " | Cidade: " + mail_city + " Mensagem: " + mail_message;
    var payload = "body=" + mail_body;
    
    console.log(mail_body);

    $.ajax({
        type: "POST",
        url: "php/mail.php",
        data: payload,
        sucess: function(){
            alert("Já estamos intercedendo por você!");
        }
    });
}