const listaProdutos = [
  { id: 1, nome: "Camiseta", preco: 25.99 },
  { id: 2, nome: "Calça Jeans", preco: 49.99 },
  { id: 3, nome: "Tênis", preco: 79.99 },
  { id: 4, nome: "Boné", preco: 15.99 }
]

function filtrarOrdenarProdutosPorPreco (lista, maxPreco){
  const filtrar = lista.filter(produto => produto.preco <= maxPreco)
  return filtrar.sort((a, b) => a.preco - b.preco)
}

console.log(filtrarOrdenarProdutosPorPreco(listaProdutos, 40))

