//immutable
let a = 10;
a + 10;
console.log(a);

//mutable

let empData = {
    "name" : "saddam",
    "id"  : 9923
}
empData.age = 30;
console.log(empData);

//Primitive data type
let num1 = 10;
let num2 = 10.34;

console.log(typeof num1);
console.log(typeof num2);

let firstName = "saddam";
let lastName = "shaikh";

console.log(typeof firstName);
console.log(typeof lastName);

let role = "senior 'software' engineer";
let role2 = 'senior "software" engineer';
//back ticks
let empInfo = `employee first name is ${firstName}, employee lat name is ${lastName}, and the employee role is ${role}.`;
console.log(empInfo);

//boolean
let result = 10>5;
console.log(result);
console.log(typeof result);

//Undefined
let empAge ;
console.log(typeof empAge);

//null 
let salary = 10000;
salary = null;
console.log(salary);

/*******Non-Primitive Datatypes**********/

//Object => Object data type represents a collection of key-value pairs stored together.

//let empName = "saddam";
//let empId = 9923;
//let empVisaStatus = true;

let empData1 = {
    "name" : "saddam",
    "Id" : 123 , 
    "visaStatus" : true,
    "address" : {
        "city": "mumbai",
        "state":"maharahstra",
        "pinCode":123
    }

};
console.log(empData1);
console.log(empData1.name);
console.log(empData1["name"]);
console.log(empData1.address.state);
console.log(empData1.address.pinCode);

//Array => Array is a data type that can store a list of values. 

let fruits = "Apple";
let fruits1 = "mango";
let fruits2 = "grapes";
let fruits3 = "banana";

console.log(fruits);

//After Array
let fruits0 = ["apple", "banana", "lemon", "pineppale"];
let prices = [200 , 60, 20, 300];
let fruitsAndPrices = ["apple", 200, "banana", 60 , "lemon", 20, "pineppale", 300];
let fruitsArray = [["apple", 200], ["banana", 60], ["lemon", 20], ["pineppale", 300]];
fruits0  [0]= "watermelon";

console.log(fruits0);
console.log(fruits0[2]);
console.log(fruitsAndPrices[1]);
console.log(fruitsArray[1][1]);
console.log(fruitsArray[3][0]);


