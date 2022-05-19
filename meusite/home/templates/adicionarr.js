import Artigos from home.models

const formulario = document.querySelector(".adicionar__form");

const LINK_DE_ENVIO_DOS_ARTIGOS = "";

function handleSubmit(event) {
  event.preventDefault();
  let dados = new FormData(formulario);  
//       dados = {
//       titulo: dados.get("titulo"),
//       autor: dados.getAll("autor"),
//       intituicao: dados.get("intituicao"),
//       datapubli: dados.get("datapubli"),
//       datacria: dados.get("datacria"),
//       palavrachave: dados.getAll("palavrachave"),
//       resumo: dados.get("resumo"),
//       resume: dados.get("resume"),
//       ref: dados.getAll("ref"),
//       direitos: dados.get("direitos"),
//     };
  let options = {
    method: "POST",
    headers: {
      //  "X-CSRFToken": getCookie("csrftoken"),
    },
    body: dados,
  };
  fetch(LINK_DE_ENVIO_DOS_ARTIGOS, options);
}

formulario.addEventListener("submit", handleSubmit);
