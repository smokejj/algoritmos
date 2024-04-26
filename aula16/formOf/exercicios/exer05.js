let soma = 0;
for (let i = 0; i < 5 ; i++) {
 const numero = readlineSync.question((`Digite um número:`));
  soma += numero;
}

let media = soma / 5;
console.log(`A média dos números digitados é: ${media}`);