const objetoOriginal = { chave: 'valor' };
const copiaProfunda = JSON.parse(JSON.stringify(objetoOriginal));

copiaProfunda.chave = 'novoValor';
console.log(objetoOriginal.chave); // Saída: valor