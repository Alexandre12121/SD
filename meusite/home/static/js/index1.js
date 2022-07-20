const secao = document.querySelector(".artigos");
const secaoaAdicionar = document.querySelector(".adicionar");
const LINKDOSARTIGOS = "/artigos/";

function handleclickEdit(element) {
  let id = element.parentElement.dataset.id;
  const campoId = document.querySelector("#idartigo");
  const titulo = document.querySelector("#titulo");
  const autores = document.querySelectorAll(".autor");
  const instituicao = document.querySelector("#intituicao");
  const dataPublicacao = document.querySelector("#dataPublicacao");
  const doi = document.querySelector("#doi");
  const revista = document.querySelector("#revista");
  const palavraChave = document.querySelectorAll(".palavraChave");
  const resumo = document.querySelector("#resumo");
  const abstract = document.querySelector("#resume");
  const direitos = document.querySelector("#direitos");

  fetch(LINKDOSARTIGOS + id)
    .then((response) => response.json())
    .then((objJson) => {
      secaoaAdicionar.style = "display: flex;";
      campoId.value = id;
      titulo.value = objJson.titulo;
      autores.forEach((autor) => (autor.value = objJson.autores));
      instituicao.value = objJson.instituicao;
      dataPublicacao.value = objJson.dataPublicacao;
      doi.value = objJson.doi;
      revista.value = objJson.revista;
      palavraChave.forEach((palavra) => (palavra.value = objJson.palavraChave));
      resumo.value = objJson.resumo;
      abstract.value = objJson.abstract;
      direitos.value = objJson.direitos;
    });
}

function handleclickDelete(element) {
  let id = element.parentElement.dataset.id;
  fetch(LINKDOSARTIGOS + id, {
    method: "DELETE",
    headers: {
      "X-CSRFToken": getCookie("csrftoken"),
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  });
  location.reload();
}

document.body.onload = () => {
  fetch(LINKDOSARTIGOS)
    .then((response) => response.json())
    .then((objJson) => Array.from(objJson))
    .then((array) => {
      for (const artigo in array) {
        const novoArtigo = document.createElement("div");
        novoArtigo.dataset.id = array[artigo].id;
        novoArtigo.innerHTML = `<h3 class="artigo__titulo">
            <span>Título: </span>${array[artigo].titulo}
          </h3>
          <div class="artigo__autores">
            <p class="artigo__autorLabel">Autores:</p>
            <p class="artigo__autor">${array[artigo].autores}</p>
          </div>
          <p class="artigo__instituicao">
            <span>Instituição: </span> ${array[artigo].instituicao}
          </p>
          <p class="artigo__revista">
              <span>Revista: </span>${array[artigo].revista}
          </p>
          <div class="artigo__datas">
            <p class="artigo__dataPublicacao">
              <span>Data de publicação: </span>${array[artigo].dataPublicacao}
            </p>
            <p class="artigo__doi">
              <span>DOI: </span>${array[artigo].doi}
            </p>
          </div>
          </div>
          <div class="artigo__palavraschave">
            <p class="artigo__palavraschaveLabel">Palavras chave:</p>
            <p class="artigo__palavrachave">${array[artigo].palavraChave}</p>
          </div>
          <p class="artigo__resumo">
            <span>Resumo: </span>
            ${array[artigo].resumo}
          </p>
          <p class="artigo__abstract">
            <span>Abstract: </span>
            ${array[artigo].abstract}
          </p>
          <p class="artigo__direitos">
            <span>Direitos: </span>${array[artigo].direitos}
          </p>`;
        novoArtigo.classList.add("artigos__artigo");
        secao.appendChild(novoArtigo);
      }
    });
};

function handleclickFechar(event) {
  event.target.parentElement.parentElement.style = "display: none;";
}

const btnFechar = document.querySelector("#fechar");
btnFechar.addEventListener("click", handleclickFechar);

function getCookie(name) {
  var cookieValue = null;
  if (document.cookie && document.cookie !== "") {
    var cookies = document.cookie.split(";");
    for (var i = 0; i < cookies.length; i++) {
      var cookie = cookies[i].trim();
      if (cookie.substring(0, name.length + 1) === name + "=") {
        cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
        break;
      }
    }
  }
  return cookieValue;
}

async function handleclickSave(event) {
  event.preventDefault();
  let id = document.querySelector("#idartigo").value;
  const titulo = document.querySelector("#titulo");
  const autores = document.querySelectorAll(".autor");
  const instituicao = document.querySelector("#intituicao");
  const dataPublicacao = document.querySelector("#dataPublicacao");
  const doi = document.querySelector("#doi");
  const revista = document.querySelector("#revista");
  const palavraChave = document.querySelectorAll(".palavraChave");
  const resumo = document.querySelector("#resumo");
  const abstract = document.querySelector("#resume");
  const direitos = document.querySelector("#direitos");

  let listaAutores = "";
  let listaPalavras = "";

  autores.forEach(({ value }, index) => {
    if (index === 0) listaAutores += `${value}`;
    else listaAutores += `, ${value}`;
  });
  palavraChave.forEach(({ value }) => (listaPalavras += ` ${value}`));

  let dados = JSON.stringify({
    titulo: titulo.value,
    autores: listaAutores,
    instituicao: instituicao.value,
    dataPublicacao: dataPublicacao.value,
    doi: doi.value,
    revista: revista.value,
    palavraChave: listaPalavras,
    resumo: resumo.value,
    abstract: abstract.value,
    direitos: direitos.value,
  });
  let options = {
    method: "PUT",
    headers: {
      "X-CSRFToken": getCookie("csrftoken"),
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: dados,
  };
  await fetch(LINKDOSARTIGOS + id + "/", options).then((response) => {
    if (response.ok) {
      alert("Artigo editado!");
    } else {
      alert("Erro ao editar artigo!");
    }
  });

  location.reload();
}

const btnEditarArtigo = document.querySelector("#edc");
btnEditarArtigo.addEventListener("click", handleclickSave);

const btnAutor = document.querySelector("#adcAutor");
const btnPalavra = document.querySelector("#adcPalavra");

function adicionarCampo(event) {
  if (event.target === btnAutor) {
    let novoCampo = document.createElement("input");
    novoCampo.setAttribute("type", "text");
    novoCampo.setAttribute("id", "autor");
    novoCampo.setAttribute("class", "autor");
    btnAutor.parentElement.append(novoCampo);
  }
  if (event.target === btnPalavra) {
    let novoCampo = document.createElement("input");
    novoCampo.setAttribute("type", "text");
    novoCampo.setAttribute("id", "palavraChave");
    novoCampo.setAttribute("class", "palavraChave");
    btnPalavra.insertAdjacentElement("beforebegin", novoCampo);
  }
}

btnAutor.addEventListener("click", adicionarCampo);
btnPalavra.addEventListener("click", adicionarCampo);
