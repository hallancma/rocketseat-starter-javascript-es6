const usuario = {
  nome: 'Hallan',
  idade: 33,
  endereco: {
    cidade: 'Ubatuba',
    estado: 'SP'
  }
};
// console.log(usuario);
// console.log(usuario.nome);
// console.log(usuario.endereco.cidade);
const {
  nome,
  idade,
  endereco: { cidade, estado }
} = usuario;
console.log(nome);
console.log(idade);
console.log(cidade);
console.log(estado);

function mostraNome({ nome, endereco: { cidade } }) {
  console.log(nome);
  console.log(cidade);
}

mostraNome(usuario);
