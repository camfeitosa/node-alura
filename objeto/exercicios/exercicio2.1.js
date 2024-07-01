const pessoas = [{
  nome: 'Maria',
  idade: 12,
  cidade: 'Osasco'
},
{
  nome: 'João',
  idade: 32,
  cidade: 'São Paulo'
},
{
  nome: 'Joana',
  idade: 27,
  cidade: 'Barueri'
},
]

function mostrarListaPessoas(pessoas){
  // console.log(pessoas)
  pessoas.forEach(pessoa => {console.log(pessoa)})
}

mostrarListaPessoas(pessoas)

pessoas.push({
  nome: 'Beatriz',
  idade: 2,
  cidade: 'Rio de Janeiro'
})

mostrarListaPessoas(pessoas)

function filtrarPorCidade(pessoas, cidade){
  let filtroCidade = pessoas.filter((pessoa) => pessoa.cidade === cidade)
  return filtroCidade
}

console.log(filtrarPorCidade(pessoas, 'Osasco'))



