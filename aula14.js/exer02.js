const readlineSync = require('readline-sync')

const numero1 = readlineSync.question("Digite um numero: ")
const numero2 = readlineSync.question("Digite um numero: ")
if ((numero1 || numero2)% 2 == 0){
    console.log(numero1*numero2)
}else{
    console.log("Esse numero não é par:")
}