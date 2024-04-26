const readline = require(`readline`);

const rl = readline.createInterface({
input: process.stdin,
output: process.stdout
});

rl.question('Digite o primeiro numero: ', (numero1) => {
    rl.question('Digite o segundo numero:',(numero2) => {
      rl.question('Digite o terceiro numero:',(numero3) => {
        if ( Number(numero1) > Number(numero2) && Number(numero1) > Number(numero3)) {
          console.log( "numero maior é o: ", numero1)
        } else if (Number(numero2) > Number(numero1) && Number(numero2) > Number(numero3)){
          console.log( "numero maior é o: ", numero2);
        } else {
          console.log( "numero maior é o: ", numero3)
        }
      rl.close()
    });
  });
});
        
0

