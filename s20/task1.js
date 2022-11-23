console.log("connected")

let button = document.querySelector("#button");
let todoWrapper = document.querySelector(".todo-wrapper");
deleteButton = document.querySelector("#delete");

button.addEventListener("click", () => {


let userInput = document.querySelector("#userInput").value;

if (userInput.length > 5){

     let li = document.createElement("li");

     li.className = "todo";

     let node = document.createTextNode(userInput);
     li.appendChild(node);

     todoWrapper.appendChild(li);

     document.querySelector("#userInput").value
}
else
{
    alert("You must enter more than 5 characters");
}
});


//DELETE LIST
document.querySelector(".todo-wrapper").deleteButton.addEventListener("click", (e) => {
    if (e.target.className === "todo") {
      let msg = confirm(
        `Are you sure you want to delete \n ${e.target.innerText}`
      );

      if (msg == true) {
        document.querySelector(".todo-wrapper").removeChild(e.target);
      }
    }
  });

