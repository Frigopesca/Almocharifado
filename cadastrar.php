<?php
include 'conexao.php';

$nome = $_POST['nome'];
$codigo = $_POST['codigo'];
$andar = $_POST['andar'];
$categoria = $_POST['categoria'];

$stmt = $conn->prepare("INSERT INTO materiais (nome, codigo, andar, categoria) VALUES (?, ?, ?, ?)");
$stmt->bind_param("ssss", $nome, $codigo, $andar, $categoria);

if ($stmt->execute()) {
  echo "<p style='color:green;'>Cadastro feito com sucesso!</p>";
} else {
  echo "<p style='color:red;'>Erro: " . $stmt->error . "</p>";
}

$conn->close();
?>
