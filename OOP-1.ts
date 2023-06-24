//class = Data  + function
// class = characterstics + Behaviours

class Student 
{
    // Characteristics
    Name  : string;
    Marks : number;
    Age : number;
    City  : string;

    constructor(N : string , M : number , A : number , C : string)
    {
        console.log("Inside the constructor");
        this.Name = N;
        this.Marks = M;
        this.Age = A;
        this.City = C;
    }

    Display() : void
    {
        console.log("Name of student : ",this.Name);
        console.log("Marks of student : ",this.Marks);
        console.log("Age of student : ",this.Age);
        console.log("City of student : ",this.City);
    }

}

// creating object
var Obj123  = new Student("Sidheshwar",7.25,22,"Ahemdnagar");

var Obj124  = new Student("Vishal",7.25,21,"Shevgoan");


Obj123.Display()

Obj124.Display()