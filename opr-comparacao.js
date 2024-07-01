// Código omitido. 

if ("0" == 0) {
  console.log('Passou na comparação');
} else {
  console.log('Não passou na comparação');
}

// Utilizar sempre os três iguais ===
if ("0" === 0) { // '0' (string) - truthy -> 0 (number) -> Falsy 
  console.log('Passou na comparação');
} else {
  console.log('Não passou na comparação');
}

console.log("b" + "a" + + "a" + "a")

// Sem Ternário

// let idadeEstudante = 16;
// let precisaDeAutorizacao;

// if (idadeEstudante < 18) {
//  precisaDeAutorizacao = true;
// } else {
//  precisaDeAutorizacao = false;
// }

// console.log(precisaDeAutorizacao);

// Com Operador Ternário
let idadeEstudante = 16;
const precisaDeAutorizacao = idadeEstudante < 18 ? true : false;
console.log(precisaDeAutorizacao); // true