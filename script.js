const btn = document.querySelector("[data-form-btn]");

const createTask = (evento) => {
    evento.preventDefault();
    const input = document.querySelector("[data-form-input]");
    console.log(input.value); //captura el valor del input
};

console.log(btn);

//listener (escuchador de eventos)
/*
btn.addEventListener("click", function (evento) {
    evento.preventDefault();
    const input = document.querySelector("[data-form-input]");
    console.log(input.value); //captura el valor del input
});
*/

//Arrow functions o funciones anónimas
/*
btn.addEventListener("click", (evento) => {
    evento.preventDefault();
    const input = document.querySelector("[data-form-input]");
    console.log(input.value); //captura el valor del input
});
*/

btn.addEventListener("click", createTask);
