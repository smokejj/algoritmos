function exibirMenu(){
    console.log('Menu de opções :')
    console.log('1.Opção 1  :')
    console.log('2.Opção 2  :')
    console.log('3.Opção 3  :')
    console.log('4. Sair  :')
    

}
exibirMenu()
const readline = require('readline-sync')
function processarEscolha(opcao){
switch(opcao){
    case '1':
        console.log('Você escolheu a opção 1.')
        break ;
        case '2' :
            console.log('Você escolheu a opção 2.')
            break ;
            case '3':
                console.log('Você escolheu a opção 3.')
                break ;
                case '4':
                    console.log('esse programa está encerrando...')
                    return true;
                    default :
                    console.log("'opção inválida.Por favor,escolha uma opção válida")

}
return false ;
}
function main(){
    let encerrar = false
    while (!encerrar){
        exibirMenu()
        let opcao = readline.question('Digite o número da opção desejada:')
        encerrar = processarEscolha(opcao)
    }
}
main()
const readline = require('readline-sync')