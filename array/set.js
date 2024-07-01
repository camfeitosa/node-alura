const nomes = ["Ana", "Clara", "Maria", "Maria", "João", "João", "João"];

const nomesAtualizados = new Set(nomes) // set = CONJUNTO que armazena valores únicos
// Set é array like, mas não é array, métodos de array não funcionam
// nomesAtualizados.push('cam')  => não funciona

const nomesAtualizadosLista = [...nomesAtualizados] // de set para array
const nomeAtualizadosLista = [...new Set(nomes)] // forma reduzida

console.log(nomesAtualizados)
console.log(nomesAtualizadosLista)