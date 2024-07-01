const notaFinal = 4
const faltas = 3
const advertencias = 0

if (notaFinal < 7 && faltas > 4){ //and
  console.log('Reprovado')
} else {
  console.log('Aprovado')
}

if (faltas >= 2 && !advertencias){ // 0 numérico retorna falso -> negando o valor falso (0) retorna true
  console.log('Recebeu bonus')
} else {
  console.log('Não recebeu bonus')
}

// Exemplo do NOT

const chuva = false;

if (!chuva) { // inverte o valor
    console.log("Não está chovendo. Pode sair de casa.");
} else {
    console.log("Está chovendo. Melhor ficar em casa.");
}

// Truthy e False

// Truthy
  if (true)
  if ({})
  if ([])
  if (42)
  if ("foo")
  if (new Date())
  if (-42)
  if (3.14)
  if (-3.14)
  if (Infinity)
  if (-Infinity)

// False
  if (null)
  if (undefined)
  if (0)
  if (-0)
  if (NaN)
  if ('')
  if (false)
