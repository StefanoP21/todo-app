const btn = document.querySelector("[data-form-btn]");

const createTask = (evento) => {
    evento.preventDefault();
    const input = document.querySelector("[data-form-input]");
    const value = input.value;
    const list = document.querySelector("[data-list]");
    const task = document.createElement("li");
    task.classList.add("card");
    input.value = "";
    //template strings
    //backticks
    const content = `<div>
    <i class="far fa-check-square icon"></i>
    <span class="task">${value}</span>
    </div>
    <i class="fas fa-trash-alt trashIcon icon"></i>`
    task.innerHTML = content;

    list.appendChild(task);

    console.log(content); 
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

/*
NODOS

Existen otros métodos que podemos utilizar para manipular nodos:

- insertBefore(padre, hijo): Coloca un nodo antes del otro
- replaceChild(elemento1, elemento2): Sustituye el nodo del elemento 1 por el   nodo del elemento 2
- removeChild(elemento): Remueve un nodo del árbol
*/

