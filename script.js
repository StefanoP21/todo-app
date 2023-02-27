import checkComplete from "./components/checkComplete.js";
import deleteIcon from "./components/deleteIcon.js";

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
    const taskContent = document.createElement("div");
    taskContent.appendChild(checkComplete());
    const titleTask = document.createElement("span");
    titleTask.classList.add("task");
    titleTask.innerText = value;
    taskContent.appendChild(titleTask);
    // taskContent.appendChild(deleteIcon());
    // task.innerHTML = content;
    task.appendChild(taskContent);
    task.appendChild(deleteIcon());
    list.appendChild(task);
};


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

- parentElement: Subir un nodo en el árbol
- childElemnt: Bajar un nodo en el árbol
*/

/*
Immediately invoked function expression - IIFE

( () => {

})();
*/
