var chamada = 1;
function qualquerNome(parametro1, parametro2, parametroN) {
  console.log(`Chamada numero ${chamada}`);
  console.log(
    {parametro1, parametro2, parametroN}
  );
  console.log("---------------")
  // chamada = chamada + 1;
  chamada++;
}

qualquerNome(1, "abc", true);
// outras coisas 
qualquerNome({nome: "Diego"}, [], ["lista com conteudo"]);

function casa(dinheiro) {
  if (dinheiro>=6000) {
    console.log ("tenho dinheiro para fazer a casa")

  } else {
    console.log ("não tenho dinheiro")
  }
}



casa(1000)
casa (12000)
casa (7000)
casa(4000)