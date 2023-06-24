
function AdditonArray(Arr : number[]) : number
{
    let Cnt : number = 0;
    let Sum : number = 0;

    for (Cnt = 0 ; Cnt<Arr.length;Cnt++)
    {
        Sum = Sum + Arr[Cnt];
    }
    return Sum;
}

var No  : number[] = [10,11,12,13,15,18,20];

var Ret : number = 0;

Ret = AdditonArray(No);

console.log("Addition of Array is : ",Ret);