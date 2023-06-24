function Multiplication(No1 : number , No2 : number , No3 : number):number
{
    let Ans : number = 0;

    Ans = No1 * No2 * No3;

    return Ans
}

var A : number = 11 ; 
var B : number = 21 ;
var C : number = 51 ;

var Ret : number = 0;

Ret = Multiplication(A,B,C);

console.log("Multiplication is : ",Ret);