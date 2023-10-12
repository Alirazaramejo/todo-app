var list = document.getElementById("list");

function addTodo() {
    var todo_item = document.getElementById("todo-item");
    var todo_date = document.getElementById("todo-date");
    var todo_time = document.getElementById("todo-time");
    var todo_year = document.getElementById("todo-year");
    var currentDate = new Date();
    var selectedDate = new Date(todo_date.value + "T" + todo_time.value);

    if (
        !todo_item.value ||
        selectedDate < currentDate ||
        !todo_year.value ||
        isNaN(parseInt(todo_year.value))
    ) {
        alert("Please enter a valid item with a current or future date and a valid year.");
        return;
    }

    // create li tag with text node
    var li = document.createElement('li')
    var liText = document.createTextNode(todo_item.value + " (Date: " + todo_date.value + " Time: " + todo_time.value + " Year: " + todo_year.value + ")");
    li.appendChild(liText)

    // create delete button
    var delBtn = document.createElement("button")
    var delText = document.createTextNode("DELETE")
    delBtn.setAttribute("class", "btn")
    delBtn.setAttribute("onclick", "deleteItem(this)")
    delBtn.appendChild(delText)

    // create edit button
    var editBtn = document.createElement("button");
    var editText = document.createTextNode("EDIT")
    editBtn.appendChild(editText)
    editBtn.setAttribute("onclick", "editItem(this)")

    li.appendChild(delBtn)
    li.appendChild(editBtn)

    list.appendChild(li)

    todo_item.value = "";
    todo_date.value = "";
    todo_time.value = "";
    todo_year.value = "";
}

function deleteItem(e) {
    e.parentNode.remove()
}

function editItem(e) {
    var val = prompt("Enter updated value", e.parentNode.firstChild.nodeValue)
    e.parentNode.firstChild.nodeValue = val;
}

function deleteAll() {
    list.innerHTML = ""
}
