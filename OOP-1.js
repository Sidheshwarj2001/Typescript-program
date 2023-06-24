//class = Data  + function
// class = characterstics + Behaviours
var Student = /** @class */ (function () {
    function Student(N, M, A, C) {
        console.log("Inside the constructor");
        this.Name = N;
        this.Marks = M;
        this.Age = A;
        this.City = C;
    }
    Student.prototype.Display = function () {
        console.log("Name of student : ", this.Name);
        console.log("Marks of student : ", this.Marks);
        console.log("Age of student : ", this.Age);
        console.log("City of student : ", this.City);
    };
    return Student;
}());
// creating object
var Obj123 = new Student("Sidheshwar", 7.25, 22, "Ahemdnagar");
var Obj124 = new Student("Vishal", 7.25, 21, "Shevgoan");
Obj123.Display();
Obj124.Display();
