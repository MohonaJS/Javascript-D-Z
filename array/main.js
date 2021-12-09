const bills = [125,555,44];
/* for(let i =0; i < bills.length; i++){
    let result = bills[i];
      } */

/* const bill = 125; */

/* function calcTip(bill) {   
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

console.log(totals);  */

/* const jonas = {
    name:"aveen",
    birthyear:2020,
    height: true,
    skills: ['bangla', 'english','swedish'],
    find: function(){
        this.age = 2021-this.birthyear;
        return this.age;
    },
    summary: function(){
   const res =  `her name is ${this.name} and her skills are ${this.skills} and age is ${this.find()}`
   return res;
    }
}
console.log(jonas.summary()); */

const personOne = {
    fullName:'mark miller',
    mass:78,
    height:1.69,
    calcBMI: function(){
       const bmi =  this.mass/this.height;
        return bmi;
    }
}
const firstbmi= personOne.calcBMI();

const personTwo = {
    fullName:'john',
    mass:92,
    height:1.95,
    calcBMI: function(){
       const bmi = this.mass/this.height;
       return bmi;
    }
}
const secondbmi= personTwo.calcBMI();

if(firstbmi > secondbmi){
   console.log(`${personOne.fullName} has higher bmi than ${personTwo.fullName}`)
}else {
    console.log(`${personOne.fullName} has not higher bmi than ${personTwo.fullName}`)
}



