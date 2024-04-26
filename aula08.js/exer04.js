const readline = require(`readline`);

const rl = readline.createInterface({
input: process.stdin,
output: process.stdout
});

rl.question('Digite o primeiro numero: ', (numero1) => {
    rl.question('Digite o segundo numero:',(numero2) => {
      rl.question('Digite uma operacao:',(opercao) => {
       
        if (opercao === "*") {
          console.log('resultado:', Number(numero1) * Number(numero2))
        } else if (opercao === "/") {
          console.log('resultado:', Number(numero1) / Number(numero2))
        } else if (opercao === "-") {
          console.log('resultado:', Number(numero1) - Number(numero2))
        } else if (opercao === "+") {
          console.log('resultado:', Number(numero1) + Number(numero2))
        } else {
          console.log('resultado nao encontrado')
        } 
      rl.close()
    });
  });
});
        
