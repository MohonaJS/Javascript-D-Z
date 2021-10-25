let fiName = document.querySelector(".fname");
let laName = document.querySelector(".lname");

let mail = document.querySelector(".email");

let pass = document.querySelector(".password");
let cpass = document.querySelector(".cpassword");

const form = document.querySelector("form");
form.addEventListener("submit", save);

function save(event){
    event.preventDefault();
    
    let giveAValueFName = fiName.value;
    let giveAValueLName = laName.value;
    let fullName = giveAValueFName + " " + giveAValueLName;
     let inputEmail = mail.value;
     let inputPass = pass.value;
     let inputCpass = cpass.value;

     let checkPass = checkConfirmPass(inputPass, inputCpass);

     if(checkPass === false){
         return;

     }

}
function checkConfirmPass(pass, c_pass){
    if(!pass.match(c_pass)){
        cpass.parentElement.querySelector(".error").innerHTML = "Confirm password did not match";
        return false;

    }
    return true;

}