let reg = JSON.parse(localStorage.getItem('registrationData'));
console.log(reg);

let email = document.getElementById("email");
let pswd = document.getElementById("password");
let btn=document.getElementById("btn");

btn.addEventListener('click' , (e)=>{
    e.preventDefault();
    let repeated = reg.find(ele => ele.email == email.value);
    if(repeated){
        if(pswd.value == repeated.pswd){
            alert("Login Successful!!!");
            location.href='../homepage/homepage.html';
        }
        else{
            alert("Password is incorrect!!!");
        }
    }
    else{
        alert("User not found! Register.");
        location.href='../register/register.html';
    }
})