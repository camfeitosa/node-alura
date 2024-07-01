const calculadora = {
  soma: function (a, b) {
    return a + b
  },
  subtracao: function (a, b) {
    return a - b
  },
  multiplicacao: function (a, b) {
    return a * b
  },
  divisao: function (a, b) {
    if (b !== 0) {
      return a / b;
    } else {
      return "Divisão por zero não é permitida.";
    }
  },
  calcularMedia: function (arrayNumeros) {
    let somaArray = arrayNumeros.reduce((acum, numero) => numero + acum, 0)
    let media = (somaArray / arrayNumeros.length).toFixed(2)
    return media
  }
}

console.log(calculadora.soma(2, 3))
console.log(calculadora.subtracao(10, 3))
console.log(calculadora.multiplicacao(4, 19))
console.log(calculadora.divisao(2, 0))
console.log(calculadora.calcularMedia([0, 3, 10, 1342, 12, 12]))

