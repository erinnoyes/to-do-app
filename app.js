function onReady() {
    const addToDoForm = document.getElementById('addToDoForm');
    const newToDoText = document.getElementById('newToDoText');
    const toDoList = document.getElementById('toDoList');




addToDoForm.addEventListener('submit', event => {
        event.preventDefault();

        // get the text
        let title = newToDoText.value;

        // create a new li
        let newLi = document.createElement('li');

        // create a new input
        let checkbox = document.createElement('input');

        // set the input's type to checkbox
        checkbox.type = "checkbox";

        //create a new input
        const button = document.createElement('button');

        //set button's id to button
        button.id = "button"

        //set button text to "Delete"
        button.textContent = "Delete";

        //add event listener for button
        button.addEventListener('click', event => {
        toDoList.removeChild(newLi);
        });


        // set the title
        newLi.textContent = title;

        // attach the checkbox to the li
        newLi.appendChild(checkbox);

         //attach the button to the checkbox
        newLi.appendChild(button);

        // attach the li to the ul
        toDoList.appendChild(newLi);

        //empty the input
        newToDoText.value = '';


    });



window.onload = function() {
                onReady();
 };
}
