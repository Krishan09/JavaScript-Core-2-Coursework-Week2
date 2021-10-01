function shoppingList(arrayOfPeople) {
  //function shoppingList(arrayOfItems) {
// Write your code here...
let peoplesShoppingList = document.querySelector("#content");
let contentList = document.createElement("ul");
arrayOfPeople.forEach((item) => {
  let listItem = document.createElement("li");
  listItem.innerText = item;
  contentList.appendChild(listItem);
});
peoplesShoppingList.append(contentList);
}


let shopping = ["Milk", "Bread", "Eggs", "A Dinosaur", "Cake", "Sugar", "Tea"];

shoppingList(shopping);
