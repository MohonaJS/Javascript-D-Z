/* let fN = prompt("enter ur fi name");
let lN = prompt("enter ur la name");

let fullName = fN + lN;
document.write(fullName);

document.write("<br>");

document.write(fullName.length);
document.write("<br>");
document.write(fullName.toUpperCase());
 */

 /* let fname= prompt("enter ur f name");
 let lname= prompt("enter ur l name");

 let fullName = fname + lname ;

 document.write(fullName);

 document.write("</br>");
 document.write(fullName.length);
 document.write("</br>");
 document.write(fullName.toUpperCase());
 */
/* 
 let firstName = prompt("enter ur f name");
 let lastName = prompt("enter ur l name");

 let fullName = firstName + lastName ; 

 document.write(fullName);
 document.write("<br>")
 document.write(fullName.length);
 document.write("<br>")
 document.write(fullName.toUpperCase()); */

//  --- class 3 home work ----

 let firstname=document.querySelector("#fname");
 
 let lastname=document.querySelector("#lname");

 let email=document.querySelector("#email");

 let password=document.querySelector("#password");

 let confirmPassword=document.querySelector("#cpassword");

 const form = document.querySelector("form");
 form.addEventListener("submit", save)

 function save(event){
    event.preventDefault();
    let fName = firstname.value;
    let fLame = lastname.value;
    let fullName = fName + " " + fLame;
    let nemail = email.value;
    let nPassword = password.value;
    let cPassword = confirmPassword.value;

    let checkPassword = checkConfirmPassword(nPassword, cPassword);
    if(checkPassword === false){
        return;
    }

 function checkConfirmPassword(pass, c_pass){
        if(!pass.match(c_pass)){
            confirmPassword.parentElement.querySelector(".error").innerHTML = "Confirm password is not match" ; 
             return false;

        }
        return true;
    }
}






 

