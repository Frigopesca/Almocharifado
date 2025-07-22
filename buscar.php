<?php
include 'conexao.php';

$nome = $_GET['nome'];
$categoria = $_GET['categoria'];

$stmt = $conn->prepare("SELECT * FROM materiais WHERE categoria = ? AND nome LIKE ?");
$like = "%$nome%";
$stmt->bind_param("ss", $categoria, $like);
$stmt->execute();
$result = $stmt->get_result();

if ($result->num_rows > 0) {
  while ($row = $result->fetch_assoc()) {
    echo "<div><strong>{$row['nome']}</strong> | Código: {$row['codigo']} | Andar: {$row['andar']}</div>";
  }
} else {
  echo "<p>Nenhum material encontrado.</p>";
}
?>
