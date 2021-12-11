let inputNam = document.querySelector(".inputName");
let btn = document.querySelector(".saveBtn");
let uList= document.querySelector("#ulList");

let names = [];

btn.addEventListener("click", save); 

function save(a){
    a.preventDefault();
    let name = inputNam.value;
    names.push(name);
    display();
}

function display(){
    let child = document.createElement("li");
    child.innerHTML = names[names.length -1];
    uList.appendChild(child);
}