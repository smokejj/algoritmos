let termoAnterior = 0;
let termoAtual = 1;

console.log("Sequência de Fibonacci:");

for (let i = 1; i <= 10; i++) {
    console.log(termoAtual);
    const proximoTermo = termoAnterior + termoAtual;
    termoAnterior = termoAtual;
    termoAtual = proximoTermo;
}