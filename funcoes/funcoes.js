// parametros/argumentos
// retorno
// Existem dois momentos 

// 1 Declara oq a função faz
function exibeInfosEstudante(estudante, nota){
  console.log(`O nome é ${estudante} a nota é ${nota}`)
}

// 2 Chama a função/executa
exibeInfosEstudante('Agatha', 10)
exibeInfosEstudante('Kleber', 8)

// hoisting -> le as funções antes de qualquer coisa

// Exemplo

function dividir(dividendo, divisor) {
  if (divisor !== 0) {
    return dividendo / divisor; // se for true será a ultima instrução, por isso a função possui 2 return
  } else {
    return 'favor não dividir por zero';
  }
 }
 
 const resultado = dividir(10, 5);
 console.log(resultado); // 2
 const resultadoZero = dividir(10, 0);
 console.log(resultadoZero); // 'favor não dividir por zero'

 