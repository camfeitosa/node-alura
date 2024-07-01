const arrayNums = [1, 2, 3, 4]

const multplicacao = arrayNums.map(numero => numero * 10)
console.log(multplicacao) 

// função callback

function multiplicaPorDez(num) {
  return num * 10
 }

 //Para o JavaScript, qualquer função que seja chamada como argumento de outra é considerada uma função callback, não apenas em caso de métodos 