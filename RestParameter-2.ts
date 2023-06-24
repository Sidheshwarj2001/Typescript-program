// Rest Parameters : variable number of arguments
function Addition(...Arr : number[]):any
{
    let sum : number = 0;
    let cnt : number = 0;

    for( cnt= 0 ; cnt < Arr.length;cnt++){
        sum = sum + Arr[cnt];
    }
    return sum;
}

var Ret : number  = 0;

Ret = Addition(10,20);

// var myData : number = [ 10,20,30,10]; // NOt allowed in case of Rest paramters

// Ret = Addition(myData)

console.log("Result is :",Ret);

Ret = Addition(10,20,30,10)
