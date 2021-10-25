//   ----forEach--- 
 var number = [10,20,30,40];
var squre = [];
 number.forEach(function (z){
     squre.push(z*z);

 })
 console.log(squre); 
 
//   ---map---
 var number = [20,30,10,3,4,2,6];

 var squre = number.map(function(x){
     return x*x;
 })
 console.log(squre); 

//  ---filter--

var number = [20,30,10,3,4,2,6];

 var squre = number.filter(function(x){
    //  return x>10;
    return x*x;
 })
 console.log(squre);