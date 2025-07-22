<?php
$host = 'mysql.frigopes.com.br'; // Substitua pelo host real fornecido no cPanel
$usuario = 'frigopes_frigopes';
$senha = '194¨%$#@!';
$banco = 'frigopes_almoxarifado';

$conn = new mysqli($host, $usuario, $senha, $banco);

// Verifica conexão
if ($conn->connect_error) {
    die("❌ Falha na conexão: " . $conn->connect_error);
}

// echo "✅ Conexão bem-sucedida!";
?>
