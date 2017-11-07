function onReady() {
    let toDos = [];
    const addToDoForm = document.getElementById('addToDoForm');


    function createNewToDo() {
        const newToDoText = document.getElementById('newToDoText');
        if (!newToDoText.value) {
            return;
        }
        toDos.push({
            title: newToDoText.value,
            complete: false
        });
        newToDoText.value = '';
        renderTheUI(toDos);
    }

    function removeToDo(title) {
    toDos = toDos.filter(toDo => toDo.title !== title);
    renderTheUI(toDos);
    };

    addToDoForm.addEventListener('submit', event => {
        event.preventDefault();
        createNewToDo();
    });

    renderTheUI(toDos);







function renderTheUI(toDos) {
    const todoList = document.getElementById('toDoList');

    toDoList.textContent = '';


    toDos.forEach(function(toDo) {
        const newLi = document.createElement('li');
        const checkbox = document.createElement('input');
        checkbox.type = "checkbox";
        let button = document.createElement('button');
        button.id = 'button';
        button.textContent = "Delete";

        newLi.textContent = toDo.title;

        todoList.appendChild(newLi);
        newLi.appendChild(checkbox);
        newLi.appendChild(button);




        button.addEventListener('click', event => {
        removeToDo(toDo.title);

      });

    });

}


}


window.onload = function() {
    onReady();
};
