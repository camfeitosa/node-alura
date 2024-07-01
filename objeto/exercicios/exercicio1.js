const livro = {
  titulo: 'Daisy Jones & The Six',
  autor: 'Taylor Jenkins Reid',
  anoPublicacao: 2021,
  genero: 'drama'
}

console.log(`Detalhes do Livro:
  Título: ${livro.titulo}
  Autor: ${livro.autor}
  Ano de Publicação: ${livro.anoPublicacao}
  Gênero: ${livro.genero}`)

// ex 2
let anoAtual = new Date().getFullYear() // retorna o ano atual

livro.idadePublicacao = anoAtual - livro.anoPublicacao
livro.mostrarDetalhes = (`Detalhes do Livro:
  Título: ${livro.titulo}
  Autor: ${livro.autor}
  Ano de Publicação: ${livro.anoPublicacao}
  Gênero: ${livro.genero}
  Idade da Publicação: ${livro.idadePublicacao}`)

console.log(livro.mostrarDetalhes)

// ex 3
console.log(`${livro['titulo'], livro['autor'], livro['anoPublicacao']}`)

// ex 4
livro.avaliacao = null
