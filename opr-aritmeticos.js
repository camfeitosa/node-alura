const notaPrimeiroBi = 8
const notaSegundoBi = 6.3
const notaTerceitoBi = 9.3
const notaQuartoBi = 7

let media = (notaPrimeiroBi + notaSegundoBi + notaTerceitoBi + notaQuartoBi) / 4 // 5 string vai concatenar sem o parseInt

if (media >= 7) {
  media += media * 0.1
}

console.log(`A média é ${media.toFixed(2)}`)

// Operador de incremento e atribuição
let contadorVisitas = 0;
contadorVisitas = contadorVisitas + 1;
contadorVisitas += 1;
contadorVisitas++;

let estoqueProdutoA = 50

function realizarVenda(quantidade) {
  if (quantidade > estoqueProdutoA) {
    console.log("Quantidade insuficiente em estoque.");
  } else {
    estoqueProdutoA -= quantidade;
    console.log(`Venda realizada com sucesso. Novo estoque: ${estoqueProdutoA}`);
  }
}

realizarVenda(51)