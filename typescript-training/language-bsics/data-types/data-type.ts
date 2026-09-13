
//Primitaive data types
//Number
let name : string = "saddam";
console.log(name);

//BackTicks and string
let empFirstName:string="Saddam";
let empLastName:string="Shaikh";
let empRole:string="software Engineer";

let empInfo = `Employe first name is ${empFirstName}, employe last name is ${empLastName} and employee role is ${empRole}`;
console.log(empInfo);

//boolean
let num123:boolean= 10>5;
console.log(num123);

//undefined
let age:undefined;
console.log(age);

//null
let empRole1:null | string;
empRole1=null;
empRole1="software engineer";
console.log("Employee role is:", empRole1);

//Union
let xyz:string | number;
xyz="Shaikh";
xyz=123;
console.log(xyz);

let empAddress : string | number; 

empAddress = "Hyderabed";
empAddress = 500081 ;
console.log(empAddress);

//any
let emplInformation: any;
emplInformation = "saddam";
emplInformation=123;
emplInformation=true;
console.log(empFirstName);

//Non-primitaive data types
interface empData{
    empName:string,
    empCompnyName:string,
    empID:number,
    empBoodGruop:string,
    empPhoneNumber:number,
    empStatus:boolean,
    empAddress:{
        location:string,
        street:string,
        flatNo:number,
        cityName:string

    }
}
let employeeDetails : empData={
    empName:"Saddam",
    empCompnyName:"Hexaware",
    empID:123456789,
    empBoodGruop:"B+ve",
    empPhoneNumber:9923941274,
    empStatus:true,
    empAddress:{
        location:"Navi Mumbai",
        street:"CBD belapur road",
        flatNo:201,
        cityName:"Navi Mumbai"
    }

}
console.log(employeeDetails.empName);
console.log(employeeDetails.empAddress.cityName);
console.log(employeeDetails);
console.log(employeeDetails["empName"]);
console.log(employeeDetails["empAddress"]["flatNo"]);
console.log(employeeDetails.empAddress);

//Array
let fruits:string[]=["Apple","Bananan","Mango","Grapes","Kiwi"];
let price:number[]=[200,60,350,150.100];
console.log(fruits);
console.log(price);
console.log(fruits[3]);
console.log(price[0])

let fruitsAndPrices:(string | number)[]=["Apple",200,"Bananan",48, "Mango",300, "Grapes",700, "Kiwi", 690];
console.log(fruitsAndPrices);
console.log(fruitsAndPrices[4], fruitsAndPrices[8], fruitsAndPrices[0]);

//Tuple
let tupleDetails : [string , boolean, number] = ["saddam", true, 1234];
console.log(tupleDetails);


//Function with parameters
function loginPage(browserName:string, userName:string, password:string): void{
    console.log("launch the browser: " + "chrome");
    console.log("the user anme is: " + "SaddamShaikh123");
    console.log("the password is: " + "1234@Saddam");
}
loginPage("chrome","SaddamShaikh123" ,"1234@Saddam");

//Function with without parameters
function logOutAndClose(): void{
    console.log("log out from the Application");
    console.log("close the browser");
}

//Function with return type 
function sumOfNum(num1:number, num2:number): number{
    let num3:number = num1 + num2;
    return num3;
    
}
console.log(sumOfNum(10,20));

function getAccountBlance(): number{
    console.log("Navigates to account balance page");
    let accountBalance:number = 2000;
    return accountBalance;
}
console.log(getAccountBlance());

function getfullName(firstName:string , lastName:string): string{
    let fullName:string = firstName +" "+ lastName;
    return fullName;
}
console.log("Full name is:" , getfullName ("saddam" ,  "shaikh"));

//set
let empID: Set <number> = new Set();
empID.add(123);
empID.add(765);
empID.add(7652);
empID.add(1234);
empID.add(123);

//Delete
empID.delete(1234);
console.log(empID);

// Check size
console.log(empID.size);

// Check if value exists
console.log(empID.has(1234));

// Iterate over values
empID.forEach(value =>{
    console.log(value);
});

//Map
let personData : Map <string, string | number | boolean> = new Map();
personData.set("shaikh", "saddam");
personData.set("Id", 1234567);
personData.set("job status",true);
personData.set("shaikh", "sharukh"); //Duplicate key will not be added to the map. It will update the value of the existing key.
personData.set("pin",1234567) //Duplicate key will not be added to the map. It will update the value of the existing key.
console.log(personData.get("Id"));
console.log(personData.has("pin"));
//personData.delete("Id");
console.log(personData);

//Date => Date is a data type that can store the date and time values.
let date = new Date();
console.log(date);

//current date
let curentDate = date.getDate();
console.log(curentDate);

let cuurentYear = date.getFullYear();
console.log(cuurentYear);

let currentTime = date.getTime();
console.log(currentTime);

let currentHours = date.getHours();
console.log(currentHours);

let currentMinutes = date.getMinutes();
console.log(currentMinutes);

let currentDay = date.getDay(); 
console.log(currentDay);
