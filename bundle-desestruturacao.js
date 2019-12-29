"use strict";

var usuario = {
  nome: 'Hallan',
  idade: 33,
  endereco: {
    cidade: 'Ubatuba',
    estado: 'SP'
  }
}; // console.log(usuario);
// console.log(usuario.nome);
// console.log(usuario.endereco.cidade);

var nome = usuario.nome,
    idade = usuario.idade,
    _usuario$endereco = usuario.endereco,
    cidade = _usuario$endereco.cidade,
    estado = _usuario$endereco.estado;
console.log(nome);
console.log(idade);
console.log(cidade);
console.log(estado);

function mostraNome(_ref) {
  var nome = _ref.nome,
      cidade = _ref.endereco.cidade;
  console.log(nome);
  console.log(cidade);
}

mostraNome(usuario);
