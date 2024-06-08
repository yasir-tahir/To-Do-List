var listContainer = document.getElementById('list-container');
var inputBox = document.getElementById('input-box');

function addTask() {
    if(inputBox.value === '') {
        alert('Enter Your Task!')
    }

    else{
        var task = document.createElement('li')
        task.textContent = inputBox.value
        listContainer.appendChild(task)

        var span = document.createElement('span');
        span.textContent = '\u00d7';
        task.appendChild(span)
    }
    inputBox.value = '' 
    saveData()
}

listContainer.addEventListener('click', (event)=>{
    if(event.target.tagName == 'LI'){
        event.target.classList.toggle('checked')
        saveData()
    }

    else if(event.target.tagName == 'SPAN'){
        event.target.parentElement.remove()
        saveData()
    }
})

function saveData(){
    localStorage.setItem("tasks", listContainer.innerHTML)
}

function showData(){
    listContainer.innerHTML = localStorage.getItem('tasks')
}

showData()
