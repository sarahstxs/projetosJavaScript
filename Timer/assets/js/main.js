const relogio = document.querySelector(".relogio");
const iniciar = document.querySelector(".iniciar");
const pausar = document.querySelector(".pausar");
const zerar = document.querySelector(".zerar");
const marcar = document.querySelector(".marcar");
const marcacoes = document.querySelector(".marcacoes");

let timer = null;
let segundos = 0;
let minutos = 0;
let horas = 0;

function cronometro () {
    segundos++
    if (segundos === 60) {
        minutos++;
        segundos = 0;
    }
    if (minutos === 60) {
        horas ++;
        minutos = 0;
    }
    return relogio.innerHTML = `
    ${horas < 10 ? "0" + horas:horas}:${minutos < 10 ? "0" + minutos:minutos}:${segundos < 10 ? "0" + segundos:segundos}`
};


iniciar.addEventListener("click", function (event) {
    relogio.style.color = "black";
    if (timer) {clearInterval(timer)}
    timer = setInterval(cronometro, 1000);
})
pausar.addEventListener("click", function (event) {
    clearInterval(timer);
    if (timer) {
        relogio.style.color = "red";
    }
})
zerar.addEventListener("click", function (event) {
    clearInterval(timer);
    timer = null;
    segundos = 0;
    minutos = 0;
    horas = 0;
    marcacoes.innerHTML = "";
    relogio.style.color = "black";
    relogio.innerHTML = `
    ${horas < 10 ? "0" + horas:horas}:${minutos < 10 ? "0" + minutos:minutos}:${segundos < 10 ? "0" + segundos:segundos}`
})
marcar.addEventListener("click", function (event) {
    if (timer) {
    marcacoes.innerHTML += `<p>${horas < 10 ? "0" + horas:horas}:${minutos < 10 ? "0" + minutos:minutos}:${segundos < 10 ? "0" + segundos:segundos}</p>`
    }
})