function Addition(A : number , B : number):number{
    let Ans : number = 0;
    Ans = A + B;
    return Ans
}

function Subtraction(A : number , B : number):number{
    let Ans : number = 0;
    Ans = A - B;
    return Ans
}

var No1 : number = 11;
var No2 : number = 21;

var iRet : number = Addition(No1,No2);

console.log("Addition of two number is : ",iRet);

var iRet : number = Subtraction(No1,No2);
console.log("Subtraction of two number is : ",iRet);

