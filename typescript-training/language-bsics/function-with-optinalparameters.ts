//5. Functions with optional parameters 

function introduce(name:string, age?:number){
    console.log(name);
    console.log(age);
}
introduce("Saddam");
introduce("saddam", 25);


function myFunction(empName:string, emp:string, empID?:number, empAge?:number){
    console.log(empName);
    console.log(emp);
    console.log(empID);
    if(empAge){
        console.log(empAge);
    }
}
myFunction("Saddam","shaikh",123, 46);
myFunction("saddam", "shaikh", 23);


//6. Function with default parameters. 
function personInfo(name :string, empId : number=122 , empVisaStatus:boolean=false){
    console.log(empId);
    console.log(name);
    console.log(empVisaStatus);
}

//calling function
personInfo("Bharath",1234,true);
personInfo("Ravi",1235); 


//7. Function with rest parameters.
function sum(...numbers:number[]){
    console.log(numbers);
}
sum(1,2,3,4)


function sumOfNumbers(...numbers:number[]): number{
    let sum: number=0;
    for(let num of numbers){
        sum = sum + num;
    }
    return sum;
}
console.log(sumOfNumbers(1,2,3));


function value(...numbers: number[]) {
    console.log(numbers)
}
value(1,2,3,4,5,6)

//write program sum of any numbers
function sum1(...numbers:number[]):number{
    let sum1:number=0;
    for(let num1 of numbers){
        sum1+=num1;
    }
    return sum1;
}
console.log(sum1(1,2,3,4,5,6,7,8,9,0));


function sumOfAnyNumber(...value:number[]):number{
   let sumOfAnyNumber: number =0;
   for(let add of value){
    sumOfAnyNumber = sumOfAnyNumber + add
    
   }
   return sumOfAnyNumber
}
console.log(sumOfAnyNumber(1,2));