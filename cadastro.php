<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="cadstro.css">
    <title>Document</title>
</head>
<body>
    <header>

    </header>
    <main>
        <form action="cadastro.php" method="post">
        <div class="teladecadastro">
            <div class="logo"></div>
            <div class="telauser">
                <input type="text" name="nomedocliente" class="nomedousuario" placeholder="Nome:"  required>
                <input type="number" name="numerodocliente" class="numerodocliente" placeholder="Telefone/WhatsApp:"  required>
                <input type="email" name="emaildocliente" class="emaildocliente" placeholder="Email:"required>
                <div class="txt">INFORME SEUS ENDERAEÇO</div>
                <input type="text" name="rua" class="rua" placeholder="Rua:"  required>
                <input type="text" name="numeroresidencia" class="numeroresidencia" placeholder="numeroresidencia:"  required>
                <input type="text" name="complemento" class="complemento" placeholder="Complemento:"  required>
                <input type="text" name="bairro" class="bairro" placeholder="Bairro:"  required>
                <input type="text" name="cidadedocliente" class="cidadedocliente" placeholder="Cidade:"  required>
                <input type="text" name="estadodecliente" class="estadodecliente" placeholder="Estado:"  required>
                <button type="submit" class="criarfomulariodouser">Salvar</button>
            </div>
        </div>
    </main>
    <footer>

    </footer>
</body>
</html>





<?php

$servername = "localhost";
$username = "root";
$password = "";
$dbname = "pastelaria_banco";

$conexao = new mysqli($servername, $username, $password, $dbname);

if ($conexao->connect_error) {
    die("Falha na conexão: " . $conexao->connect_error);
}

$nomedocliente = $_POST["nomedocliente"];
$numerodocliente = $_POST["numerodocliente"];
$emaildocliente = $_POST["emaildocliente"];
$rua = $_POST["rua"];
$numeroresidencia = $_POST["numeroresidencia"];
$complemento = $_POST["complemento"];
$bairro = $_POST["bairro"];
$cidadedocliente = $_POST["cidadedocliente"];
$estadodecliente = $_POST["estadodecliente"];

$sql = "INSERT INTO enderecodocliente (nomedocliente, numerodocliente, emaildocliente, rua, numeroresidencia, complemento, bairro, cidadedocliente, estadodecliente) 
        VALUES ('$nomedocliente', '$numerodocliente', '$emaildocliente', '$rua', '$numeroresidencia', '$complemento', '$bairro', '$cidadedocliente', '$estadodecliente')";

if ($conexao->query($sql) === TRUE) {
    echo "";
} else {
    echo "Erro ao inserir usuário: " . $conexao->error;
}

$conexao->close();

?>

