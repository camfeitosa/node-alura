const pessoa = {
  nome: 'João',
  idade: 32,
  genero: 'M',
  solteiro: false,
  hobbies: ['desenhar', 'cozinhar', 'andar de bicicleta']
}

pessoa.endereco = {
  rua: 'Paulista',
  cidade: 'São Paulo',
  estado: 'São Paulo'
}

function mostrarInfoPessoa(pessoa) {

  let generoPessoa


  if (pessoa.genero === 'F' && pessoa.solteiro) {
    generoPessoa = 'solteira'
  } else if (pessoa.genero === 'F' && pessoa.solteiro == false) {
    generoPessoa = 'casada'
  } else if (pessoa.genero === 'M' && pessoa.solteiro) {
    generoPessoa = 'solteiro'
  } else {
    generoPessoa = 'casado'
  }

  let estadoCivil = pessoa.solteiro ? `${pessoa.nome} é ${generoPessoa}` : `${pessoa.nome} é ${generoPessoa}`

  console.log(`
    Nome da pessoa: ${pessoa.nome} (Tipo: ${typeof pessoa.nome})
    Idade: ${pessoa.idade} (Tipo: ${typeof pessoa.idade})
    Endereco: ${pessoa.endereco.rua} 
    Estado civil: ${estadoCivil} (Tipo: ${typeof pessoa.nome})
    Os hobbies de ${pessoa.nome} são ${pessoa.hobbies.join(', ')}
    `)

   pessoa.hobbies.forEach(hobbie => {
      console.log(hobbie)
    });
}

mostrarInfoPessoa(pessoa)




