//create function my blue button
function myBlueButton(blueButton){
    let myButton = document.querySelector("#blueBtn");
    myButton.addEventListener("click", function(){
        let jumbotron = document.querySelector(".jumbotron");
        jumbotron.style.backgroundColor = "#588fbd";
        let donateABike =  document.querySelector(".buttons a");
        donateABike.style.backgroundColor = "#ffa500";
        let volunteer = document.querySelector(".buttons a:nth-child(2)");
        volunteer.style.backgroundColor = "black";
        volunteer.style.color = "white";

    })

}
myBlueButton();

function myOrangeButton(orangeButton){
    let myButton = document.querySelector("#orangeBtn");
    myButton.addEventListener("click", function(){
        let jumbotron = document.querySelector(".jumbotron");
        jumbotron.style.backgroundColor = "#f0ad4e";
        let donateABike =  document.querySelector(".buttons a");
        donateABike.style.backgroundColor = "#5751fd";
        let volunteer = document.querySelector(".buttons a:nth-child(2)");
        volunteer.style.backgroundColor = "#31b0d5";
        volunteer.style.color = "white";

    })

}
myOrangeButton();

function myGreenButton(greenButton){
    let myButton = document.querySelector("#greenBtn");
    myButton.addEventListener("click", function(){
        let jumbotron = document.querySelector(".jumbotron");
        jumbotron.style.backgroundColor = "#87ca8a";
        let donateABike =  document.querySelector(".buttons a");
        donateABike.style.backgroundColor = "black";
        let volunteer = document.querySelector(".buttons a:nth-child(2)");
        volunteer.style.backgroundColor = "#8c9c08";

    })

}
myGreenButton();

let mySubmitButton =  document.querySelector("form button");
mySubmitButton.addEventListener("click", function(event){
    event.preventDefault();
    let emailInput = document.getElementById("exampleInputEmail1");
    let nameInput = document.getElementById("example-text-input");
    let textArea = document.getElementById("exampleTextarea");
    let myArray = [];
    myArray.push(emailInput);
    myArray.push(nameInput);
    myArray.push(textArea);
    myArray.forEach(item => {
        if(item.value.length <=0){
            item.style.backgroundColor = "red";
        }
    });
    if(emailInput.value.includes("@") && myArray.every(item => item.style.backgroundColor !== "red")){
        alert("Thank you for filling out the form");
        document.querySelector("form").reset();
    }
}) 
