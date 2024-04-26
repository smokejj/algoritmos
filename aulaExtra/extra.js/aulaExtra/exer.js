const readline = require('readline')
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})
rl.question(`digite o primeiro número:`, (numero1) =>{
    rl.question(`digite o segundo número:`, (numero2)=>{
        numero1 = numero1
        numero2 = numero2
        const resultado = Number(numero1) + Number (numero2)
        console.log(`a soma de ${numero1} e ${numero2} é ${resultado}
        `)
        rl.close()
    })
})