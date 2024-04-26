
const readline = require(`readline`);


const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


rl.question('qual a sua idade? ', (idade) => {
 if ( 18 < idade)
console.log('voce é maior de idade!')
else {
    console.log('voce é menor de idade!')
}
 
rl.close();
});