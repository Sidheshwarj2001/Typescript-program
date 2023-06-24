var Monday : number = 560; 
var Tueday : number = 900;
var Wensday : number = 800;
var Thurday : number = 700;
var Friday : number = 650;
var Saturday : number = 550;
var Sunday : number = 450;

// memory get allocated randomly
// we cannot use loop for random or seperated memory variable

// to avoid above problem then use Array 


var Week : number[] = [560,900,800,700,650,550,450];

console.log(Week[0]);
console.log(Week[1]);
console.log(Week[2]);
console.log(Week[3]);
console.log(Week[4]);
console.log(Week[5]);
console.log(Week[6]);

console.log("Length of Week is : ",Week.length)