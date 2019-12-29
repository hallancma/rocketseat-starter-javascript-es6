"use strict";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Usuario =
/*#__PURE__*/
function () {
  function Usuario(email, senha) {
    _classCallCheck(this, Usuario);

    this.email = email;
    this.senha = senha;
  }

  _createClass(Usuario, [{
    key: "isAdmin",
    value: function isAdmin() {
      return !this.admin ? false : true;
    }
  }]);

  return Usuario;
}();

var Admin =
/*#__PURE__*/
function (_Usuario) {
  _inherits(Admin, _Usuario);

  function Admin() {
    var _this;

    _classCallCheck(this, Admin);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Admin).call(this));
    _this.admin = true;
    return _this;
  }

  return Admin;
}(Usuario);

var User1 = new Usuario('email@teste.com', 'senha123');
var Adm1 = new Admin('email@teste.com', 'senha123');
console.log(User1.isAdmin()); // false

console.log(Adm1.isAdmin()); // true

var usuarios = [{
  nome: 'Diego',
  idade: 23,
  empresa: 'Rocketseat'
}, {
  nome: 'Gabriel',
  idade: 15,
  empresa: 'Rocketseat'
}, {
  nome: 'Lucas',
  idade: 30,
  empresa: 'Facebook'
}];
var idades = usuarios.map(function (item) {
  return item.idade;
});
console.log(idades);
var funcMaiorRocket = usuarios.filter(function (item) {
  if (item.idade > 18 && item.empresa === 'Rocketseat') {
    return item;
  }
});
console.log(funcMaiorRocket);
var trabalhaGoogle = usuarios.find(function (item) {
  return item.empresa === 'Google';
});
console.log(trabalhaGoogle);
var maximoIdadeCinquenta = usuarios.map(function (usuario) {
  return _objectSpread({}, usuario, {
    idade: usuario.idade * 2
  });
}).filter(function (usuario) {
  return usuario.idade < 50;
});
console.log(maximoIdadeCinquenta);
var arr = [1, 2, 3, 4, 5];
var newArr = arr.map(function (item) {
  return item + 10;
});
console.log(newArr); // 3.2
// Dica: Utilize uma constante pra function

var usuario = {
  nome: 'Diego',
  idade: 33
};

var mostraIdade = function mostraIdade(usuario) {
  return usuario.idade;
};

console.log(mostraIdade(usuario)); // 3.3
// Dica: Utilize uma constante pra function

var nome = 'Diego';
var idade = 23;

var mostraUsuario2 = function mostraUsuario2() {
  var nome = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'Diego';
  var idade = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 18;
  return {
    nome: nome,
    idade: idade
  };
};

console.log(mostraUsuario2(nome, idade));
console.log(mostraUsuario2(nome));

var promise = function promise() {
  return new Promise(function (resolve, reject) {
    return resolve();
  });
};

promise().then(function (response) {
  return console.log('Foi');
})["catch"](function (error) {
  return console.log('erro');
});
var empresadados = {
  nomeEmpresa: 'Rocketseat',
  enderecoEmpresa: {
    cidadeEmpresa: 'Rio do Sul',
    estadoEmpresa: 'SC'
  }
};
var nomeEmpresa = empresadados.nomeEmpresa,
    _empresadados$enderec = empresadados.enderecoEmpresa,
    cidadeEmpresa = _empresadados$enderec.cidadeEmpresa,
    estadoEmpresa = _empresadados$enderec.estadoEmpresa;
console.log(nomeEmpresa); // Rocketseat

console.log(cidadeEmpresa); // Rio do Sul

console.log(estadoEmpresa); // SC

function mostraInfo(usuario) {
  var nome = usuario.nome,
      idade = usuario.idade;
  return "".concat(nome, " tem ").concat(idade, " anos.");
}

console.log(mostraInfo({
  nome: 'Diego',
  idade: 23
}));
var arr2 = [1, 2, 3, 4, 5, 6];
var x = arr2[0],
    y = arr2.slice(1);
console.log(x);
console.log(y);

var soma = function soma() {
  for (var _len = arguments.length, params = new Array(_len), _key = 0; _key < _len; _key++) {
    params[_key] = arguments[_key];
  }

  return params.reduce(function (total, next) {
    return total + next;
  });
};

console.log(soma(1, 2, 3, 4, 5, 6));
var usuario3 = {
  nome: 'Diego',
  idade: 23,
  endereco: {
    cidade: 'Rio do Sul',
    uf: 'SC',
    pais: 'Brasil'
  }
};

var usuario4 = _objectSpread({}, usuario3, {
  nome: 'Gabriel'
});

console.log(usuario4);

var usuario5 = _objectSpread({}, usuario3, {
  endereco: _objectSpread({}, usuario3.endereco, {
    cidade: 'Lontras'
  })
});

console.log(usuario5);
var usuarioL = 'Diego';
var idadeL = 23;
console.log("O usu\xE1rio ".concat(usuarioL, " possui ").concat(idadeL, " anos"));
var nomeSete = 'Diego';
var idadeSete = 23;
var usuariosete = {
  nomeSete: nomeSete,
  idadeSete: idadeSete,
  cidade: 'Rio do Sul'
};
console.log(usuariosete);
