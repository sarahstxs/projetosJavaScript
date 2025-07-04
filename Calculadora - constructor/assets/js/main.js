function Calculadora() {
        // Atributos
        this.display = document.querySelector(".display"),

        //Métodos
        this.inicia = () => {
            this.cliqueBotoes();
            this.pressionaEnter();
        };

        this.clearDisplay = () => {
            this.display.value = "";
        };

        this.apagaUm = () => {
            this.display.value = this.display.value.slice(0, -1);
        };

        this.pressionaEnter = () => {
            this.display.addEventListener("keyup", e => {
                if (e.keyCode === 13) {
                    this.realizaConta();
                }
            })
        };
        
        this.realizaConta = () => {
            //eval() -> Avalia oque ta na string e tenta executar como código JS
            let conta = this.display.value;

            try {
                conta = eval(conta);

                if(!conta) {
                    alert("conta inválida");
                    return;
                }
                this.display.value = String(conta);
            }
            catch(err) {
                alert("Conta inválida");
            }
        };

        this.cliqueBotoes = () => {
            document.addEventListener("click", e =>{
                const el = e.target;

                if(el.classList.contains("btn-num")) {
                    this.btnParaDisplay(el.innerText);
                }
                if (el.classList.contains("btn-clear")){
                    this.clearDisplay();
                }
                if (el.classList.contains("btn-del")){
                    this.apagaUm();
                }
                if (el.classList.contains("btn-eq")) {
                    this.realizaConta();
                }
            }/*.bind(this) -> Se n for arrow function*/)
        };

        this.btnParaDisplay = valor => {
            this.display.value += valor;
        }
    };

const calculadora = new Calculadora();
calculadora.inicia();