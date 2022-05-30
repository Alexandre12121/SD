const secao = document.querySelector(".artigos");

const LINKDOSARTIGOS = "/artigos";

document.body.onload = () => {
  fetch(LINKDOSARTIGOS)
    .then((resposta) => resposta.json())
    .then((json) => {
      for (const artigo in json) {
        const novoArtigo = document.createElement("div");
        novoArtigo.innerHTML = `<h3 class="artigo__titulo">
            <span>Nome: </span>${json[artigo].title}
          </h3>
          <div class="artigo__autores">
            <p class="artigo__autorLabel">Autores:</p>
            <p class="artigo__autor">${json[artigo].autor}</p>
          </div>
          <p class="artigo__instituicao">
            <span>Instituição: </span> ${json[artigo].instituicao}
          </p>
          <div class="artigo__datas">
            <p class="artigo__datapubli">
              <span>Data de publicação: </span>${json[artigo].datapubli}
            </p>
            <p class="artigo__datacria">
              <span>Data de criação: </span>${json[artigo].datacria}
            </p>
          </div>
          <div class="artigo__palavraschave">
            <p class="artigo__palavraschaveLabel">Palavras chave:</p>
            <p class="artigo__palavrachave">${json[artigo].palavraschave}</p>
          </div>
          <p class="artigo__resumo">
            <span>Resumo: </span>
            ${json[artigo].resumo}
          </p>
          <p class="artigo__resumo">
            <span>Resume: </span>
            ${json[artigo].resume}
          </p>
          <div class="artigo__refs">
            <p class="artigo__refsLabel">Referências:</p>
            <p class="artigo__ref">
            ${json[artigo].ref}
            </p>
          </div>
          <p class="artigo__direitos">
            <span>Direitos: </span>${json[artigo].dir}
          </p>`;
        novoArtigo.classList.add("artigos__artigo");
        secao.appendChild(novoArtigo);
      }
    });
};
