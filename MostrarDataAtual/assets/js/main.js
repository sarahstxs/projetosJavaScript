let diaAtual = new Date();
const diaSemanaNum = diaAtual.getDay();
const mesNum = diaAtual.getMonth();
console.log(mesNum);

function defDiaSemana (diaSemanaNum) {
    const diaSemana = {
        0: "Sábado",
        1: "Segunda-feira",
        2: "Terça-feira",
        3: "Quarta-feira",
        4: "Quinta-feira",
        5: "Sexta-feira",
        6: "Domingo",
    };
    return diaSemana[diaSemanaNum];
};
function defMes (mesNum) {
    switch (mesNum) {
        case 0:
            return "Janeiro";
        case 1:
            return "Fevereiro";
        case 2:
            return "Março";
        case 3:
            return "Abril";
        case 4:
            return "Maio";
        case 5:
            return "Junho";
        case 6:
            return "Julho";
        case 7:
            return "Agosto";
        case 8:
            return "Setembro";
        case 9:
            return "Outubro";
        case 10:
            return "Novembro";
        case 11:
            return "Dezembro"
        default:
            return "Inválido";
    }
}
function chamar (diaSemanaNum, diaAtual, mesNum) {
    defDiaSemana(diaSemanaNum);
    let resultado = document.querySelector("h1");

    resultado.innerHTML = (`${defDiaSemana(diaSemanaNum)}, ${diaAtual.getDate()} de ${defMes(mesNum)} de ${diaAtual.getFullYear()}
    <h3>${diaAtual.getHours()}:${diaAtual.getMinutes()}:${diaAtual.getSeconds()}</h3>`)
}


setInterval(() => {
    diaAtual = new Date();
    chamar(diaSemanaNum, diaAtual, mesNum)}
    , 1000);

