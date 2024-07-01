
function exemplosDeErros() {
  console.log(nome) // ReferenceError: nome is not defined
  // console.log(nome)
  //             ^

  // StackTrace -> aparecem  os códigos internos do node js junto com a mensagem de erro 

  console.log('oi') //SyntaxError: missing ) after argument list

  //SyntaxError, RangeError, ReferenceError, TypeError;
}

// Todos os erros são instâncias da classe error
// error.name -> Classe do erro gerado (ReferenceError)
// error.code -> Uma string que representa um identificador para o erro
// error.message -> a descrição do erro 
// error.stack -> a mensagem completa do erro, seguido do caminho percorrido pelo erro;

// let nome = 2

try { // tente realizar isso
  console.log(nome)

} catch (erro) { // se der erro -> entre nessa parte do código
  console.log(`O nome do erro é: ${erro.name}\n`)
  console.log(`A mensagem de erro é: ${erro.message}\n`)
  console.log(`A stack do erro é: ${erro.code}\n`)
  console.log(`A stack do erro é: ${erro.stack}\n`)
}
// usamos o \n acima para pular uma linha extra e visualizar