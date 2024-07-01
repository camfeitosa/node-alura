const listaEstudantes = ['João', 'Juliana', 'Ana', 'Caio', 'Lara', 'Marjorie', 'Guilherme', 'Aline', 'Fabiana', 'André', 'Carlos', 'Paulo', 'Bia', 'Vivian', 'Isabela', 'Vinícius', 'Renan', 'Renata', 'Daisy', 'Camilo'];

console.table(listaEstudantes)

const sala1 = listaEstudantes.slice(0, listaEstudantes.length / 2) // o indice 10 não é incluido -> fim não é incluido
const sala2 = listaEstudantes.slice(listaEstudantes.length / 2) // o começo é incluido

console.table(listaEstudantes) // não modifica
console.table(sala1)
console.table(sala2)


// SLICE 

// arr.slice([início[,fim]])
