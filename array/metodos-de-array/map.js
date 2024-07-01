const notas = [10, 9.5, 8, 7.5];
 // callback - função chamando outra
// const notasAtualizadas =  notas.map(function(nota){
//   return nota + 1
// })
const notasAtualizadas =  notas.map(nota => nota + 1 >= 10 ? 10 : nota + 1) // pode suprimir as {} e o return -> quando tiver apenas 1 parâmetro os () são opcionais

console.log(notas)
console.log(notasAtualizadas)

// Map retorna array com os resultados, cada retorno
// Usado quando precisamos que o retorno/resultado seja guardado
  
