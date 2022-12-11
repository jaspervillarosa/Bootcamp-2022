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

function getChecked(others){

    let checkboxes = document.querySelectorAll("input[name='checkbox']")

    let arrValues = [];

    for (i = 0; i< checkboxes.length ; i++ ){

        if (checkboxes[i].checked == true){

            arrValues.push(checkboxes[i].value);
        }
    }

    alert(`${arrValues} has been added to to the list`)


}


class Queue {

    constructor (){

        this.items = [];
    }

    enqueue (element){

        return this.items.push(element);
    }

    dequeue(){

        if (this.items.length > 0){

            return this.items.shift();
        }
    }

    peek(){

        return this.items[this.items.length-1];
    }

    isEmpty(){

        return this.items.length == 0;
    }

    size(){
        return this.items.length;
    }

    clear(){
        return this.items = [];
    }
}

let queue = new Queue();

queue.enqueue(1);
queue.enqueue(2);

queue.enqueue(3);
queue.enqueue(4);
console.log(queue.items);

queue.dequeue();
console.log(queue.items);



console.log(queue.peek());


// Data structure 

// class linkedList {

//     constructor(){

//         this.head == null;
//         this.size = 0;
//     }

//     // add an element at the end of the list 

//     add (element){

//         let node = new Node(element)

//         let current;

//         // if the list is empty add the elemenet and make it as a head 
//         if (this.head == null){
//             this.head = node;
//         }
//         else {

//             current = this.head;

//             while (current.next){

//                 current = current.next
//             }

//             current.next =node;
//         }

//         this.size++;
//     }
// }

//  let linked_LIST = new linkedList()

//  insertAt (element, index){

    
//  if (index < 0 || index >= this.size){

//     console.log("Enter ")
//  }
//  else {
//      let node = new Node (element);

//      let curr,prev;

//      if (index == 0){

//         node.next = this.head;
//         this.head = node;
//      }

//      else {

//         curr = this.head;
//         let it = 0;

//         while (it < index){

//             it ++;
//             prev = curr;
//             curr = curr.next;
//         }

//         node.next = curr;
//         prev.next = node;
//      }

//      this.size++;
//  }

//  }

//  insertAt(element, index)


let countdown = function countDown(fromNum){

    fromNum -= 1

    if (fromNum > 0){

        console.log(countDown(fromNum));
    }

    else 

    alert("Happy New Year")
}

let newYearCountdown = countdown(5);