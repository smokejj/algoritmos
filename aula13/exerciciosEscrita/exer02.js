const comidasPreferidas = ['Dogão','Banana', 'Bolo','Bergamota','Bolacha']
console.log("\nb)Essas sõa as minhas comidas favoritas : ")
console.log(comidasPreferidas.join("\n"))

const readlineSync = require('readline-sync')
const comida = readlineSync.question('Qual a sua comida preferida?')
comidasPreferidas.splice(1,2)
comidasPreferidas.push(comida)
console.log(comidasPreferidas)