const readline = require('readline-sync');

const frase = readline.question("Digite uma frase: ").toLowerCase();
let vogais = 0;
let consoantes = 0;

for (let i = 0; i < frase.length; i++) {
    const caractere = frase[i];
    if (caractere >= 'a' && caractere <= 'z'){
        if (caractere === 'a' || caractere === 'e' || caractere === 'i' || caractere === 'o' || caractere === 'u') {
            vogais++;
        } else {
            consoantes++;
        }
    }
    
}

console.log("Número de vogais:", vogais);
console.log("Número de consoantes:", consoantes)