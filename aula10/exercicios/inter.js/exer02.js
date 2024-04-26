let textoDoUsuario = prompt("Insira um texto");

const outraFuncao = function(texto) {
	return texto.toLowerCase().includes("cenoura")
}

const resposta = outraFuncao(textoDoUsuario)
console.log(resposta)

//a. Explique o que essa função faz e qual é sua utilidade
// Faz que a frase fica em minuscula .
//b. Determine qual será a saída no console para cada uma das 3 entradas do usuário:
   //  i.   `Eu gosto de cenoura` = eu gosto de cenoura.
   //  ii.  `CENOURA é bom pra vista` = cenoura é bom pra vista.
   //  iii. `Cenouras crescem na terra` =  cenouras crescem na terra.