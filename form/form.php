<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nome = $_POST['nome'];
    $email = $_POST['email'];
    $comentario = $_POST['comentario'];

    $destinatario = "alanavieira410@gmail.com"; // Insira seu endereço de e-mail aqui
    $assunto = "Novo comentário recebido";
    $mensagem = "Nome: $nome\n";
    $mensagem .= "Email: $email\n";
    $mensagem .= "Comentário:\n$comentario";

    // Enviar e-mail
    mail($destinatario, $assunto, $mensagem);

    // Redirecionar de volta para a página do formulário
    header('Location: form.html');
    exit;
}
?>
