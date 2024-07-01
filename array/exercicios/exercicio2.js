// ex 1
const array1 = [1, 2, 3]
const array2 = [4, 5, 6]
const novoArray = array1.concat(array2)
console.log(novoArray)

// ex 2
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const parteDois = numeros.slice(3, 8)
console.log(parteDois)

// ex 3
const frutas = ['Maçã', 'Banana', 'Laranja', 'Limão', 'Abacaxi']
frutas.splice(2, 2, 'Kiwi', 'Pêssego')
console.log(frutas)

// ex 4
const menuPrincipal = ['arroz', 'carne', 'salada']
const menuDeSobremesas = ['brownie', 'salada de frutas', 'pudim']
const menuCompleto = menuPrincipal.concat(menuDeSobremesas)
console.log(menuCompleto)

// ex 5
let matriz = [];
let valorInicial = 1;

for (let i = 0; i < 3; i++) {
  let linha = [];
  for (let j = 0; j < 3; j++) {
    linha.push(valorInicial++);
  }
  matriz.push(linha);
}

console.log('Matriz de duas dimensões:');
console.log(matriz);
matriz.forEach(row => console.log(row)); // visualização em linhas e colunas

// ex 6
console.log(matriz[1][2])

// ex 7
console.table(matriz)

matriz[2][1] = 15
console.table(matriz)
