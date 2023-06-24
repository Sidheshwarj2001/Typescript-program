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
console.log("Result is :" + Ret);
Ret = Addition();
console.log("Result is :" + Ret);
Ret = Addition(10, 20, 30, 10, 20);
console.log("Result is :" + Ret);
Ret = Addition(10, 20, 30, 10, 20, 50, 60);
console.log("Result is :" + Ret);
var an1 = 0;
var an2 = "sidjes";
console.log(typeof an1);
console.log(typeof an2);
