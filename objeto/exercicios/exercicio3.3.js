const carro = {
  marca: 'Ford',
  modelo: 'Ford novo',
  ano: 2024,
  cor: 'branco',
  placa: '123ab'
}

Object.defineProperty(carro, 'placa', {
  enumerable: false
})

for (let chave in carro){
  console.log(chave)
}

console.log(Object.keys(carro))

console.log(carro.placa)

const carroNovo = {
  marca: "Honda",
  modelo: "Civic",
  ano: 2023,
  cor: "Azul"
}

console.log(carroNovo)

const carroComNovosDetalhes = {
  ...carro,
  ...carroNovo
}

console.log(carroComNovosDetalhes)

carroComNovosDetalhes.marca = 'Tesla'
console.log(carroComNovosDetalhes)
