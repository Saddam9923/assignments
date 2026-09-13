
//For of loop
let fruits:string []=["apple","banana","grapes","orange","kiwi"];
for(let value of fruits){
    console.log(value);
}

let arrayOfNumbers:number[]=[10,20,30,40,50,60,70];
for(let num of arrayOfNumbers){
    console.log(num);
}



//set
let empId: Set <number>=new Set();
empId.add(123);
empId.add(456);
empId.add(789);
empId.add(890);

for(let emp of empId){
    console.log(emp);
}


//for....in...loop

interface data{
    "firstName": string,
    "lastName" : string,
    "mobileNumber" : number,
    "compnayName" : string,
    "address" :{
        "cityName":string,
        "countryName" : string,
        "flatNumber": number

        }

}
let impData: data={
    "firstName": "Saddam",
    "lastName":"shaikh",
    "mobileNumber": 1234567890,
    "compnayName":"Hexaware",
    "address":{
        "cityName":"Mumbai",
        "countryName":"India",
        "flatNumber":786
    }
}
for (let key in impData){
    console.log(key);
}
for(let key in impData.address){
    console.log(key);
}

