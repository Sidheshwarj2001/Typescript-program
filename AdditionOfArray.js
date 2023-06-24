var Sum = 0;
function AdditonArray(Arr) {
    var Cnt = 0;
    for (Cnt = 0; Cnt < Arr.length; Cnt++) {
        Sum = Sum + Arr[Cnt];
    }
    return Sum;
}
var No = [10, 11, 12, 13, 15, 18, 20];
var Ret = 0;
Ret = AdditonArray(No);
console.log("Addition of Array is : ", Ret);
