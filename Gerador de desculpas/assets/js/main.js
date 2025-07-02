const desculpa = document.querySelector(".desculpa");
const gerar = document.querySelector(".gerar");

let desculpas = [
    "Bom dia, pessoal. Hoje infelizmente não poderei comparecer às aulas, não estou me sentindo bem e optei por repousar.",
    "Oi, gente. Estou com sintomas leves de gripe e preferi não ir para evitar passar pra ninguém. Já estou cuidando.",
    "Pessoal, estarei ausente hoje pois tenho consulta médica agendada nesse horário. Retorno normalmente amanhã.",
    "Bom dia! Tive um imprevisto familiar e preciso resolver algumas questões urgentes. Agradeço a compreensão.",
    "Oi, turma. Precisei resolver pendências pessoais hoje cedo, por isso não estarei presente nas aulas.",
    "Pessoal, hoje vou me ausentar por motivos pessoais. Estou bem, mas preciso desse tempo.",
    "Hoje vou precisar me ausentar por questões pessoais que demandam minha atenção. Agradeço a compreensão",
    "Oi, turma. Precisei tirar o dia para cuidar de mim mesma. Amanhã estarei de volta normalmente"
]

gerar.addEventListener("click", function () {
    desculpa.innerHTML = `"${desculpas[Math.floor(Math.random() * desculpas.length)]}"`
})
// Adicionar a possibilidade de vc add. as suas desculpas (:
