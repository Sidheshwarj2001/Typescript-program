// write Application which performs additions and subtraction of two number

class Arithmatic
{
    public No1 : number ;
    public No2 : number;

    public constructor(A : number , B : number)
    {
        this.No1 = A;
        this.No2 = B;
    }

    public Addition() : any
    {
        return this.No1 + this.No2;
    }


    public Subtraction() : any
    {
        return this.No1 + this.No2;

    }
}

var obj1 = new Arithmatic(11,21);

var aRet : number = obj1.Addition()
console.log("Addition is : ",aRet);

var sRet : number = obj1.Subtraction();
console.log("Subtraction is : ",sRet);

