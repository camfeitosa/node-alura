const numeros = [43, 50, 65, 12]
 
// reduce trabalha com dois parametros (funcao Callback) e valor inicial do acumulador (0)
//Callback tem dois parametros -> acumulador e valor atual (ambos obrigatorios)
const soma = numeros.reduce((acum, atual) => atual + acum, 0)
 
console.log(soma) //170


const num = [43, 50, 65, 12]

const sub = num.reduce((acum, valor) => valor - acum, 0)
console.log(sub)