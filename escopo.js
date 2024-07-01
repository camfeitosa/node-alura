// let estudante
const name = 'Murilo' // variável global -> não foi declarada em nenhuma function ou bloco


if (1 > 0){ // escopo de bloco {if, while, for} -> variaveis não são acessiveis fora (let / const)

  var nome = 'camila' // acessível fora do bloco

  let estudante = 'Caroline' // variavel diferente da 'Ana'

  console.log(estudante)
}

estudante = 'Ana' // quando não passa let ou var a variavel é criada automaticamente

console.log(estudante)
console.log(nome)

//A falta de “controle” de escopo é um dos motivos pelo qual o uso de var foi abandonado e as boas práticas atuais recomendam apenas o uso de const e let.

function cumprimentar() {
  const teste = 'Camila'; // variável local
  const cumprimento = 'Olá'; // variável local
  console.log(`${cumprimento}, ${teste}!`); // “Olá, Camila!”
}

// as variáveis não podem ser acessada de fora da função
console.log(`${cumprimento}, ${teste}!`); // Dará erro de “not defined” no console