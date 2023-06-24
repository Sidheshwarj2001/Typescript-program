
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

var obj = new Circle(10.7);

var Ret = obj.CalculateArea();

console.log("Area of Circle is : "+Ret);
