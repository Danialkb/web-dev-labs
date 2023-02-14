function addTask(task) {
    let listElement = document.getElementById('taskList');
    let taskLi = document.createElement('li');
    taskLi.classList.add('task-item');

    let newInput = document.createElement('input');
    newInput.type = 'checkbox';
    newInput.classList.add('clickButton');

    let text = document.createElement('span');
    text.classList.add('taskText');
    text.innerText = task;

    let delBtn = document.createElement('button');
    delBtn.classList.add('delButton');
    // delBtn.innerText = 'delete';

    taskLi.appendChild(newInput);
    taskLi.appendChild(text);
    taskLi.appendChild(delBtn);
    addTextDec(newInput, text);
    listElement.appendChild(taskLi);
}

let add = document.getElementById("addButton");
add.addEventListener('click', function () {
    let input = document.getElementById('task-input')
    addTask(input.value);
    input.value = ""
});


const taskListid = document.querySelector("#taskList");
taskListid.addEventListener("click", function (e) {
    if (e.target.className === "delButton") {
        e.target.parentElement.remove();
    }
});

