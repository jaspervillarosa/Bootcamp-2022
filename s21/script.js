console.log("connected");

function getChecked(others){

    let checkboxes = document.querySelectorAll("input[type='checkbox']")

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

class linkedList {

    constructor(){

        this.head == null;
        this.size = 0;
    }

    // add an element at the end of the list 

    add (element){

        let node = new Node(element)

        let current;

        // if the list is empty add the elemenet and make it as a head 
        if (this.head == null){
            this.head = node;
        }
        else {

            current = this.head;

            while (current.next){

                current = current.next
            }

            current.next =node;
        }

        this.size++;
    }
}

 let linked_LIST = new linkedList()