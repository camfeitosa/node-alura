const nome = "alura";
let nomeMaiusculas = "";
 
for (let i = 0; i < nome.length; i++) {
 nomeMaiusculas += nome[i].toUpperCase()
}
console.log(nomeMaiusculas) //ALURA

const nomedoCurso = "Fundamentos de JS";
const nomeDaPlataforma = " Alura"
 
const nomeCompleto = nomedoCurso.concat(nomeDaPlataforma)
console.log(nomeCompleto)  //Fundamentos de JS Alura

const alura = "Alura";
// ["A", "l", "u", "r", "a"]
// string como se fosse um array

