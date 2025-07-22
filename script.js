const categorias = [
  { nome: "Compressores", rua: "Rua A", cor: "Vermelho" },
  { nome: "E.P.I.", rua: "Rua B", cor: "Azul" },
  { nome: "Elétrica", rua: "Rua C", cor: "Amarelo" },
  { nome: "Filtros e Correias", rua: "Rua D", cor: "Verde" },
  { nome: "Informática e Câmeras", rua: "Rua E", cor: "Cinza" },
  { nome: "Papelaria", rua: "Rua F", cor: "Rosa" },
  { nome: "Refrigeração", rua: "Rua G", cor: "Ciano" },
  { nome: "Transporte e Embarcação", rua: "Rua H", cor: "Marrom" },
  { nome: "Uso Diário", rua: "Rua I", cor: "Preto" },
  { nome: "Eletrônicos", rua: "Rua J", cor: "Laranja" },
  { nome: "Hidráulico", rua: "Rua K", cor: "Roxo" },
];

categorias.sort((a, b) => a.nome.localeCompare(b.nome));

const container = document.getElementById("botoes");
categorias.forEach(cat => {
  const btn = document.createElement("button");
  btn.textContent = cat.nome;
  btn.onclick = () => abrirCategoria(cat);
  container.appendChild(btn);
});

function abrirCadastro() {
  document.getElementById("modalCadastro").style.display = "flex";
}
function fecharCadastro() {
  document.getElementById("modalCadastro").style.display = "none";
}

function abrirCategoria(cat) {
  document.getElementById("modalCategoria").style.display = "flex";
  document.getElementById("tituloCategoria").innerText = cat.nome;
  document.getElementById("infoCategoria").innerText = `Rua: ${cat.rua} | Cor: ${cat.cor}`;
  document.getElementById("resultados").innerHTML = "";
  document.getElementById("buscaInput").value = "";
  document.getElementById("buscaInput").oninput = () => buscarMaterial(cat.nome);
}

function fecharCategoria() {
  document.getElementById("modalCategoria").style.display = "none";
}

document.getElementById("formCadastro").addEventListener("submit", function(e) {
  e.preventDefault();
  const form = new FormData(this);

  fetch("cadastrar.php", {
    method: "POST",
    body: form
  })
  .then(res => res.text())
  .then(data => {
    document.getElementById("cadastroStatus").innerHTML = data;
    this.reset();
  });
});

function buscarMaterial(categoria) {
  const nome = document.getElementById("buscaInput").value;
  if (nome.length < 2) return;

  fetch(`buscar.php?categoria=${encodeURIComponent(categoria)}&nome=${encodeURIComponent(nome)}`)
    .then(res => res.text())
    .then(html => {
      document.getElementById("resultados").innerHTML = html;
    });
}
