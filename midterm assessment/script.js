console.log("connected");

let a;
let b;
let userInput;
let password;
userInput = prompt("Enter a username or email");
password = prompt("Enter a password");


function login(a, b) {
    
 
   start:
    if (a=='' || b=='' || a!="student@mail.com" || b!="discovery") {
        for (i=3; i>0; i--) {    

            window.alert(`Login Failed! Now only ${i} Login attempts available`);
            a = prompt("Enter a username or email");
            b = prompt("Enter a password");
            if (a == "student@mail.com" && b == "discovery"){
                
                window.alert("Successfully Logged In!"); 
                break start;  
            }
            else continue;
            
         }
           
            window.alert("Login Failed! No more attempts available! Try Again Later!");
         
    }
    
    else if (a== "student@mail.com" && b=="discovery"){
    
        window.alert("Successfully Logged In!");
   } 
 

}

login(userInput, password);