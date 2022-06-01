const secao = document.querySelector(".artigos");

const LINKDOSARTIGOS = "/artigos";
document.body.onload = () => {
  fetch(LINKDOSARTIGOS)
    .then((response) => response.json())
    .then((objJson) => Array.from(objJson))
    .then((array) => {
      for (const artigo in array) {
        const novoArtigo = document.createElement("div");
        novoArtigo.innerHTML = `<h3 class="artigo__titulo">
            <span>Nome: </span>${array[artigo].titulo}
          </h3>
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
