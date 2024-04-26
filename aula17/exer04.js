
    const pessoa ={
        nome :"Klauber",
        idade : 97,
        generoMC : "Boombap",
    
    }
    function exer02(pessoa){
    const copia ={
        ...pessoa,
        comidaFavoritas : ['maça','tomate','banana','cacetinho'],
        informacoes :{
         melhorAmigo:   'Tereza',
         idade: 79,
        }
}
console.log(`O nome da pessoa é ${pessoa.nome} e sua comidas favoritas são ${copia.comidaFavoritas}.E seu melhor amigo se chama ${copia.informacoes.melhorAmigo} e ele tem ${copia.informacoes.idade} anos. `)

    }
    exer02(pessoa)    


