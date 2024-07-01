// SPLICE

const listaEstudantes = ['João', 'Ana', 'Caio', 'Lara', 'Marjorie', 'Leo'];

// Splice deixa deletar elementos de um lugar específico e adicionar 

// altera o proprio array
listaEstudantes.splice(1, 2, 'Rodrigo')  // (1 (começa do indice 1), 2(deleta 2 elementos 'contando com o indice 1'))

console.log(listaEstudantes) //['João', 'Rodrigo', 'Lara', 'Marjorie', 'Leo'];


const months = ['Jan', 'March', 'April', 'June'];
months.splice(1, 0, 'Feb'); // começa do index 1 e não deleta nenhum, adiciona 'June'
// Inserts at index 1
console.log(months);
// Expected output: Array ["Jan", "Feb", "March", "April", "June"]

months.splice(4, 1, 'May'); // começa no index 4 e deleta ele mesmo, adiciona 'May'
// Replaces 1 element at index 4
console.log(months);
// Expected output: Array ["Jan", "Feb", "March", "April", "May"]


animaisDoAquario = ['baleia', 'polvo', 'golfinho', 'tubarão']

animaisDoAquario.splice(1, 0, 'sardinha') // começa no i 1, não remove nenhum, adiciona 'sardinha'
animaisDoAquario.splice(3, 2, 'atum') // começa no i 3, remove (i3 e i4), adiciona 'atum'

console.log(animaisDoAquario)