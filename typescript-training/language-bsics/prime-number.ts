/* let num: number = 6;
let isPrime: boolean = true;

for (let i = 2; i < num; i++) {
    if (num % i == 0) {
        isPrime = false;
        break;
    }
}

if (isPrime) {
    console.log("Prime number");
} else {
    console.log("Not a prime number");
} */

let num : number =29;
let isPrime: boolean =true;

for (let i: number =2; i< num; i++){
    if(num % i ===0){
        isPrime= false;
        break;
    }
}
if (isPrime){
    console.log("Prime number")

}else{
    console.log("not a prime number");
}