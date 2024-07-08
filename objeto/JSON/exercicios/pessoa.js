const pessoaOriginal = {
  id: 1,
  nome: "Alice",
  idade: 30
}

function converterObjeto(obj){
  const copia = JSON.parse(JSON.stringify(obj));
  copia.nome = "Aurora"

  console.log(obj)

  console.log(copia)
}

converterObjeto(pessoaOriginal)