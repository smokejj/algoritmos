//importando o módulo readline
const readline = require(`readline`);

//criando uma instancia de interface de leitura e escrita
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

//solicitando ao usuario que insira sua idade
rl.question('qual a sua idade? ', (idade) => {
  // Exibindo a idade inserida pelo usuario
console.log('sua idade é:', idade);

 //fechando a interface de leitura 
rl.close();
});
