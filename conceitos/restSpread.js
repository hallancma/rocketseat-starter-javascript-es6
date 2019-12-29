//REST pegar reto das propriedades
const usuario = {
  nome: 'Hallan',
  idade: 33,
  empresa: 'HCMA'
};

const { nome, ...resto } = usuario;
console.log(nome);
console.log(resto);

const arr = [1, 2, 3, 4];

const [a, b, ...c] = arr;
console.log(a);
console.log(b);
console.log(c);

function soma(...params) {
  return params.reduce((total, next) => total + next);
}
console.log(soma(1, 3, 5));

function soma2(a, b, ...params) {
  return params;
}
console.log(soma2(1, 2, 3, 4, 5, 6));

//SPREAD
//propava ou repassar para outra estrutura de dados
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const arr3 = [...arr1, ...arr2];
console.log(arr3);

const usuario1 = {
  nome: 'Hallan',
  idade: 33,
  empresa: 'HCMA'
};

const usuario2 = { ...usuario1, nome: 'Maria', profissao: 'Programador' };
console.log(usuario2);
