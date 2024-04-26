const readline = require(`readline`);

const rl = readline.createInterface({
input: process.stdin,
output: process.stdout
});

rl.question('Digite o primeiro numero: ', (numero1) => {
    rl.question('Digite o segundo numero: ', (numero2) => {
        //calculando a soma
        const resultado = Number(numero1) + Number(numero2)

        //exibindo o resultado
        console.log(`a soma de ${numero1} e ${numero2 } é ${resultado}`)
      
      rl.close(); 
    });
        
})