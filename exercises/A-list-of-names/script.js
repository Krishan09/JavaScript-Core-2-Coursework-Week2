function listOfNames(arrayOfPeople) {
  let content = document.querySelector("#content");
}
  //looping through array
  for (let person of arrayOfPeople) {
    content.appendChild(document.createElement("h1")).innerHTML = person.name;
    content.appendChild(document.createElement("h2")).innerHTML=  person.job;
  };


// arrayOfPeople.forEach(person => { //(parameter => {parameter **** });
//     let nameTag = document.createElement("h1"); //be careful for the name of valuable
//     let jobTag = document.createElement("h2"); 
//     content.appendChild(nameTag);
//     nameTag.textContent = person.name; 
//     content.appendChild(jobTag);
//     jobTag.textContent = person.job;
//   });

let people = [
  { name: "Chris", job: "Teacher" },
  { name: "Joanna", job: "Student" },
  { name: "Boris", job: "Prime Minister" },
];
listOfNames(people);