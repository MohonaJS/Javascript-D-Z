let firstName = document.querySelector(".fname");
let lastName = document.querySelector(".lname");

let yourEmail = document.querySelector(".email");

let pass = document.querySelector(".password");
let passConfirm = document.querySelector(".cpassword");

const form = document.querySelector("form");
form.addEventListener("submit", save);

function save(event){
    event.preventDefault();
    let inputFName = firstName.value;
    let inputlName = lastName.value;

    let fullName = inputFName + " " + inputlName;

    let mail = yourEmail.value;

    let inputPassword = pass.value;
    let inputConfirmPassword = passConfirm.value;

    let check = checkPassword(inputPassword,inputConfirmPassword);

   /*  if(check === false){
        return false;

    }
    return true; */

}

function checkPassword(pass1, cPass){
    if(!pass1.match(cPass)){
       let errorMessage =  passConfirm.parentElement.querySelector(".error")
        errorMessage.innerHTML = "Confirm password did not match";
        return;

    }
    return true;

}