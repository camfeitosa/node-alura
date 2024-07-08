const carro = {
  marca: 'Ford',
  modelo: 'Ford novo',
  ano: 2024,
  cor: 'branco'
}

for (chave in carro){
  console.log(`A chave é ${chave} e o valor é ${carro[chave]}`)
}

carro.automatico = true

for (chave in carro){
  console.log(`A chave é ${chave} e o valor é ${carro[chave]}`)
}