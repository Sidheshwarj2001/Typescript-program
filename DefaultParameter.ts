
function Percentage(Marks : number = 200 , Outof : number = 300):number
{
    let Ans : number = 0;

    Ans = (Marks/Outof) * 100;

    return Ans;
}

var Per : number = 0;

Per = Percentage(220);

console.log("Percentage is : ",Per);

Per = Percentage(220,500);

console.log("Percentage is : ",Per);

Per = Percentage();

console.log("Percentage is : ",Per);