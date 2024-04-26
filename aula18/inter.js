const filme = {
	nome: "Auto da Compadecida", 
	ano: 2000, 
	elenco: [
		"Matheus Nachtergaele", "Selton Mello", "Denise Fraga", 
		"Virginia Cavendish"
		], 
	transmissoesHoje: [
		{canal: "Telecine", horario: "21h"}, 
		{canal: "Canal Brasil", horario: "19h"}, 
		{canal: "Globo", horario: "14h"}
		]
}

console.log(filme.elenco[0])
console.log(filme.elenco[filme.elenco.length - 1])
console.log(filme.transmissoesHoje[2])
//O que vai ser impresso no console?
/*irá retornar como elenco: Matheus Naschtergaele e Denise Fraga  e vai apareces o horário que vai passar o filme (|Globo as 14h */
//Errado : Denise Fraga (X) : Virginia Cavendish(V)


