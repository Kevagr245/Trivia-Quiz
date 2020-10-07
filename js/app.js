const sections = document.querySelectorAll("main section");
const formName = document.getElementById("form-name");
const inputName = document.getElementById("input-name");
const welcomeUser = document.getElementById("welcome-user");
const containerType = document.getElementById("type-question");
const btnReturn = document.getElementById("btn-return");
const cardType = document.getElementsByClassName("card-type");
const typeTitle = document.getElementById("type-title");
const question = document.getElementById("question");
const btnAnswers = document.getElementById("btns-answer")

let nameUser = null;
let information = null;

formName.addEventListener("submit", (e) => {
    e.preventDefault();
    if (inputName.value.length) {
        nameUser = inputName.value;
        loadSecondSection();
    } else 
        alert ("Nombre incompleto");
});

btnReturn.addEventListener("click",() =>{
    sections[1].classList.add("hide");
    sections[0].classList.remove("hide");
});

function loadSecondSection() {
    containerType.innerHTML = fillType();
    loadEvent(cardType);    
    welcomeUser.innerText = `Bienvenido ${nameUser}`;
    sections[0].classList.add("hide");
    sections[1].classList.remove("hide");
}

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
    return container;
}

function loadEvent (){
    Array.from(cardType).forEach( type =>{
        type.addEventListener("click", () => {
            loadThreeSection(type.id);
        })
    })    
}

function loadThreeSection(id) {
    information = Database.find((element) => element.id === id);
    typeTitle.textContent = information.name;
    loadQuestion();
    sections[1].classList.add("hide");
    sections[2].classList.remove("hide");
}

function loadQuestion() {
    let infoQuestion = information.bank[getRandomInt(0,15)];
    question.textContent = infoQuestion.question;
    fillAnswer(infoQuestion.answers);
}

function fillAnswer(answers) {
    let container = "";
    answers.forEach((answer) => {
        container += `
            <button class="btn bg-blue-dark" type="submit">${answer}</button>            
        `
    })
    btnAnswers.innerHTML = container;
}
// Retorna un entero aleatorio entre min (incluido) y max (excluido)
// ¡Usando Math.round() te dará una distribución no-uniforme!
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}
