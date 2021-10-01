function todoList(todos) {
  // Write your code here...

  let toDoListName = document.querySelector("#content");
  let ulForToDos = document.createElement("ul");
  toDoListName.appendChild(ulForToDos);

  todos.forEach((element) => {
    let todoListItem = document.createElement("li");
    todoListItem.innerText = element.todo;

    ulForToDos.appendChild(todoListItem);

    todoListItem.addEventListener("click", () => {
      if (todoListItem.style.textDecoration === "line-through") {
        todoListItem.removeAttribute("style");
      } else {
        todoListItem.style.textDecoration = "line-through";
      }
    });
  });
}

/*We want to render a list of todos on the page.
 *When we click on an item we want a line-through style to be added to it to show that the todo has been completed.
 *If we decide we haven't actually finished the todo yet, then we should be able to click it again to remove the line-through styling.*/



const todos = [
  { todo: "wash the dishes" },
  { todo: "walk the dog" },
  { todo: "learn javascript" },
  { todo: "go shopping" },
];

todoList(todos);