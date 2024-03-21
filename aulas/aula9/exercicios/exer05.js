function numPar(num){
    if ((num % 2)=== 0 ){
    console.log('esse número é par')
    }else { 
        console.log('esse número é impar')
    }
}
const readline = require ('readline')
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})
 rl.question('digite um número :', (num1) => {
   numPar(num1)
    rl.close()
})