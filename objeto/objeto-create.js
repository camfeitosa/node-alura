const objPersonagem = {
  nome: "Gandalf",
  classe: "mago",
  nivel: "20"
 }
  
 const objPersonagem2 = Object.create(objPersonagem)
 objPersonagem2.nome = "Saruman"
  
 console.log(objPersonagem.nome) //Gandalf
 console.log(objPersonagem2.nome) //Saruman

// O método Object.create() cria um novo objeto utilizando como protótipo o objeto passado via parâmetro. Dessa forma, objPersonagem2 é uma instância diferente de objPersonagem e pode ser trabalhada de forma independente.