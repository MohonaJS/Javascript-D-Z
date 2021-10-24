const nameInput = document.querySelector(".inputName");
const buttonT = document.querySelector(".btn");
const list = document.querySelector(".ulList");


const names = [];

buttonT.addEventListener("click", addName);

function addName(a){
    a.preventDefault();
    let name = nameInput.value;
    
}