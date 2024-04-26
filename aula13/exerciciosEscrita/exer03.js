const listaDeTarefas = []

const readlineSync = require('readline-sync')
const tarefa1 = readlineSync.question('Digite uma tarefa :')
const tarefa2 = readlineSync.question('Digite uma tarefa :')
const tarefa3 = readlineSync.question('Digite uma tarefa :')
listaDeTarefas.push(tarefa1)
listaDeTarefas.push(tarefa2)
listaDeTarefas.push(tarefa3)
console.log(listaDeTarefas)
const indice = readlineSync.question('Qual o indice da tarefa voce ja realizou? ')
listaDeTarefas.splice(Number(indice),1)
console.log(listaDeTarefas)
