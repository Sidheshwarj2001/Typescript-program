
class Circle
{

    Radius : number;
    PI : number;

    constructor(Rd : number)
    {
        this.Radius = Rd;
        this.PI = 3.14;
    }

    CalculateArea() : number
    {
        let Ans : number = 0;
        Ans =  this.PI * this.Radius * this.Radius;
        return Ans;
    }
}

class CircleX extends Circle
{
    constructor(Rd : number)
    {
        super(Rd);
    }

    CaluclateCircumference()
    {
        let Ans : number =0 ;
        Ans = 2* this.PI * this.Radius;
        return Ans;
    }
}
var Ret : number = 0;

var obj1 = new CircleX(10.7);

Ret = obj1.CalculateArea()
console.log("Area is : "+Ret);

Ret = obj1.CaluclateCircumference();
console.log("Circumference is : "+Ret);