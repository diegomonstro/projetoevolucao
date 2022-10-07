// const valor_digitado = prompt(`qual e seu nome?`);
// alert(`Seja bem vindo ${valor_digitado}`);
// var distancia = prompt(`quantos km?`)
// var consumido = prompt(`qual consumo por km/l?`)
// var valor_da_gasolina = prompt(`qual valor da gasolina?`)
// var resultado =(distancia/consumido)*valor_da_gasolina;
// alert(resultado);
// function calculo_de_consumo(){
//   var distancia = prompt(`quantos km?`)
//   var consumido = prompt(`qual consumo por km/l?`)
//   var valor_da_gasolina = prompt(`qual valor da gasolina?`)
//   var resultado =(distancia/consumido)*valor_da_gasolina;
//   alert(resultado);
// }
function calculo_de_churasco(quantidade_de_pessoas){
  var gramas_por_pessoas = 300;
  var litros_de_refri_por_pessoas = 0.5
  var quantidade_de_carne = quantidade_de_pessoas* gramas_por_pessoas;
  var quantidade_de_refri = litros_de_refri_por_pessoas*quantidade_de_pessoas;
  console.log(`voce de devera comprar ${quantidade_de_carne} gramas de carne e ${quantidade_de_refri} litros de refri`)
  
}
calculo_de_churasco(10); 
