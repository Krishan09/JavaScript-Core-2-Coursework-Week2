function listOfColours(colours) {
  // Write your code here...

/*We want to render a dropdown list of colours on the page. When a colour is selected, the selection will appear on screen e.g. 'You have selected: blue'. The text informing the user of their selection will also change colour to match the selected colour e.g. 'You have selected: blue' will display all in blue. 'You have selected: green' will be green etc.
Exercise
Create a <select> element.
Create a <p> element.
Iterate through the array of colours.
Each element in the array should add a <option> to the <select>, where the <option> is the element in the array.
Each <option> should have a 'click' event listener to update the contents and colour of the <p> with the selected colour.
All of your HTML should go inside the <div> with the id "content".*/

  let divContent = document.querySelector("#content");
  let selectedDropDownMenu = document.createElement("select");
  let pElement = document.createElement("p");
  pElement.innerText = `You have selected:`;

  divContent.appendChild(selectedDropDownMenu); //adding the select element to the content div
  divContent.appendChild(pElement); //adding paragraph

  //iterating through the array elements
  colours.forEach((colorName) => {
    let optionName = document.createElement("option");
    optionName.innerText = colorName;
    selectedDropDownMenu.appendChild(optionName);
  });

  //adding an eventListener to the dropdown menu
  selectedDropDownMenu.addEventListener("change", (e) => {
    pElement.style.color = e.target.value;
    pElement.innerText = `You have selected: ${e.target.value}`;
  });
}

const colours = ["red", "blue", "green", "yellow", "pink", "brown"];

listOfColours(colours);

