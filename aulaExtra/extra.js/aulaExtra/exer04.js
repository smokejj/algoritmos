
const readline = require ('readline')
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})
let senha = 123
rl.question('digite a sua senha:' , (numero) => {
    if (numero == senha){
        console.log('senha correta.')
    }else {
        console.log('senha incorreta.')
    }
    rl.close
})