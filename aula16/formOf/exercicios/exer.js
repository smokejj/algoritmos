let frase = ["Bom dia " , "princesa"]
function fraseCompleta(frase){
    let mensagem = ""
for (let palavra of frase ){
 mensagem += palavra + " "
}
console.log(mensagem)
}
fraseCompleta(frase)