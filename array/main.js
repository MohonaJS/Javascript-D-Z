const bills = [125,555,44];
/* for(let i =0; i < bills.length; i++){
    let result = bills[i];
      } */

/* const bill = 125; */

function calcTip(bill) {   
   if(bill >=50 && bill <=300) {
     const tip =  bill * 0.15
     return tip;   
   }
   else{
     const tip = bill * .20
     return tip; 
   }
}
const tips = [calcTip(bills[0]),calcTip(bills[1]),calcTip(bills[2])];

const totals = [tips[0] + bills[0], tips[1] + bills[1],tips[2] + bills[2] ]

console.log(totals); 
