//Operador E (ADD) &&
//retorna true se,e somente se,os todos booleanos envolvidos também forem true

true && true //true
false && true //false
true && false //false
false && false //false

const var1 = 50
const var2 = 50
const var3 = 25

console.log(var1 === var2 && var1 > var3)//true

//exercicios
let a = true
let b = false
let c = true
console.log(a && b) //false
console.log(b && c) //false
console.log(a && c) //true
console.log(a && b && c) //false


