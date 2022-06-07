const formulario = document.querySelector("#myForm");
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

const LINK_DE_ENVIO_DOS_ARTIGOS = "/artigos/";

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

function handleSubmit(event) {
  event.preventDefault();
  const titulo = document.querySelector("#titulo");
  const autores = document.querySelectorAll(".autor");
  const instituicao = document.querySelector("#intituicao");
  const dataPublicacao = document.querySelector("#dataPublicacao");
  const doi = document.querySelector("#doi");
  const revs = document.querySelector("#revs");
  const palavraChave = document.querySelectorAll(".palavraChave");
  const resumo = document.querySelector("#resumo");  
  const abstract = document.querySelector("#ref");
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
    revs: revs.value,
    palavraChave: listaPalavras,
    resumo: resumo.value,    
    abstract: abstract.value,
    direitos: direitos.value,
  });
  let options = {
    method: "POST",
    headers: {
      "X-CSRFToken": getCookie("csrftoken"),
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: dados,
  };

  fetch(LINK_DE_ENVIO_DOS_ARTIGOS, options).then((response) => {
    if (response.ok) {
      alert("Artigo adicionado!");
    } else {
      alert("Erro ao adicionar artigo!");
    }
  });

  titulo.value = "";
  autores.forEach((autor) => (autor.value = ""));
  instituicao.value = "";
  dataPublicacao.value = "";
  doi.value = "";
  revs.value = "";
  palavraChave.forEach((palavra) => (palavra.value = ""));
  resumo.value = "";  
  abstract.value = "";
  direitos.value = "";
}

formulario.addEventListener("submit", handleSubmit);
