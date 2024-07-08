const pessoa = {
  nome: 'Ana',
  notas: [10, 9, 8, 5],
  calcularMediaNotas: function(){
    const soma = this.notas.reduce((acum, nota) => acum + nota, 0)
    const media = soma / this.notas.length
    return media
  },
  classificarDesempenho: function(){
    const media = this.calcularMediaNotas();

    if(media >= 9){
      return 'Desempenho excelente'
    } else if (media >= 7.6 && media <= 8.9){
      return 'Bom desempenho'
    } else if (media >= 6 && media <= 7.5){
       return 'Desempenho regular'
    }else {
      return 'Desempenho insuficiente'
    }
  }
}
  
console.log(pessoa.calcularMediaNotas())
console.log(pessoa.classificarDesempenho())