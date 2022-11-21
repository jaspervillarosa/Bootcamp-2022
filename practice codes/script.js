function run(){
    
    let studentArr = []
    do{

        names = prompt("Enter student name")
    
        if (names == "Q" || names == "q"){
            break
        }
        else 
        studentArr.push(names)

        
    }while (names.toUpperCase()!= "Q")

    studentList(studentArr);
    printStudents(studentArr);
    enrollee(studentArr)
    section(studentArr)
    removeStudent(studentArr)
}

run()



function studentList (studentArr){
    
    console.log("hello world")
  
        count = 0
        
        for (i = 0; i < studentArr.length; i++){

            console.log(`${studentArr[i]} is added to the student's list`)
            count++
        }

        console.log(`There are total number of ${count} students in the student's list`) 



}


function printStudents(studentArr){


    studentArr.forEach(names => console.log(names));

}

function enrollee(studentArr){

    for (i=0; i<studentArr.length;i++){

        if (!(studentArr.includes("Joe"))){
            console.log(`Joe is not on the list`)
        }
        
        else if (studentArr[i] == "Joe"){

            console.log(`${studentArr[i]} is an enrollee`)
        }

        else break;
    }
}


function section(studentArr){

    let mapNewStudentArr = studentArr.map(
        function (studentArr){
            return studentArr;
        }
    );
    let sectionName = ["section1", "section2"]
    let newArr = []
    for (i=0; i<mapNewStudentArr.length;i++){
        
        let container =  `${mapNewStudentArr[i]} - ${sectionName[0]}`
        newArr.push(container)
    }
    console.log(newArr);
}


function removeStudent(studentArr){

    studentArr.pop("Joe");
    console.log(`Joe is removed from the student's list`)

    console.log(studentArr)

    
}