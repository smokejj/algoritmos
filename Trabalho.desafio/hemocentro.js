

let doadores = []
function exibirMenu() {
    console.log("Menu de Opções:");
    console.log("1. Cadastrar doador");
    console.log("2. Liasta de Doadores");
    console.log("3. Buscar doador por tipo sanguíneo ");
    console.log("4. Buscar doador por data da última doação ");
    console.log("5. Sair ");
}
const readline = require('readline-sync');
function main() {
    let encerrar = false;

    while (!encerrar) {
        exibirMenu();
        let opcao = readline.question("Digite o número da opcao desejada: ");
        encerrar = escolha(opcao);
    }
}

main();
function escolha(opcao) {
    switch (opcao) {
        case '1':
            cadastraDoadores(doadores)
            break;
        case '2':
           listaDosDoadores(doadores)
            break;
        case '3':
            buscarDoadorDeSangue(doadores)
            break;
            case '4':
                doacaoAntesDaData(doadores)
                break;
        case '5':
            console.log("Encerrando o programa...")
            return true
        default:
            
    }
    return false
}
function cadastraDoadores(){
    nomeDoDoador =  readlineSync.question("Digite seu nome :")
    idadeDoDoador = readlineSync.question("Digite sua idade :")
    pesoDoDoador = readlineSync.question("Digite seu peso :")
    tipoSanguinoDoDoador = readlineSync.question("Digite seu tipo sanguíno :")
    ultimaDoacao = readlineSync.question("Digite sua última doação :")
  doadores.push({nome : nomeDoDoador ,idade : idadeDoDoador , peso : pesoDoDoador ,
     tipoDeSangue : tipoSanguinoDoDoador , ultimaDoacaoDoDoador : ultimaDoacao })
}

function listaDosDoadores(){
    console.log('Esses são os doadores : ');    
    for (let i = 0; i < doadores.length; i++){
        console.log(
        `Nome: ${doadores[i].nome}    Idade : ${doadores[i].idade}   Peso : ${doadores[i].peso}   Tipo de sangue : ${doadores[i].tipoDeSangue}    Última doação : ${doadores[i].ultimaDoacaoDoDoador}`)
    }
}

function buscarDoadorDeSangue(){
 for (let i = 0; i < doadores.length; i++) {
    const tipoSanguineoDesejado = readlineSync.question("Digite o tipo de sangue que você procura : ")
    if (doadores[i].tipoDeSangue.toUpperCase() === tipoSanguineoDesejado.toUpperCase()) {
      console.log(`Nome: ${doadores[i].nome}`)
     console.log(`Idade: ${doadores[i].idade}`)
     console.log(`Peso: ${doadores[i].peso}`)
     console.log(`Tipo do sangue: ${doadores[i].tipoDeSangue}`)
     console.log(`Data da última doação: ${doadores[i].ultimaDoacaoDoDoador}`)
      encontrou = true
    }
 }
}

function doacaoAntesDaData(){
    for (let i = 0; i < doadores.length; i++) {
       const dataDesejada = readlineSync.question("Digite uma  data determinada: ")
       if (doadores[i].ultimaDoacaoDoDoador < dataDesejada ) {
         console.log(`Nome: ${doadores[i].nome}`)
        console.log(`Idade: ${doadores[i].idade}`)
        console.log(`Peso: ${doadores[i].peso}`)
        console.log(`Tipo de sangue : ${doadores[i].tipoDeSangue}`)
        console.log(`Data da última doação: ${doadores[i].ultimaDoacaoDoDoador}`)
         encontrou = true
       }
    }
   }


   