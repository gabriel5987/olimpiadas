function pesquisar() {
    // Obtém a seção onde os resultados da pesquisa serão exibidos
    let section = document.getElementById
    ("resultados-pesquisa");

    let campoPesquisa = document.getElementById
    ("campo-pesquisa").value

    // se o campo Pesquisa se for uma string sem nada
    if (!campoPesquisa) {
      section.innerHTML = "<p>nada foi encontrado. você precisa digitar o nome de um atleta ou esporte</p>"
      return
    }

    campoPesquisa = campoPesquisa.toLowerCase()
  
    // Inicializa uma string vazia para armazenar os resultados da pesquisa
    let resultados = "";
    let titulo = "";
    let descriçao = "";
    let tags = "";
  
    // Itera sobre cada dado na lista de dados
    for (let dado of dados) {
      titulo = dado.titulo.toLowerCase()
      descriçao = dado.descriçao.toLowerCase()
      tags = dado.tags.toLowerCase()
      //se titulo includes campoPesquisa
      if (titulo.includes(campoPesquisa) ||descriçao.
      includes(campoPesquisa) || tags.includes(campoPesquisa)) {
        //cria um novo elemento
        resultados += `
        <div class="item-resultado">
          <h2>
              <a href="#" target="_blank">${dado.titulo}
              </a>
          </h2>
          <p class="descriçao-meta">${dado.descriçao}</
          p>
          <a href=${dado.link} target="_blank">mais 
          informações</a>
        </div>
      `;
      }    
    }
  
    if (!resultados) {
      resultados = "<p>nada foi encontrado</p>"
    }
    // Atribui o HTML gerado à seção de resultados
    section.innerHTML = resultados;
  }