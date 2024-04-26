const professor = {
    nome :'Vitor',
    idade : 27 ,
    tarefas : ['Dar aula','Responder dúvidas'],
    contarPiada : function(){
        console.log('é pa vê ou pa comê?') 
    }
}
professor.nome = "Mika"
console.log(professor.nome)
// ou usar [""] exemplo : console.log(professor["nome"])