
//break
/* for(let i:number =1; i<=5; i++){
    if(i==5){
        break;
    }
    console.log(i);
}  */

//contniue
for(let i:number =1; i<=10; i++){
     if(i==5 || i==10){
        //break;
        continue;
    } 
    console.log(i)
}

//return

function getAccountBalance(): number {
    console.log("Navigets to account balance page")
    let accountBalance : number =2000;
    return accountBalance;
}
console.log(`Your account balance is: ${getAccountBalance()}`);

function sumOfTwoNumbers(num1:number, num2:number) :number {
    console.log("Here is sum of two number")
    let sum : number =  num1 + num2;  //returning the sum of two numbers
    return sum;
    
}
console.log(`The sum of two numbers is: ${sumOfTwoNumbers(2,2)}`);
