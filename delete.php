<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
    <script src="script.js"></script>

    <title>Document</title>
</head>
<body>
    <header>
       
    </header>
    <main>
        <div class="teladeanuncio">
         
        </div>
        
    
    </main>
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

$sql = "SELECT sabor, descricao, preco FROM saboresdospasteis";
$result = $conexao->query($sql);

if ($result->num_rows > 0) {
    while ($row = $result->fetch_assoc()) {
        echo '<div class="telageral">';
        echo '<div class="fotopastel" ></div>';
        echo '<div class="teladosabornome" onclick="novatela()">' . htmlspecialchars($row['sabor']) . '</div>';
        echo '<div class="descricaotela"  onclick="novatela()">' . htmlspecialchars($row['descricao']) . '</div>';
        echo '<div class="valor"  onclick="novatela()">R$ ' . number_format($row['preco'], 2, ',', '.') . '</div>';
        echo '</div>';
    }
} else {
    echo "<p style='color: #fff;'>Nenhum sabor encontrado.</p>";
}

$conexao->close();
?>
