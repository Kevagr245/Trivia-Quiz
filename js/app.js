const sections = document.querySelectorAll("main section");
const formName = document.getElementById("form-name");
const inputName = document.getElementById("input-name");
const welcomeUser = document.getElementById("welcome-user");
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
    sections[0].classList.add("hide");
    sections[1].classList.remove("hide");
    welcomeUser.innerText = `Bienvenido ${nameUser}`;
}