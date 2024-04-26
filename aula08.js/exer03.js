const readline = require(`readline`);


const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const senha = "dani"
rl.question('Digite a senha:', (senha) => {
 if ( senha === "dani") 
console.log('Login bem-sucedido')
else {
    console.log('Senha incorreta')
}
 
rl.close();
});





