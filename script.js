const findEstados = () => {
  fetch(`https://servicodados.ibge.gov.br/api/v1/localidades/estados`)
    .then((response) => response.json())
    .then((json) => {
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
    .then((json) => {
      console.log(json);
      let logradouro = document.getElementById("logradouro");
      logradouro.value = json.logradouro;

      let complemento = document.getElementById("complemento");
      complemento.value = json.complemento;

      estado.value = json.uf

      let bairro = document.getElementById("bairro");
      bairro.value = json.bairro;

      let cidade = document.getElementById("cidade");
      cidade.value = json.localidade
        
    });
};

getCidades = () => {
  let cidade1 
  console.log(cidade1);
}

// findByCep(60430005);
