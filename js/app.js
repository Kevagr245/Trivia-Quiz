//Constantes de los elementos de HTML
const sections = document.querySelectorAll("main section");
const formName = document.getElementById("form-name");
const inputName = document.getElementById("input-name");
const welcomeUser = document.getElementById("welcome-user");
const containerType = document.getElementById("type-question");
const btnReturn = document.getElementById("btn-return");
const cardType = document.getElementsByClassName("card-type");
const typeTitle = document.getElementById("type-title");
const question = document.getElementById("question");
const btnAnswers = document.getElementById("btns-answer");
//Esto solo sirve para pasar de pregunta
const prueba = document.getElementById("prueba");

//Declaración de variables 
let nameUser = null;
let information = null;

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
    loadEvent(cardType);    
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
 */
function loadThreeSection(id) {
    information = Database.find((element) => element.id === id);
    typeTitle.textContent = information.name;
    loadQuestion();
    sections[1].classList.add("hide");
    sections[2].classList.remove("hide");
}

// Este es un evento del botón de prueba
prueba.addEventListener("click", () => loadQuestion());

function loadQuestion() {
    let infoQuestion = information.bank[getRandomInt(0,15)];
    question.textContent = infoQuestion.question;
    fillAnswer(infoQuestion.answers);
}

/**
 * Método para llenar las respuestas de la preguntas 
 * @param {*} answers 
 */
function fillAnswer(answers) {
    let container = "";
    answers = suffle(answers);
    answers.forEach((answer) => {
        container += `
            <button class="btn bg-blue-dark" type="submit">${answer}</button>            
        `
    })
    btnAnswers.innerHTML = container;
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