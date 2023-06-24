var Circle = /** @class */ (function () {
    function Circle(Rd) {
        this.Radius = Rd;
        this.PI = 3.14;
    }
    Circle.prototype.CalculateArea = function () {
        var Ans = 0;
        Ans = this.PI * this.Radius * this.Radius;
        return Ans;
    };
    return Circle;
}());
var obj = new Circle(10.7);
var Ret = obj.CalculateArea();
console.log("Area of Circle is : " + Ret);
