const checkComplete = () => {
    const i = document.createElement("i");
    i.classList.add("far", "fa-check-square", "icon");
    i.addEventListener("click", completeTask);
    return i;
};

const completeTask = () => {
    console.log(event.target);
    const element = event.target;
    element.classList.toggle("fas");
    element.classList.toggle("completeIcon"); //toggle (add o remove)
    element.classList.toggle("far");
};

export default checkComplete
