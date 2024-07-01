// juntar salas
const salaJS = ['Evaldo', 'Camis', 'Mari'];
const salaPython = ['Ju', 'Leo', 'Raquel'];
 // concat retorna um novo array
const salasUnificadas = salaJS.concat(salaPython)
console.log(salasUnificadas)
console.table(salasUnificadas)


// exemplos
const arrayOriginal = ["Maria", "Carlos", "Eduardo", "Samanta"]
const arrayConcat = arrayOriginal.concat(["André", "Fernanda"], ["Ricardo", "Ana"], ["Marcelo", "Bia"])
 
console.log(arrayConcat)
console.log(arrayOriginal)


const arrayOriginal2 = [50, 60, 70]
const arrayConcat2 = arrayOriginal2.concat([80, [90, 100]])
 
console.log(arrayConcat2)
console.log(arrayOriginal2)

// [ 50, 60, 70, 80, [ 90, 100 ] ] -> considera [90, 100] como um elemento só
// [ 50, 60, 70 ]

// concat() é um método útil quando não se deseja alterar o array original, e sim fazer uma cópia alterada. Caso isso não seja necessário, considere utilizar push() ou splice() para inserir novos elementos ou fazer alterações no array original.