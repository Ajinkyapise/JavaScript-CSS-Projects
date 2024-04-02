const inputbox = document.getElementById("input-box");
const listcontainer = document.getElementById("list-container");

function addtask() {
    if (inputbox.value === "") {
        alert("Please enter a task");
    } else {
        let li = document.createElement('li');
        li.textContent = inputbox.value;
        listcontainer.appendChild(li);
        
        let span = document.createElement('span');
        span.textContent = "\u00D7";
        li.appendChild(span);
    }
    inputbox.value = "";
    saveData();
}

listcontainer.addEventListener('click', function(e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        saveData();
    } else if (e.target.tagName === "SPAN") {
        e.target.parentNode.remove();
        saveData();
    }
}, false);

function saveData(){
    localStorage.setItem("data",listcontainer.innerHTML)
}

function showTask(){
    listcontainer.innerHTML=localStorage.getItem("data");
}
showTask();