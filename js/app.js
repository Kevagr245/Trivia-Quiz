const sections = document.querySelectorAll("main section");
const formName = document.getElementById("form-name");
const inputName = document.getElementById("input-name");
const welcomeUser = document.getElementById("welcome-user");
const containerType = document.getElementById("type-question");
const btnReturn = document.getElementById("btn-return");


let nameUser = null;

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
    let container = "";
    typeQuestion.forEach((row) => {
        container += `
            <div class="card" id="${row.id}">
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
    welcomeUser.innerText = `Bienvenido ${nameUser}`;
    sections[0].classList.add("hide");
    sections[1].classList.remove("hide");
}

