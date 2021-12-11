const nameInput = document.querySelector(".inputName");
const buttonT = document.querySelector(".btn");
const uList = document.querySelector(".ulList");


const names = [];

buttonT.addEventListener("click", addName);

function addName(a){
    a.preventDefault();
    let name = nameInput.value;
    names.push(name);
    show(); 
}

function show(){
    let list = document.createElement("li");
    list.innerHTML = names[names.length-1];
    uList.appendChild(list);

}