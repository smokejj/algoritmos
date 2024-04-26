const readline = require('readline-sync');

const numeroAleatorio = Math.floor(Math.random() * 100) + 1;
let tentativas = 0;
let chute;

console.log("Bem-vindo ao jogo de adivinhação!");

while (chute !== numeroAleatorio) {
    chute = Number(readline.question("Tente adivinhar o número (entre 1 e 100): "));
    tentativas++;

    if (chute < numeroAleatorio) {
        console.log("Tente um número maior.");
    } else if (chute > numeroAleatorio) {
        console.log("Tente um número menor.");
    }
}