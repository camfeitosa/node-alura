const contaBancaria ={
  titular: 'Camila',
  saldo: 1200,
  depositar: function(deposito){
    return this.saldo += deposito
  },
  sacar: function(valor){
    if(valor > this.saldo){
      return 'Saldo insuficiente'
    } else {
      return this.saldo -= valor
    }
  }
}

const cliente = {
  nome: 'Camila Feitosa',
  conta: contaBancaria
}

console.log(contaBancaria.depositar(300))
console.log(contaBancaria.sacar(100))

function mostrarSaldo(cliente){
  console.log(`O nome do cliente é ${cliente.nome} e o saldo de sua conta é de ${cliente.conta.saldo}`)
}

mostrarSaldo(cliente)