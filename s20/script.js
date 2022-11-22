console.log("connected")

login_attempts = 3;

function validate_form(){

    let emailAdd = document.getElementById("email").value;

    let password = document.getElementById("pass").value;

    if (emailAdd == "student@mailcom" && password== "discovery"){

        alert("Suceesffully Logged In");
        document.getElementById("email").value = "";
        document.getElementById("pass").value = "";
    }

    else {

        if (login_attempts == 0){

            alert ("No Login Attempts Available")

        }
        else {

            login_attempts -=1;
            alert("Login Failed. You have only " + login_attempts + "login attempts avalibale")

            if (login_attempts == 0){

                document.getElementById("emailAdd").disabled = true;
                document.getElementById("password").disabled = true;
                document.getElementById("form1").disabled = true;

            }
        }
      
    }

    return false

}