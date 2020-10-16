//Constantes de los elementos de HTML
const sections = document.querySelectorAll("main section");
const formName = document.getElementById("form-name");
const inputName = document.getElementById("input-name");
const welcomeUser = document.getElementById("welcome-user");
const containerType = document.getElementById("type-question");
const btnReturn = document.getElementById("btn-return");
const typeTitle = document.getElementById("type-title");
const question = document.getElementById("question");
const containerAnswers = document.getElementById("btns-answer");
const cardType = document.getElementsByClassName("card-type");
const btnAnswers = document.getElementsByClassName("btn-answer");

//Declaración de variables 
let nameUser = null;
let information = null;
let infoQuestion = null;
let countQuestion = 0;
let score = 0;

/**
 * Evento del formulario del nombre
 */
formName.addEventListener("submit", (e) => {
    e.preventDefault();
    if (inputName.value.length) {
        nameUser = inputName.value;
        loadSecondSection();
    } else 
        alert ("Nombre incompleto");
});


/**
 * Evento del botón de retornar
 */
btnReturn.addEventListener("click",() =>{
    sections[1].classList.add("hide");
    sections[0].classList.remove("hide");
});


/**
 * Método para cargar la segunda sección
 */
function loadSecondSection() {
    fillType();
    loadEvent();    
    welcomeUser.innerText = `Bienvenido ${nameUser}`;
    sections[0].classList.add("hide");
    sections[1].classList.remove("hide");
}

/**
 * Método para llenar la segunda sección con los tipos de preguntas
 */
function fillType() {
    let container = "";
    Database.forEach((row) => {
        container += `
            <div class="card card-type" id="${row.id}">
                <div class="card_image"> 
                    <img src="img/type/${row.img}"/> 
                </div>
                <div class="card_title text-white">
                    <p>${row.name}</p>
                </div>
            </div>
        `
    })
    containerType.innerHTML = container;
}

/**
 * Método para cargar evento a los div de los tipo de pregunta
 */
function loadEvent (){
    Array.from(cardType).forEach( type =>{
        type.addEventListener("click", () => {
            loadThreeSection(type.id);
        })
    })       
}

/**
 * Método para cargar la tercera sección 
 * @param {} id es el identificador del tipo de preguntas
 */
function loadThreeSection(id) {
    information = Database.find((element) => element.id === id);
    typeTitle.textContent = information.name;
    loadQuestion();
    sections[1].classList.add("hide");
    sections[2].classList.remove("hide");
}

/**
 * Método para cargar las preguntas en la pantalla
 */
function loadQuestion() {
    if (countQuestion < 5){
        infoQuestion = information.bank[getRandomInt(0,15)];
        question.textContent = infoQuestion.question;
        fillAnswer(infoQuestion.answers);
        loadEventBtn();
        countQuestion++;
    } else {
        alert("Se acabo el juego, tu puntaje fue: " + score);
        countQuestion = 0;
        score = 0;
        sections[2].classList.add("hide");
        sections[1].classList.remove("hide");
        loadSecondSection()
    }
}

/**
 * Método para llenar las respuestas de la preguntas 
 * @param {*} answers son las respuesta que se van a mostrar
 */
function fillAnswer(answers) {
    let container = "";
    var arrayAnswers = answers.slice();
    (suffle(arrayAnswers)).forEach((answer) => {
        container += `
            <button class="btn btn-answer bg-blue-dark" type="submit">${answer}</button>            
        `
    })
    containerAnswers.innerHTML = container;
}

/**
 * Método para cargar el evento de los botones de las respuestas
 */
function  loadEventBtn() {
    Array.from(btnAnswers).forEach((btn) => {
        btn.addEventListener("click",()=>{
            checkAnswer(btn.innerText);
        })
    })
}

/**
 * Método para verificar la respuesta del usuario
 * @param {*} answer es la respuesta del usuario
 */
function checkAnswer(answer) {
    if (answer === infoQuestion.answers[infoQuestion.correctAnswer]){
        score++;
    }
    loadQuestion();
}


/**
 * Método para retorna un entero aleatorio entre min (incluido) y max (excluido)
 * @param {*} min Es el número mímino y es incluido
 * @param {*} max Es el número máximo y es excluido
 */
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

/**
 * Método para cambiar el orden a los elementos de un arreglo
 * @param {} array Es el arreglo a cambiar el orden a sus elemento
 */
function suffle(array) {
    return array.sort(()=>{
        return Math.random() - 0.5
    })
}