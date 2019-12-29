const a = 1;
const usuario = { nome: `Diego` };
usuario.nome = 'Hallan'; //mutação
console.log(usuario);

function teste(x) {
  let y = 2;
  if (x > 5) {
    let y = 6;
    console.log(x, y);
  }
}
teste(10);
