console.log("connected")

let registrationForm = document.getElementById("registerUser");

registrationForm.addEventListener("submit", (event) =>{

    event.preventDefault();
    
    let farmerName = document.getElementById('firstName').value;
    let address = document.getElementById('address').value;
    let companyName = document.getElementById('companyName').value;
    let email = document.getElementById('email').value;
    let mobileNo = document.getElementById('mobileNumber').value;
    let password = document.getElementById('password').value;

   


// fetch("http://reqres.in/api/users")
//     .then(res => res.json())
//     .then(data => console.log(data))


    if (password === 4){
        
        fetch("http://localhost:4000/api/users/email-exists", {

            method: "POST",
            headers: {
                "content-Type": "application/json"
            },
            body: JSON.stringify({
                "email": "email"
            })
        })
        .then(res => {

            if (res.ok){
                console.log('SUCCESS')
                res.json()
            }
            else {
                console.log('UNSUCCESSFUL')
            }
           
        })
        .then(data => {
            console.log(data);

            if (data) {
                fetch("http://localhost:4000/api/users/register", {

                method: "POST",
                headers: {
                    "Content-Type":  "application/json"
                },

                body: JSON.stringify({

                    farmerName : farmerName,
                    address: address,
                    companyName: companyName,
                    email: email,
                    mobileNo: mobileNo,
                    password: password
                })
                })

                .then(res => res.json())
                .then( data => {console.log(data)})
            }
        })
    }
})