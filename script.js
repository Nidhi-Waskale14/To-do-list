const inputBox  = document.getElementById("input-box");
const listcontainer  = document.getElementById("list-container") ;

function addTask(){
    if(inputBox.value ===''){
        alert("You must write something!");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML =inputBox.value;
        listcontainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
        }
        inputBox.value = "";
        saveData();
 }

listcontainer.addEventListener("dblclick", editTask);

  listcontainer.addEventListener("click",function(e){
    if(e.target.tagName ==="LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        saveData();
    }
  }, false);


  function editTask(event) {
    if (event.target.tagName === "LI") {
        let currentText = event.target.textContent.slice(0, -1); // Remove the "×" symbol
        let newText = prompt("Edit your task:", currentText);
        if (newText && newText.trim() !== '') {
            event.target.firstChild.textContent = newText.trim();
            saveData();
        }
    }
}

listcontainer.addEventListener("dblclick", editTask);
 

  function saveData() {
    localStorage.setItem("data",listcontainer.innerHTML);
  }
  function showTask() {
    listcontainer.innerHTML = localStorage.getItem("data"); 
  }
  showTask();
