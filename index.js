var tipo_booleano=true
var tipo_nulo=null
var tipo_numerico=123
var x=true
var nome_filha="helo" 
var lista=[1,2,3]
var filha={
  nome:"helo",
  idade:3,
  qualidade_sono:true
}


// console.log(tipo_numerico=="123")
// console.log(tipo_numerico===123)
// console.log(tipo_numerico!=122)
// console.log(tipo_numerico!=="123")
// console.log(tipo_numerico>122)
// console.log(tipo_numerico>=122)
// console.log(tipo_numerico<124)
// console.log(tipo_numerico<=124)

// console.log(tipo_booleano === true && tipo_numerico===123)
// console.log(tipo_booleano === true || tipo_numerico===122)

var farinha=false
var margarina=false
var ovo=true
var trigo=true
var fermento=true
var agua=false
var posso_fazer_bolo=true
var resposta_da_condição = farinha==false;
console.log({resposta_da_condição})
if(farinha==false){
  posso_fazer_bolo=false
  console.log("que pena, voce nao pode fazer bolo! voce precisa comprar farinha")
}
if(ovo==false){
  posso_fazer_bolo=false
  console.log("que pena, voce nao pode fazer bolo! voce precisa comprar ovo")
}
if(trigo==false){
  posso_fazer_bolo=false
  console.log("que pena, voce nao pode fazer bolo! voce precisa comprar trigo")
}
if(agua==false){
  posso_fazer_bolo=false
  console.log("que pena, voce nao pode fazer bolo! voce precisa comprar agua")
}

if(fermento==false){
  posso_fazer_bolo=false
  console.log("que pena, voce nao pode fazer bolo! voce precisa comprar fermento")
}

  if(margarina==false){
    posso_fazer_bolo=false
    console.log("que pena, voce nao pode fazer bolo! voce precisa comprar margarina")
  }
if(posso_fazer_bolo==true){
  console.log("parabens voce consegue fazer o bolo")
}

var lista=[1,"gol",true,17,false]

// loop
for (var x=0; x <= 1000; x = x +5){
// para (variavel x recebe primeiro 0; enquanto x for menor ou igual a 1000; x recebe valor atual de x + 5)
  console.log(`objetivo x: ${x}`);
  if (x%100==0){
    // se (o resto da divisão (%) de x por 100 for igual a 0)
    console.log(`parabens chegamos a centena x: ${x}`);
  }
  if(x == 1000){
    // se (o x for igual a 1000)
    console.log("parabens chegamos no milhar 1000")
  }
}

