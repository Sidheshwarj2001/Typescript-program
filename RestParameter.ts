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
console.log("Result is :"+Ret);

Ret = Addition();
console.log("Result is :"+Ret);

Ret = Addition(10,20,30,10,20);
console.log("Result is :"+Ret);

Ret = Addition(10,20,30,10,20,50,60);
console.log("Result is :"+Ret);


//any datatype
// var an1 : any = 0;
// var an2 : any = "sidjes";

// console.log(typeof an1);
// console.log(typeof an2);
