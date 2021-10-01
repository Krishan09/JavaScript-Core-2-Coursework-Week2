let todos = [
  { task: "Wash the dishes", completed: false },
  { task: "Do the shopping", completed: false },
];

function populateTodoList(todos) {
  let list = document.getElementById("todo-list");
  list.innerHTML = "";
  // Write your code to create todo list elements with completed and delete buttons here, all todos should display inside the "todo-list" element.
  todos.forEach((todo) => {
    const listItem = document.createElement("li");
    listItem.className =
      "list-group-item d-flex justify-content-between align-items-center";
    listItem.innerText = `${todo.task}`;

    const toDoBtns = document.createElement("span");
    toDoBtns.className = "badge bg-primary rounded-pill";

    const checkBtn = document.createElement("i");
    checkBtn.setAttribute("aria-hidden", "true");
    checkBtn.className = "fa fa-check";

    const deleteBtn = document.createElement("i");
    deleteBtn.setAttribute("aria-hidden", "true");
    deleteBtn.className = "fa fa-trash";

    toDoBtns.appendChild(checkBtn);
    toDoBtns.appendChild(deleteBtn);
    listItem.appendChild(toDoBtns);
    list.appendChild(listItem);

    if (todo.completed) {
      listItem.style.textDecoration = "line-through";
      console.log(listItem);
    }
  });
  let checkBtns = document.querySelectorAll(".fa-check");
  checkBtns.forEach((checkBtnEl, index) => {
    checkBtnEl.addEventListener("click", () => {
      if (todos[index].completed === true) {
        todos[index].completed = false;
      } else {
        todos[index].completed = true;
      }
      populateTodoList(todos);
    });
  });

  let deleteBtns = document.querySelectorAll(".fa-trash");
  deleteBtns.forEach((deleteBtnEl, deleteBtnIndex) => {
    console.log("deleteBtnIndex", deleteBtnIndex);
    deleteBtnEl.addEventListener("click", () => {
      todos.splice(deleteBtnIndex, 1);
      populateTodoList(todos);
    });
  });
}

// These are the same todos that currently display in the HTML
// You will want to remove the ones in the current HTML after you have created them using JavaScript
// let todos = [
//   { task: "Wash the dishes", completed: false },
//   { task: "Do the shopping", completed: false },
// ];

populateTodoList(todos);

// This function will take the value of the input field and add it as a new todo to the bottom of the todo list. These new todos will need the completed and delete buttons adding like normal.
function addNewTodo(event) {
  let textInput = document.getElementById("todoInput");
  let textInputValue = textInput.value;
  let newToDo = {
    task: textInputValue,
    completed: false,
  };
  todos.push(newToDo);
  populateTodoList(todos);
  
  // The code below prevents the page from refreshing when we click the 'Add Todo' button.
  event.preventDefault();
  // Write your code here... and remember to reset the input field to be blank after creating a todo!
}

// Advanced challenge: Write a fucntion that checks the todos in the todo list and deletes the completed ones (we can check which ones are completed by seeing if they have the line-through styling applied or not).
//function deleteAllCompletedTodos() {
  // Write your code here...
