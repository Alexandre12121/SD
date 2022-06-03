const secao = document.querySelector(".artigos");
const secaoaAdicionar = document.querySelector(".adicionar");
const LINKDOSARTIGOS = "/artigos/";

function handleclickEdit(element) {
  let id = element.parentElement.dataset.id;
  const campoId = document.querySelector("#idartigo");
  const titulo = document.querySelector("#titulo");
  const autores = document.querySelectorAll(".autor");
  const instituicao = document.querySelector("#intituicao");
  const datapubli = document.querySelector("#datapubli");
  const datacria = document.querySelector("#datacria");
  const palachave = document.querySelectorAll(".palavrachave");
  const resumo = document.querySelector("#resumo");
  const resume = document.querySelector("#resume");
  const referencias = document.querySelector("#ref");
  const direitos = document.querySelector("#direitos");

  fetch(LINKDOSARTIGOS + id)
    .then((response) => response.json())
    .then((objJson) => {
      secaoaAdicionar.style = "display: flex;";
      campoId.value = id;
      titulo.value = objJson.titulo;
      autores.forEach((autor) => (autor.value = objJson.autores));
      instituicao.value = objJson.instituicao;
      datapubli.value = objJson.datapubli;
      datacria.value = objJson.datacria;
      palachave.forEach((palavra) => (palavra.value = objJson.palachave));
      resumo.value = objJson.resumo;
      resume.value = objJson.resume;
      referencias.value = objJson.referencias;
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
            <span>Nome: </span>${array[artigo].titulo}
          </h3>
          <button class="artigo__btn artigo__editar" onclick=handleclickEdit(this)>Editar</button>
          <button class="artigo__btn artigo__deletar" onclick=handleclickDelete(this)>Apagar</button>
          <div class="artigo__autores">
            <p class="artigo__autorLabel">Autores:</p>
            <p class="artigo__autor">${array[artigo].autores}</p>
          </div>
          <p class="artigo__instituicao">
            <span>Instituição: </span> ${array[artigo].instituicao}
          </p>
          <div class="artigo__datas">
            <p class="artigo__datapubli">
              <span>Data de publicação: </span>${array[artigo].datapubli}
            </p>
            <p class="artigo__datacria">
              <span>Data de criação: </span>${array[artigo].datacria}
            </p>
          </div>
          <div class="artigo__palavraschave">
            <p class="artigo__palavraschaveLabel">Palavras chave:</p>
            <p class="artigo__palavrachave">${array[artigo].palachave}</p>
          </div>
          <p class="artigo__resumo">
            <span>Resumo: </span>
            ${array[artigo].resumo}
          </p>
          <p class="artigo__resumo">
            <span>Resume: </span>
            ${array[artigo].resume}
          </p>
          <div class="artigo__refs">
            <p class="artigo__refsLabel">Referências:</p>
            <p class="artigo__ref">
            ${array[artigo].referencias}
            </p>
          </div>
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
  const datapubli = document.querySelector("#datapubli");
  const datacria = document.querySelector("#datacria");
  const palachave = document.querySelectorAll(".palavrachave");
  const resumo = document.querySelector("#resumo");
  const resume = document.querySelector("#resume");
  const referencias = document.querySelector("#ref");
  const direitos = document.querySelector("#direitos");

  let listaAutores = "";
  let listaPalavras = "";

  autores.forEach(({ value }, index) => {
    if (index === 0) listaAutores += `${value}`;
    else listaAutores += `, ${value}`;
  });
  palachave.forEach(({ value }) => (listaPalavras += ` ${value}`));

  let dados = JSON.stringify({
    titulo: titulo.value,
    autores: listaAutores,
    instituicao: instituicao.value,
    datapubli: datapubli.value,
    datacria: datacria.value,
    palachave: listaPalavras,
    resumo: resumo.value,
    resume: resume.value,
    referencias: referencias.value,
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
