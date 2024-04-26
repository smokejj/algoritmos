const readline = require(`readline`);


const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


rl.question('Me fale um numero:', (numero) => {
 if ( 0 < numero)
console.log('positivo')
else {
    console.log('negativo')
}
 
rl.close();
});