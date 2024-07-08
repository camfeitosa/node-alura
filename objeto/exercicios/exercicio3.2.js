const carro = {
  marca: 'Ford',
  modelo: 'Ford novo',
  ano: 2024,
  cor: 'branco',
  ligado: false,
  ligar: function(){
    if (this.ligado){
      return 'O carro já está ligado'
    } else {
      this.ligado = true
      return `O carro foi ligado: ${this.ligado}` 
    }
  },
  desligar: function(){
    if (this.ligado === false){
      return 'O carro já está desligado'
    } else {
      this.ligado = false
      return `O carro foi desligado: ${this.ligado}` 
    }
  },
  obterDetalhes: function () {
    const estado = this.ligado ? 'ligado' : 'desligado';
    return `Detalhes do carro:\nMarca: ${this.marca}\nModelo: ${this.modelo}\nAno: ${this.ano}\nCor: ${this.cor}\nEstado: ${estado}`;
  }
}

console.log(carro.ligar())
console.log(carro.desligar())
console.log(carro.obterDetalhes());