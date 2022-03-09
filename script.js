var addInput = document.getElementById("todo-input");
var addBtn = document.getElementById("todo-add-btn");
var list = document.getElementById("todos-list");


function createElem() {
    var text = addInput.value;

    if(text === "") {
        return;
    }

    var li = document.createElement("li");

    var checkBox = document.createElement("input");
    checkBox.classList.add("checkbox");
    checkBox.type = "checkbox";

    var paragraph = document.createElement("p");
    paragraph.classList.add("paragraph");
    paragraph.textContent = text;

    var remove = document.createElement("span");
    remove.classList.add("remove");
    remove.innerHTML = "&cross;";

    li.appendChild(checkBox);
    li.appendChild(paragraph);
    li.appendChild(remove);
    list.appendChild(li);

    addInput.value = "";

}


// function editedInput(paragraphElement) {

//     var editInput = document.getElementsByName("editInput")[0];
//     if(editInput) {
//         editInput.remove();
//     }

//     var input = document.createElement("input");
//     input.type = "text";
//     input.name = "editInput";
//     input.value = paragraphElement.textContent;
//     input.classList.add("editInput");

//     paragraphElement.parentElement.appendChild(input)
// }
function toggleComplete(inputElement) {

    let taskName = inputElement.parentElement.childNodes[1];
    if(inputElement.checked) {
        taskName.classList.add("complete")
    } else {
        taskName.classList.remove("complete")
    }
}


function removeTodo(removeElement) {
    removeElement.parentElement.remove();
}
list.addEventListener("click", function(evnt) {

    switch(event.target.tagName) {
        case "P":
            editedInput(event.target);
            break;
        case "SPAN":
            removeTodo(event.target);
            break;
    }
})

list.addEventListener("change", function(event) {
    if(event.target.tagName === "INPUT" && event.target.type ===
    "checkbox") {
        toggleComplete(event.target)
    }
})

addBtn.addEventListener("click", createElem);

addInput.addEventListener("keypress", function(event) {
    if(event.key === "Enter") {
        createElem();
    }
})