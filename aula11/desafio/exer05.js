//complete esta função para que ela verifique todos os numeros de 1 a 10 para ver se são pares.
//a função deve somar todos os pares.
//dica: você pode ir incrementando a variável somaPares se um numero for par
console.log(pista6());
function pista6() {
    let somaPares = 0;
    if (1 % 2 === 0) {
        somaPares += 1;
    }
    if (2 % 2 === 0) {
        somaPares += 2;
    }
    if (3 % 2 === 0) {
        somaPares += 3;
    }
    if (4 % 2 === 0) {
        somaPares += 4;
    }
    if (5 % 2 === 0) {
        somaPares += 5;
    }
    if (6 % 2 === 0) {
        somaPares += 6;
    }
    if (7 % 2 === 0) {
        somaPares += 7;
    }
    if (8 % 2 === 0) {
        somaPares += 8;
    }
    if (9 % 2 === 0) {
        somaPares += 9;
    }
    if (10 % 2 === 0) {
        somaPares += 10;
    }
    
    return somaPares;
}