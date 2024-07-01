// Arrow function -> não funciona chamar antes de ser declarada

const estudanteReprovouDois = (notaFinal, faltas) => {
  if (notaFinal < 7 && faltas > 4){
    return true
  } else{
    return false
  }
}

// Pode tirar tanto as chaves {} quanto o return, quando funcao tiver um linha
const exibeNome = (nome) => nome

const nomeDois = (nomeDois) => {
  return nomeDois
}


console.log(exibeNome('Luana'))
console.log(nomeDois('Isis'))

console.log(estudanteReprovouDois(3, 7))


// Função clássica
function classica(parametro){
  return parametro
}

// Expressão de função
const expressaoDeFuncao = function(n){
  return n
}

// Arrow function
const arrow = (par1) => par1
