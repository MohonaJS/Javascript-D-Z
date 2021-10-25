let foods = [
    {
        name: "burger",
        price:20,

    },
    {
        name: "nugget",
        price:25,

    },
    {
        name: "hotdog",
        price:20,

    },
    {
        name: "frenchfri",
        price:21,

    }
]
let table = document.createElement("table");

let total = 0; 
for(let i = 0; i < foods.length; i++){
    let row = document.createElement("tr");
    let perFood = foods[i];
   Object.keys(perFood).forEach(function(index){
       let td = document.createElement("td");
       td.innerHTML = perFood[index]
        if(index == "price"){
            total += perFood[index];
            }
        row.appendChild(td);

   })
   table.appendChild(row);
  
}
let newrow= document.createElement("tr");
let totalTd = document.createElement("td");
totalTd.innerHTML = "Total price";
let priceTd = document.createElement("td");
priceTd.innerHTML = total;
newrow.appendChild(totalTd);
newrow.appendChild(priceTd);
table.appendChild(newrow);

console.log(total);
document.querySelector("body").appendChild(table);

