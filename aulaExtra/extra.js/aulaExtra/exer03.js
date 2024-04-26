const readline = require ('readline')
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})
rl.question('digite um número:' , (numero) => {
    if (numero < 0){
        console.log('esse número é negativo.')
    }else if (numero > 0){
        console.log('esse número é positivo.')
    }else {
        console.log('esse número é igual a 0')
    }
    rl.close
})