// write Application which performs additions and subtraction of two number
var Arithmatic = /** @class */ (function () {
    function Arithmatic(A, B) {
        this.No1 = A;
        this.No2 = B;
    }
    Arithmatic.prototype.Addition = function () {
        return this.No1 + this.No2;
    };
    Arithmatic.prototype.Subtraction = function () {
        return this.No1 + this.No2;
    };
    return Arithmatic;
}());
var obj1 = new Arithmatic(11, 21);
var aRet = obj1.Addition();
console.log("Addition is : ", aRet);
var sRet = obj1.Subtraction();
console.log("Subtraction is : ", sRet);
