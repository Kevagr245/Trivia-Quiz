const formName = document.getElementById("form-name");
const inputName = document.getElementById("input-name");
let nameUser = null;


formName.addEventListener("submit", (ev) => {
    ev.preventDefault;
    if (inputName.value.length) {
        alert("Bienvenido " + inputName.value)
        nameUser = inputName.value;
    } else 
        alert ("Nombre incompleto");
})