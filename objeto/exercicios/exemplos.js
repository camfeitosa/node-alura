// Antes

const objGossipGirl = {
  personagem: 'Blair Waldorf',
  idade: 21,
  faculdade: 'Yale',
  cidade: 'New York',
  numero: '11999999999'
}

// acessando
console.log(objGossipGirl.personagem.substring(0, 5))
objGossipGirl.eps = 120
console.log(objGossipGirl)
// deletando
delete objGossipGirl.cidade
console.log(objGossipGirl)


// EXEMPLO
const cliente = {
  nome: "Andre",
  idade: 32,
  cpf: "1122233345",
  email: "andre@dominio.com",
};

console.log(
  `O nome do cliente é ${cliente["nome"]} e essa pessoa tem ${cliente["idade"]} anos.`
);

const chaves = ["nome", "idade", "cpf", "email", "altura"];

chaves.forEach((chave) => {
  console.log(`A chave ${chave} tem valor ${cliente[chave]}`);
});

console.log(chaves)

