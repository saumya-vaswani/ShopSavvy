
let fname = document.getElementById("fname");
let email = document.getElementById("email");
let pswd = document.getElementById("password");
let cpswd = document.getElementById("cpassword");
let btn = document.getElementById("btns");


let registrationData = [];
let jsondata = localStorage.getItem('registrationData');
if (jsondata) {registrationData = JSON.parse(jsondata);}
btn.addEventListener('click', (e) => {
    e.preventDefault();
   {
        
        if (fname.value == '' || email.value == '' || pswd.value == '' || cpswd.value == '') {
            alert("Please fill all the fields.");
        }
        else {
            let repeated = registrationData.find(ele => ele.email == email.value)
            if (repeated) {
                alert("Email already exists.Kindly Login");
                location.href = '../login/index.html';
            }
            else {
                if (pswd.value !== cpswd.value) {
                    alert("Password and Confirm Password does not match");
                }
                else {
                    registrationData.push({ fname: fname.value, email: email.value, pswd: pswd.value});
                    localStorage.setItem('registrationData', JSON.stringify(registrationData));
                    alert("registration successful");
                    location.href = '../login/index.html';
                }
            }
        }
    }

})

