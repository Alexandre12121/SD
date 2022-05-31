const formulario = document.querySelector("#myForm");
const titulo = document.querySelector("#titulo");
const autores = document.querySelector("#autor");
const instituicao = document.querySelector("#intituicao");
const datapubli = document.querySelector("#datapubli");
const datacria = document.querySelector("#datacria");
const palachave = document.querySelector("#palavrachave");
const resumo = document.querySelector("#resumo");
const resume = document.querySelector("#resume");
const referencias = document.querySelector("#ref");
const direitos = document.querySelector("#direitos");

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
  let dados = JSON.stringify({
    titulo: titulo.value,
    autores: autores.value,
    instituicao: instituicao.value,
    datapubli: datapubli.value,
    datacria: datacria.value,
    palachave: palachave.value,
    resumo: resumo.value,
    resume: resume.value,
    referencias: referencias.value,
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
  fetch(LINK_DE_ENVIO_DOS_ARTIGOS, options);

  titulo.value = "";
  autores.value = "";
  instituicao.value = "";
  datapubli.value = "";
  datacria.value = "";
  palachave.value = "";
  resumo.value = "";
  resume.value = "";
  referencias.value = "";
  direitos.value = "";
}

formulario.addEventListener("submit", handleSubmit);
