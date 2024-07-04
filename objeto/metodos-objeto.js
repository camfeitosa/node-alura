const estudante = {
  nome: 'Julia Silva',
  idade: 17,
  cpf: '212234234',
  turma: 'JavaScript',
  bolsista: true,
  telefone: ['551199999998', '551199999998'],
  endereco: [{
    rua: 'Av. Jaguari',
    numero: '23',
    complemento: 'apto 43'
  },
  {
    rua: 'Av. Paulista',
    numero: '12',
    complemento: ''
  }]
}

// object.keys

const chavesObj = Object.keys(estudante)
console.log('Chaves', chavesObj)

if (!chavesObj.includes('endereco')){
  console.error('É necessário ter um endereço cadastrado')
}

console.log('Valores', Object.values(estudante))
console.log('Valores e chaves', Object.entries(estudante))

// Object.assign(): usado para fusão e cópia de objetos. Este método permite combinar propriedades de diferentes objetos em um único objeto.

const objetoOriginal = { a: 1, b: 2 };
const objetoParaCopiar = { b: 3, c: 4 };

const objetoFusionado = Object.assign({}, objetoOriginal, objetoParaCopiar);

console.log(objetoFusionado);
// Saída: { a: 1, b: 3, c: 4 }