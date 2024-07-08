const departamentos = [
  {
      id: 1,
      nome: "Vendas",
      funcionarios: [
          { id: 101, nome: "Ana", cargo: "Vendedor" },
          { id: 102, nome: "Carlos", cargo: "Gerente de vendas" }
      ]
  },
  {
      id: 2,
      nome: "TI",
      funcionarios: [
          { id: 201, nome: "Maria", cargo: "Desenvolvedor" },
          { id: 202, nome: "João", cargo: "Analista de sistemas" }
      ]
  }
]

function encontrarFuncionarioPorId (lista, chave, id){
  return lista.find(funcionario => funcionario[chave].includes === id)
}


console.log(encontrarFuncionarioPorId(departamentos, 'id', 2))


function encontrarFuncionarioPorId(id) {
  for (const departamento of departamentos) {
      const funcionarioEncontrado = departamento.funcionarios.find(funcionario => funcionario.id === id);
      if (funcionarioEncontrado) {
          return funcionarioEncontrado;
      }
  }
  return null;
}