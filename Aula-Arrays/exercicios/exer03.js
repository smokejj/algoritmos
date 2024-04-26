function personagens() {
    const pers = ['Naruto', 'Goku', 'Asta', 'Luffy', 'Meliodas'];
    const personagemAleatorio = Math.floor(Math.random() * pers.length);
    const personagemEscolhido= pers[personagemAleatorio];
    return personagemEscolhido;
}

console.log(personagens());