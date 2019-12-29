import ClasseUsuario, { idade as IdadeUsuario } from './functions';

ClasseUsuario.info();
console.log(IdadeUsuario);

const minhaPromise = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Ok');
    }, 2000);
  });
// minhaPromise()
//   .then(response => {
//     console.log(response);
//   })
//   .catch(err => {
//     console.log(err);
//   });
async function executaPromise() {
  const response = await minhaPromise();
  console.log(response);
  for (let i = 0; i < 4; i++) {
    console.log(await minhaPromise());
  }
}
//executaPromise();

const executaPromiseArrow = async () => {
  for (let i = 0; i < 2; i++) {
    console.log(await minhaPromise());
  }
};
executaPromiseArrow();

import axios from 'axios';
class Api {
  static async getUserInfo(username) {
    try {
      const response = await axios.get(
        `https://api.github.com/users/${username}`
      );
      console.log(response);
    } catch (error) {
      console.warn('Usuario não encontrado');
    }
  }
}
Api.getUserInfo('hallancma');
Api.getUserInfo('hallancmaw2343242');
