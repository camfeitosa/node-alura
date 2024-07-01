// Declaração de função

console.log(estudanteReprovou(3, 8))

function estudanteReprovou(notaFinal, faltas){
  if (notaFinal < 7 && faltas > 4){
    return true
  } else{
    return false
  }
}

// Expressão de função -> Não consegue chamar a função antes de ser declarada

// Atribuindo em uma variavel
const estudanteReprovouDois = function (notaFinal, faltas){
  if (notaFinal < 7 && faltas > 4){
    return true
  } else{
    return false
  }
}

console.log(estudanteReprovouDois(9, 4))
