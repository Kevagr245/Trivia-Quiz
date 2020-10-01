const formName = document.getElementById("form-name");
const inputName = document.getElementById("input-name");

formName.addEventListener("submit", (ev) => {
    ev.preventDefault;
    if (inputName.value.length) {
        alert("Bienvenido " + inputName.value)
    } else 
        alert ("Nombre incompleto");
})