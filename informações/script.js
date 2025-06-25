function meuEscopo(){
    const form = document.querySelector(".form");
    const resultado = document.querySelector(".resultado")
    const pessoas = [];
    let cont = 1;

    // Uma maneira de fazer isso:
    // form.onsubmit = function(evento){
    //     evento.preventDefault();
    //     console.log("Deu certo!!!");
    // };

    function recebeEventoForm (evento) {
        evento.preventDefault();

        const nome = form.querySelector(".nome");
        const sobrenome = form.querySelector(".sobrenome");
        const peso = form.querySelector(".peso");
        const altura = form.querySelector(".altura");

        pessoas.push({
            nome: nome.value,
            sobrenome: sobrenome.value,
            peso: peso.value,
            altura: altura.value
        });

        resultado.innerHTML += `
        <h3>Pessoa ${cont}</h3>
        <p>Nome: ${nome.value}</p>
        <p>Sobrenome: ${sobrenome.value}</p>
        <p>Peso: ${peso.value}</p>
        <p>Altura: ${altura.value}</p>
        `

        console.log(pessoas)
        cont++;
    }
    form.addEventListener("submit", recebeEventoForm )
}
meuEscopo();