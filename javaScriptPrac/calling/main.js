const cutFruit = function(fruit){
    return fruit * 4;
}
console.log(cutFruit(3));


const fruitProcessor = function (apples, orange) {
    const onlyfruit = cutFruit(apples);
    const otherfruit = cutFruit(orange);
    const juice = `Juice with ${onlyfruit} apples and ${otherfruit} oranges.`;
    return juice;
}
console.log(fruitProcessor(2,3));


const calcAge = function (age) {
    return 2037 - age;
}

const yearUntilRetirement = function (birthYear, name){

    const showYear = calcAge(birthYear);
    // const age = 2037 - birthYear;
    // const retirement = 65 - showYear;

    return `${name} retires in ${showYear} years`

}
console.log(yearUntilRetirement(1998, "mohona"));


/* 
const FruitP = function (mango, banana) {
    const fruit = `Jiuce with ${mango}  Mango and ${banana} banana.`;
    return fruit;

}
console.log(FruitP(5,6));
 */


 const year = function (old){
     return 2025 - old; 
 }

 const showY = function (name, birthday) {

    const retire = year(birthday);

    return `${name} will be retired on ${retire} years`;
 }

 console.log(showY("aveen", 2019));

 

 const calcAverage = function (input1, input2, input3) {
     const sum = (input1 + input2 +input3) / 3 ;
     return sum;

 }

    const teamOne = calcAverage(44,23,71);
     const teamtwo = calcAverage(65,54,49);
 const compare = function (num1,num2) {
     
     if(num1 > num2){
         console.log(`Team one ${teamOne} is the winner`);

     }else{
        console.log(`Team two ${teamtwo} is the winner`);
     }
 }
 compare(teamOne, teamtwo);


const winn = function (n1,n2,n3) {
    const sum = (n1 + n2 + n3) / 3;
    return sum;
}
const dolW = winn(84,67,9);
const kolW = winn(2,5,8);
const comp = (dol,kol) => {
    if(dol < kol ){
        console.log(`dol is the winner ${dolW}`);

    }else {
        console.log(`kol is the winner ${kolW}`);
    }
}
comp();

const friends = ["bd", "india","sweden","Oman"];

console.log(friends[3]);

const x = (siffra) => {
    const add = siffra+10;
    return add; 
}
const y = [1998,1997,1987,1234];
console.log(x(y[1]));

const findAge = (birthday) => {
    return 2037 - birthday;
}

const a = [1998,1997,1987,1234];
const a1 = findAge(a[0]);
const a2 = findAge(a[1]);
const a3 = findAge(a[a.length -1]);
console.log(findAge(a1,a2,a3));

const calcTrip = function(bill){
    return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
}

// const calcTrip = bill => bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;

const bills = [125,555,44];
const tips = [calcTrip(bills[0]), calcTrip([1]), calcTrip([2])];

console.log(bills,tips);
// const tip = [calcTrip(bills[2])];

//object

const mohona = {
    firstName: 'Mohona',
    lastName: 'chowdh',
    age: 2021-1998,
    occupation: 'student',
    friends: ['Hadia','robina','niosha','Sara'], 
    calc: function (){
        console.log(this);
        return 2021 -this.age;

    }
};
console.log(mohona);

console.log(mohona.lastName);
console.log(mohona['lastName']);

const nameKey = 'Name';
console.log(mohona['first' + nameKey]);
console.log(mohona['last' + nameKey]);

const interestin = prompt('what do u want to know about mohona? choose between firstname, last name, and age');
console.log(mohona[interestin]);

if(mohona[interestin]){
    console.log(mohona[interestin]);
}
else {
    console.log('wrong request,hoose between firstname, last name, and age');
}
mohona.location = 'sweden';
mohona['facebook'] = '@mohonacgowd';
console.log(mohona);
console.log(mohona.calc());

console.log(mohona.calc(1998));
const ammu = {
    firstName: 'Mohona',
    lastName: 'chowdh',
    age: 2021-1998,
    occupation: 'student',
    friends: ['Hadia','robina','niosha','Sara'], 
    calc: function (){
        console.log(this);
        return 2021 -this.age;

    }
};
for (let i = 0; i < ammu.length; i++) {
    console.log(jonas[i], typeof ammu[i]);

}
console.log(types);

const years = [1991,2009,2309,2020]; //fn + delete dile onno pase delete hobe
const ages = [];

for (let i = 0; i < ammu.length; i++) {
    ammu.push(2023-ammu[i])

}
console.log(ammu);


