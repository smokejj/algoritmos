const readlineSync = require('readline-sync')

const numero1 = readlineSync.question("Digite um numero: ")
const numero2 = readlineSync.question("Numero divisor  : ")
if ((numero2 !== 0 ) ){
    console.log(numero1/numero2)
}else{
    console.log("Divisão por zero não é permitido:")
}