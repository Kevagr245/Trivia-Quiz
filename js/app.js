//Constantes de los elementos de HTML
const sections = document.querySelectorAll("main section");
const formName = document.getElementById("form-name");
const inputName = document.getElementById("input-name");
const welcomeUser = document.getElementById("welcome-user");
const containerType = document.getElementById("type-question");
const btnReturn = document.getElementById("btn-return");
const btnType = document.getElementById("btn-type");
const btnTryIt = document.getElementById("btn-try-it");
const typeTitle = document.getElementById("type-title");
const scoreTitle = document.getElementById("score-title");
const messageText = document.getElementById("message-text");
const resultText = document.getElementById("result-text");
const question = document.getElementById("question");
const containerAnswers = document.getElementById("btns-answer");
const cardType = document.getElementsByClassName("card-type");
const btnAnswers = document.getElementsByClassName("btn-answer");

//Declaración de variables 
let nameUser = null;
let information = null;
let infoQuestion = null;
let currentQuestion = null;
let countQuestion = 0;
let score = 0;
let type = 0;

/**
 * Evento del formulario del nombre
 */
formName.addEventListener("submit", (e) => {
    e.preventDefault();
    if (inputName.value.length) {
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

btnType.addEventListener("click",() =>{
    loadSecondSection();
})

btnTryIt.addEventListener("click",() =>{
    sections[3].classList.add("hide");
    loadThreeSection(type);
})

/**
 * Método para cargar la segunda sección
 */
function loadSecondSection() {
    nameUser = inputName.value;
    fillType();
    loadEvent();    
    welcomeUser.innerText = `Bienvenido/a ${nameUser}`;
    sections[0].classList.add("hide");
    sections[3].classList.add("hide");
    sections[1].classList.remove("hide");
}

/**
 * Método para cargar la tercera sección 
 * @param {} id es el identificador del tipo de preguntas
 */
function loadThreeSection(id) {
    type = id;
    information = Database.find((element) => element.id === id);
    typeTitle.textContent = information.name;
    score = 0;
    countQuestion = 0;
    infoQuestion = information.bank.slice();
    loadQuestion();
    sections[1].classList.add("hide");
    sections[2].classList.remove("hide");
}

function loadFourSection() {
    sections[2].classList.add("hide");
    sections[3].classList.remove("hide");
    resultText.innerText = `${nameUser}, tu puntaje fue ${score}/${countQuestion}`;
    messageText.innerText = getMessage(score);
}

/**
 * Método para llenar la segunda sección con los tipos de preguntas
 */
function fillType() {
    let container = "";
    Database.forEach((row) => {
        if (row.bank.length > 6)
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
 * Método para cargar las preguntas en la pantalla
 */
function loadQuestion() {
    scoreTitle.textContent = `Puntaje: ${score}`;
    if (countQuestion < 5) {
        currentQuestion = infoQuestion.pop();
        question.textContent = currentQuestion.question;
        fillAnswer(currentQuestion.answers);
        loadEventBtn();
        countQuestion++;
    } else {
        loadFourSection();
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
    if (answer === currentQuestion.answers[currentQuestion.correctAnswer]){
        score++;
    }
    loadQuestion();
}

function getMessage(score) {
    if (score <= 2) 
        return "Fallaste...¡Inténtalo de nuevo!"
    else if (score <= 4)
        return "¡Ohhh! Estuviste cerca..."
    else
        return "¡Felicidades!"
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