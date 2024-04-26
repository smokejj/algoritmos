//importanto o módulo readline
const readline = require ('readline')

//criando uma instância de interface de leitura e escrita
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

//Solicitando ao usuário que insira sua idade
rl.question('Qual a sua idade? ', (idade) => {
    //exibindo a idade inserida pelo usuário
    console.log('Sua idade é:', idade)
    //fechando a interface de leitura
    rl.close()
})