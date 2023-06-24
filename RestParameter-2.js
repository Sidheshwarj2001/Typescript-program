// Rest Parameters : variable number of arguments
function Addition() {
    var Arr = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        Arr[_i] = arguments[_i];
    }
    var sum = 0;
    var cnt = 0;
    for (cnt = 0; cnt < Arr.length; cnt++) {
        sum = sum + Arr[cnt];
    }
    return sum;
}
var Ret = 0;
Ret = Addition(10, 20);
// var myData : number = [ 10,20,30,10]; // NOt allowed in case of Rest paramters
// Ret = Addition(myData)
console.log("Result is :", Ret);
Ret = Addition(10, 20, 30, 10);
