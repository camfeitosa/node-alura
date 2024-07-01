// Converte qualquer outro tipo de dado em um tipo Number. Caso o valor não possa ser convertido, retornará NaN.

Number("1"); // retorna o número 1 
Number("Alura"); // retorna NaN
Number(undefined); // retorna NaN
Number(null); // retorna 0


// 'parseIntvai tentar converter o valor em um número inteiro e `parseFloat`, em um número de ponto flutuante.

parseInt('4'); // retorna o número 4
parseInt('4.5'); // retorna o número 4

parseFloat('4'); // retorna o número 4
parseFloat('4.5'); // retorna o número 4.5
parseFloat('4.5abc'); // retorna o número 4.5

// Coerção de tipos
+ '45'  // retorna o número 45
+true // retorna o número 1

console.log(typeof +'45'); // retorna ‘number’
console.log(typeof +true); // retorna ‘number’

// Number converte outros tipos de dados -> Parse converte apenas String

// STRING

String(2); // retorna '2'
String(undefined); // retorna 'undefined'
String(true); // retorna 'true'

// INCLUDES
'estudando JavaScript'.includes('Java'); // retorna true

const texto = 'estudando JavaScript';
texto.includes('Java'); // retorna true


// ToLowerCase

'POR FAVOR, NÃO GRITE'.toLowerCase(); // retorna 'por favor, não grite'

const texto3 = 'POR FAVOR, NÃO GRITE';
texto.toLowerCase(); // retorna 'por favor, não grite'