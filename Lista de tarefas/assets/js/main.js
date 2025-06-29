const inputTarefa = document.querySelector(".input-tarefas");
const addTarefa = document.querySelector(".add-tarefa");
const tarefas = document.querySelector(".tarefas")

function criaLi() {
    const li = document.createElement("li");
    return li;
};
function criaTarefa(textoInput) {
    const li = criaLi();
    li.innerHTML = textoInput;
    tarefas.appendChild(li);
    limpaInput()
    criaBotaoApagar(li)
    salvarTarefa();
};
function limpaInput() {
    inputTarefa.value = "";
    inputTarefa.focus();
};
function criaBotaoApagar (li) {
    li.innerHTML += " "
    const botaoapagar = document.createElement("button")
    botaoapagar.innerText = "Apagar";
    // botaoapagar.classList.add("NomeClass");
    botaoapagar.setAttribute("class", "apagar")
    botaoapagar.setAttribute("title", "Apagar essa tarefa")
    li.appendChild(botaoapagar);
};
function salvarTarefa () {
    const liTarefas = tarefas.querySelectorAll("li");
    const listaTarefas = []

    for (let tarefa of liTarefas) {
        let tarefaTexto = tarefa.innerText;
        tarefaTexto = tarefaTexto.replace("Apagar", "");
        listaTarefas.push(tarefaTexto);
    }
    const tarefasJSON = JSON.stringify(listaTarefas);
    localStorage.setItem("tarefas", tarefasJSON);
}

function adicionaTarefasSalvas() {
    const tarefa = localStorage.getItem("tarefas");
    const listaDeTarefas = JSON.parse(tarefa);
    
    for (let textoTarefa of listaDeTarefas) {
        criaTarefa(textoTarefa);
    }
}

inputTarefa.addEventListener("keypress", function (e) {
    if (e.keyCode === 13) {
        if (!inputTarefa.value) return;
        criaTarefa(inputTarefa.value)
    }
});
addTarefa.addEventListener("click", function () {
    if (!inputTarefa.value) return;

    criaTarefa(inputTarefa.value)
});

document.addEventListener("click",function(e) {
    const el = e.target;
    if (el.classList.contains("apagar")) {
        el.parentElement.remove();
        salvarTarefa();
    }
})
adicionaTarefasSalvas();
