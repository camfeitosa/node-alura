const notas = [10, 8.5, 5, 6.5, 8, 7.5];

// for (let index = 0; index < notas.length; index++) {
//   const element = notas[index];
//   console.log(index, element)
// }

// Variavel é iniciada uma vez let i = 0
// Condição de execução - o laço continua repetindo enquando a condição for verdadeira
// i++ executada sempre ao final do bloco



for(let indice = 0; indice < notas.length; indice++){
  console.log(indice, notas[indice])
}

const numerosPares = [];
 
for (let i = 0; i <= 100; i += 2) {
  numerosPares.push(i);
}
 
console.log(numerosPares);

//Como vimos, em casos onde queremos apenas percorrer todos os elementos de um array sem pular nenhum, começando do início ao fim do array, o for of fornece uma sintaxe mais sucinta que o for.