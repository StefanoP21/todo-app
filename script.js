( () => {

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
    const content = `
        <i class="fas fa-trash-alt trashIcon icon"></i>`
    // task.innerHTML = content;
    task.appendChild(taskContent);
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

const checkComplete = () => {
    const i = document.createElement("i");
    i.classList.add("far", "fa-check-square", "icon");
    i.addEventListener("click", completeTask);
    return i;
}

// Immediately invoked function expression - IIFE
const completeTask = () => {
    console.log(event.target);
    const element = event.target;
    element.classList.toggle("fas");
    element.classList.toggle("completeIcon"); //toggle (add o remove)
    element.classList.toggle("far");
}

})();