<?php    
    $mail_to = 'contato.sagradacruz@gmail.com';
    $mail_subject = 'Pedido de oração';
    $mail_body = $_POST['body'];

    $header = "From: Pedido de Oração <pedidodeoracao@sagradacruz.com.br>\r\n"; 
    $header.= "MIME-Version: 1.0\r\n"; 
    $header.= "Content-Transfer-Encoding: 7bit\r\n";
    $header.= sprintf("Content-Type: %s; charset=\"%s\"","text/html","utf-8")."\n\n";
    
    mail($mail_to, $mail_subject, wordwrap($mail_body, 70), $header);
?>