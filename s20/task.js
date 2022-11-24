console.log("connected");

addButton = document.querySelector("#button");
deleteButton = document.querySelector("#delete");

todoWrapper_edit = document.querySelector(".containerDiv");




addButton.addEventListener("click", () => {

    let userInput = document.querySelector("#userInput").value;
    console.log(userInput)

    if (userInput != ""){

        
        // containers 
            
        let labelName = document.createElement("label");
        labelName.for = "accept"
        labelName.className = "todo";

        let checkBox = document.createElement("input")
        checkBox.id = "accept"
        checkBox.value = "yes"
        checkBox.type = "checkbox"
        checkBox.for = "checkColor"
        checkBox.style = "margin-inline: 1rem "

     
        let container = document.createElement("div")
        container.className = "form-check"
        container.id = "form-checked"
                
        let nodeContainer = document.createTextNode(userInput)


        labelName.appendChild(nodeContainer);

        container.appendChild(checkBox);
        container.appendChild(labelName);

        todoWrapper_edit.appendChild(container);

        console.log(`this is labelName ${labelName}`)

        document.querySelector("#userInput").value = "";

    }

    else {

        alert("You did not enter Daily Task!")
    }


});

deleteButton.addEventListener("click", ()=> {
        
        let cbCount = document.querySelectorAll('input[type="checkbox"]')
        let div = document.getElementById("formChecked")
        let msg = confirm(`Are you sure you want to delete?`)
            for (let item of cbCount){

                
                    
                    if (item.checked){

                        if (msg == true){
                            item.parentElement.remove(div)
                            console.log("deleted successfully")
                        }
                        else break;
                       
                    }
                    else
                        console.log("nothingmore ..")
                  
                }

});