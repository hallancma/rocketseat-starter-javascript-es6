"use strict";

var arr = [1, 2, 4, 5, 6];
var newArr = arr.map(function (item) {
  return item * 2;
});
console.log(newArr);

var teste = function teste() {
  return 'teste';
};

console.log(teste());

var teste2 = function teste2() {
  return [1, 2, 3];
};

console.log(teste2());

var teste3 = function teste3() {
  return {
    nome: 'Diego'
  };
};

console.log(teste3());
