console.log("Ta rodando")
function teste() {
    const form = document.querySelector(".form");
    let resultado = document.querySelector(".resultado");

    function recebeIMC (evento) {
        evento.preventDefault();
        console.log("ENviado")

        const inputPeso = form.querySelector(".peso");
        const inputAltura = form.querySelector(".altura");

        const peso = Number(inputPeso.value);
        const altura = Number(inputAltura.value);

        const imc = peso/(altura**2);
        
        
       
        if (peso || altura){
            resultado.innerHTML = `
            <h1>Resultado</h1> 
            <p>Seu IMC é ${imc.toFixed(1)}</p>`;
            if (imc < 18.5) {
                resultado.innerHTML += `Você esta abaixo do peso`;
            } else if (imc >= 18.5 && imc <= 24.9){
                resultado.innerHTML += `Você esta com peso normal`;
            } else if (imc >= 25 && imc < 29.9) {
                resultado.innerHTML += `Você esta com sobrepeso`;
            } else if (imc >= 30 && imc <= 34.9) {
                resultado.innerHTML += `Você esta com obesidade de grau 1`;
            } else if (imc >= 35 && imc <= 39.9) {
                resultado.innerHTML += `Você esta com obesidade de grau 2`;
            } else if (imc >= 40) {
                resultado.innerHTML += `Você esta com obesidade de grau 3`;
            } 
        } else {
            resultado.innerHTML = `<h3>Valores inválidos, tente novamente!!</h3>`;
        }
} 

    form.addEventListener("submit", recebeIMC );
}
teste();