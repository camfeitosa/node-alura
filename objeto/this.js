const pessoa = {
  nome: "Maria",
  idade: 30,
  apresentar: function() {
    console.log(`Olá, meu nome é ${this.nome} e eu tenho ${this.idade} anos.`);
  }
};

pessoa.apresentar(); // Saída: Olá, meu nome é Maria e eu tenho 30 anos.


// this referencia o proprio objeto que a função está sendo chamada