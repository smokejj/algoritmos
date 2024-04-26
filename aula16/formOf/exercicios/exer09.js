const readline = require('readline-sync');

const numero = Number(readline.question("Digite um número para calcular sua fatorial: "));
let fatorial = 1;

for (let i = 1; i <= numero; i++) {
    fatorial *= i;
}

console.log(`A fatorial de ${numero} é:`, fatorial);