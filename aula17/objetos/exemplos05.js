//spret
const usuario = {
    nome : 'Prof',
    idade : 25,
    email : 'prof@senacrs.com.br',
    ciade : 'São Paulo'

}
const novoUsuario = {
    ...usuario,
    nome :'João',
    idade : 28
}
console.log(novoUsuario)