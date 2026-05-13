const textFormat = document.getElementById('text-format');
const addBtn = document.getElementById('btn');
const ul = document.getElementById('item');
let taskList = JSON.parse(localStorage.getItem("tasks")) ||[];

let renderTask = (index) => {    
    ul.innerHTML="";
    for (let i =0;i<taskList.length;i++) {
        const li = document.createElement('li');
        li.style.listStyle="square";
        li.innerText = (i+1) + "."+ taskList[i];
        ul.appendChild(li);
    }
    localStorage.setItem("tasks",JSON.stringify(taskList));
    const value = localStorage.getItem("tasks")
    console.log(value);
}
renderTask();
let addTask = () => {
    const text = textFormat.value.trim();
    if (text !== "") {
        console.log(text);
        taskList.push(text);
        textFormat.value = "";
        renderTask();
    }
}
addTask();

addBtn.addEventListener('click', addTask);

renderTask();