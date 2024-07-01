let i = 5; // pós-incremento
console.log(i++); // Saída: 5 (retorna o valor atual de i)
console.log(i);   // Saída: 6 (i foi incrementado após a execução)

let j = 5; // pré-incremento
console.log(++j); // Saída: 9 (j foi incrementado antes de ser usado)
console.log(j);   // Saída: 9 (j já foi incrementado)

for (let index = 1; index <= 10; index++) {
  console.log(`${2} x ${index} = ${2*index}`)
}