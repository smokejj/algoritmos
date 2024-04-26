const readlineSync = require('readline-sync')

const numero1 = readlineSync.question("Digite um numero: ")
const numero2 = readlineSync.question("Digite um numero: ")
if (numero1 >= 0 && numero2 >=0){
    console.log(Number(numero1) + Number(numero2) )
}else{
    console.log("Esse numero não é positivo")
}
  
