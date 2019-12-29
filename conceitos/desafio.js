class Usuario {
  constructor(email, senha) {
    this.email = email;
    this.senha = senha;
  }
  isAdmin() {
    return !this.admin ? false : true;
  }
}

class Admin extends Usuario {
  constructor() {
    super();
    this.admin = true;
  }
}

const User1 = new Usuario('email@teste.com', 'senha123');
const Adm1 = new Admin('email@teste.com', 'senha123');
console.log(User1.isAdmin()); // false
console.log(Adm1.isAdmin()); // true

const usuarios = [
  { nome: 'Diego', idade: 23, empresa: 'Rocketseat' },
  { nome: 'Gabriel', idade: 15, empresa: 'Rocketseat' },
  { nome: 'Lucas', idade: 30, empresa: 'Facebook' }
];

const idades = usuarios.map(item => {
  return item.idade;
});
console.log(idades);

const funcMaiorRocket = usuarios.filter(item => {
  if (item.idade > 18 && item.empresa === 'Rocketseat') {
    return item;
  }
});
console.log(funcMaiorRocket);

const trabalhaGoogle = usuarios.find(item => {
  return item.empresa === 'Google';
});
console.log(trabalhaGoogle);

const maximoIdadeCinquenta = usuarios
  .map(usuario => ({
    ...usuario,
    idade: usuario.idade * 2
  }))
  .filter(usuario => usuario.idade < 50);

console.log(maximoIdadeCinquenta);

const arr = [1, 2, 3, 4, 5];
const newArr = arr.map(item => item + 10);
console.log(newArr);

// 3.2
// Dica: Utilize uma constante pra function
const usuario = { nome: 'Diego', idade: 33 };
const mostraIdade = usuario => {
  return usuario.idade;
};
console.log(mostraIdade(usuario));

// 3.3
// Dica: Utilize uma constante pra function
const nome = 'Diego';
const idade = 23;
const mostraUsuario2 = (nome = 'Diego', idade = 18) => {
  return { nome, idade };
};
console.log(mostraUsuario2(nome, idade));
console.log(mostraUsuario2(nome));

const promise = () => {
  return new Promise((resolve, reject) => {
    return resolve();
  });
};

promise()
  .then(response => console.log('Foi'))
  .catch(error => console.log('erro'));

const empresadados = {
  nomeEmpresa: 'Rocketseat',
  enderecoEmpresa: {
    cidadeEmpresa: 'Rio do Sul',
    estadoEmpresa: 'SC'
  }
};

const {
  nomeEmpresa,
  enderecoEmpresa: { cidadeEmpresa, estadoEmpresa }
} = empresadados;
console.log(nomeEmpresa); // Rocketseat
console.log(cidadeEmpresa); // Rio do Sul
console.log(estadoEmpresa); // SC

function mostraInfo(usuario) {
  const { nome, idade } = usuario;
  return `${nome} tem ${idade} anos.`;
}
console.log(mostraInfo({ nome: 'Diego', idade: 23 }));

const arr2 = [1, 2, 3, 4, 5, 6];
const [x, ...y] = arr2;
console.log(x);
console.log(y);

const soma = (...params) => {
  return params.reduce((total, next) => total + next);
};
console.log(soma(1, 2, 3, 4, 5, 6));

const usuario3 = {
  nome: 'Diego',
  idade: 23,
  endereco: {
    cidade: 'Rio do Sul',
    uf: 'SC',
    pais: 'Brasil'
  }
};

const usuario4 = { ...usuario3, nome: 'Gabriel' };
console.log(usuario4);

const usuario5 = {
  ...usuario3,
  endereco: { ...usuario3.endereco, cidade: 'Lontras' }
};
console.log(usuario5);

const usuarioL = 'Diego';
const idadeL = 23;
console.log(`O usuário ${usuarioL} possui ${idadeL} anos`);

const nomeSete = 'Diego';
const idadeSete = 23;
const usuariosete = {
  nomeSete,
  idadeSete,
  cidade: 'Rio do Sul'
};
console.log(usuariosete);
