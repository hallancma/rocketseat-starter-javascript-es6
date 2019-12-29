"use strict";

var a = 1;
var usuario = {
  nome: "Diego"
};
usuario.nome = 'Hallan'; //mutação

console.log(usuario);

function teste(x) {
  var y = 2;

  if (x > 5) {
    var _y = 6;
    console.log(x, _y);
  }
}

teste(10);
