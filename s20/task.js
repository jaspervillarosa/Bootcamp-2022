console.log("connected");

addButton = document.querySelector("#button");
deleteButton = document.querySelector("#delete");

todoWrapper_edit = document.querySelector(".todo-wrapper");



addButton.addEventListener("click", () => {

    let userInput = document.querySelector("#userInput").value;
    console.log(userInput)

    if (userInput != " "){

        
        // containers 
            
        let li = document.createElement("label");
        li.for = "accept"
        li.className = "todo";

        let checkBox = document.createElement("input")
        checkBox.id = "accept"
        checkBox.value = "yes"
        checkBox.type = "checkbox"


        let container = document.createElement("div")
        // container = container.split("")
        // container = container.join(" ")
        container.className = "form-check"
                
        let nodeContainer = document.createTextNode(userInput)


        li.appendChild(nodeContainer);

        container.appendChild(checkBox);
        container.appendChild(li);

        todoWrapper_edit.appendChild(container);

        console.log(`this is li ${li}`)

    }

    else {

        alert("You did not enter Daily Task!")
    }


});

deleteButton.addEventListener("click", ()=> {
        
        console.log(`this is ${li}`)
        let cb = document.querySelector("#accept")
        console.log(cb.checked)

        if (cb.checked == true){
            

            let msg =  confirm (

                `Are you sure you want to delete?`
            );

            if (msg == true){

                // let element = document.getElementById(".todo-wrapper")
                // console.log(element)
                
                // while (element.firstChild){
                    li.parentElement.remove(li)
                }
                
            }
        

        else {

            alert ("failed")
        }
});