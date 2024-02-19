const text = document.getElementById("text");
const btn = document.querySelector("button");
const list = document.getElementById("list");


let addTask = () => {

    if (text.value != "") {
        let newTask = document.createElement("li");
        newTask.innerHTML = text.value;

        let span = document.createElement("span");
        span.innerHTML = "\u00d7"

        newTask.appendChild(span);
        list.appendChild(newTask);


        console.log(newTask)
    }
    else alert("Enter Task !!");

    text.value = "";
}

btn.addEventListener('click', (e) => {
    e.preventDefault();
    addTask();
    saveData();

})


list.addEventListener('click', (e) => {


    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
    }
    else if (e.target.tagName === "SPAN") {
        const parent = e.target.parentNode;
        parent.remove();
    }
    saveData();


})

function saveData() {
    localStorage.setItem("data", list.innerHTML);
}

function showTask() {
    list.innerHTML = localStorage.getItem("data");
}

showTask();