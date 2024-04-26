const readlineSync = require('readline-sync')
const nome = readlineSync.question("Qual o seu nome?")
const email = readlineSync.question("Digite seu email:")
console.log(`Seu nome é ${nome}, e seu email é ${email}`)
