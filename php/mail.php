<?php    
    $mail_to = 'contato.sagradacruz@gmail.com';
    $mail_subject = 'Pedido de oração';
    $mail_body = $_POST['body'];

    mail($mail_to, $mail_subject, $mail_body);
?>