function imprimir (numero_final, numero_atual) {
  if (numero_final == numero_atual ){
    return `parabens chegamos no numero desejado`
  }
  return `objetivo x=${numero_atual}`
}

function incrementador (numero_inicial, numero_final, numero_incremental){
  for (var numero_atual = numero_inicial ; numero_atual <= numero_final ; numero_atual = numero_atual + numero_incremental ){
      console.log (imprimir(numero_final, numero_atual));
  }
}

incrementador (10,30,5 )

incrementador (0,200,50 )

function soma (a,b){
  return a+b
} 

var resultado_soma= soma (1,3)

function percentual (total, parte){
  return (total/parte)
}

var resultado_soma= percentual (100,10)