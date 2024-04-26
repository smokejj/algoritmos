const readline = require('readline-sync');

let maior = 0
let menor = 999999999

for (let i = 0; i < 10; i++) {
    const numero = Number(readline.question(`Digite o número ${i + 1}: `));
    if (numero > maior) {
        maior = numero;
    }
    if (numero < menor) {
        menor = numero;
    }
}

console.log("O maior número digitado é:", maior);
console.log("O menor número digitado é:", menor);