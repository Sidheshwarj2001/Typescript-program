function Addition(A, B) {
    var Ans = 0;
    Ans = A + B;
    return Ans;
}
function Subtraction(A, B) {
    var Ans = 0;
    Ans = A - B;
    return Ans;
}
var No1 = 11;
var No2 = 21;
var iRet = Addition(No1, No2);
console.log("Addition of two number is : ", iRet);
var iRet = Subtraction(No1, No2);
console.log("Subtraction of two number is : ", iRet);
