const findEstados = () => {
  fetch(`https://servicodados.ibge.gov.br/api/v1/localidades/estados`)
    .then((response) => response.json())
    .then((json) => {
      //Ordenar pelo atributo nome
      json.sort((a, b) => (a.nome > b.nome) ? 1 : -1)

      // console.log(json)
      let estados = "";
      json.forEach(
        (estado) =>
        (estados =
          estados + `<option value="${estado.sigla}">${estado.nome}</option>`)
      );
      //console.log(estados);
      var uf = document.getElementById("estado");
      uf.innerHTML = estados;

    });
};
findEstados();

const findByCep = (input) => {
  // console.log(input.value)
  let cep = input.value;
  let url = `https://viacep.com.br/ws/${cep}/json/`;

  fetch(url)
    .then((response) => response.json())
    .then(async json => {
      console.log(json);
      let logradouro = document.getElementById("logradouro");
      logradouro.value = json.logradouro;

      let complemento = document.getElementById("complemento");
      complemento.value = json.complemento;


      estado.value = json.uf

      let bairro = document.getElementById("bairro");
      bairro.value = json.bairro;


      await getCidades(json.uf)



      let cidade = document.getElementById("cidade");
      cidade.value = json.localidade

      // Redireciona o cursor ao input com mesmo id do parametro do document.getElementById()
      document.getElementById('numero').focus();
    });
};

const getCidades = async (sigla) => {
  await fetch(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${sigla}/municipios`)
    .then((response) => response.json())
    .then((json) => {
      console.log(json)

      let cidades = "";
      json.forEach(cidade => cidades = cidades + `<option value="${cidade.nome}">${cidade.nome}</option>`);
      console.log(cidades)

      let cidade = document.getElementById("cidade");
      cidade.innerHTML = cidades;
    });
}


// findByCep(60430005);
