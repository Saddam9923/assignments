

//1. Storing the values within the array 
console.log("1. Storing the values within the array");
let fruits: string[] = ["Apple", "Banana", "Mango", "Orange","kiwi"];
let prices: number[] = [250, 80, 200, 190];
let fruitsAndPrices: (string | number)[] = ["Apple", 100, "Banana", 200, "Mango", 300, "Orange", 400];
console.log(fruits);
console.log(prices);
console.log(fruitsAndPrices);

//2. Accessing the values from the array
console.log("2. Accessing the values from the array");
console.log(fruits[0]);
console.log(prices[1]);
console.log(fruitsAndPrices[2]);

//3. Adding additional values to the existing array at the end  
console.log("3. Adding additional values to the existing array at the end (push)");
fruits.push("grapes");
console.log(fruits);

//4. Remove the existing value from the array at the end. 
console.log("4. Remove the existing value from the array at the end (pop)");
fruits.pop();
console.log(fruits);

//5. Adding additional values to the existing array at the begining 
console.log("5. Adding additional values to the existing array at the begining (unshift)");
fruits.unshift("grapes");
console.log(fruits);

//6. Remove the existing value from the array at the begining. 
console.log("6. Remove the existing value from the array at the begining (shift)");
fruits.shift();
console.log(fruits);

//7. Adding & Removing additional values to the existing array in middle
console.log("7. Adding & Removing additional values to the existing array in middle (splice)");
//Syntax : array.splice(index,num-of-values-to-be-deleted,values-to-be-added);
fruits.splice(2, 1,'Grapes', 'Papaya', 'Jack fruit');
fruits.splice(2, 1);
console.log(fruits);

//example:2

let fruits1 = ["Apple", "Banana", "Mango", "Orange"];

fruits1.splice(2,2 );

console.log(fruits1);


//8. Find the index of a specific value within the array. (Find whether a specific value is present or not. )
console.log("8. Find the index of a specific value within the array. (indexOf)");
console.log(fruits.indexOf("kiwi"));

let num: number[]=[10,20,30,40,50];
console.log(num.indexOf(30));

let num1: number[]=[10,20,30,40,50];
console.log(num1.indexOf(30,1));

let message:string ="Hello world";
console.log(message.indexOf("world"));


//9. Create a new array by extracting part of the values from the existing array.
console.log("9. Create a new array by extracting part of the values from the existing array.(slice)");
let fruits3 = ["Apple", "Banana", "Mango", "Orange"];
let result=fruits3.slice(1,3);
console.log(result);


//10. Create a new array by merging two different arrays.
console.log("10. Create a new array by merging two different arrays.(concat)");
let veggi:string[]=["tomato", "garlic", "ginger","potato"]
let veggiAndFruits: string[]= fruits3.concat(veggi);
console.log(veggiAndFruits);


//11. Iterating all the values from the array 
console.log("11. Iterating all the values from the array (for...of)");
for(let val of fruits3){
    console.log(val);
}


//12. Reverse the values within the array. 
console.log("12. Reverse the values within the array. ")
fruits3.reverse();
console.log(fruits3);

//13. Sort /Arrange the values in the order. 
console.log("13. Sort /Arrange the values in the order.")
let alpha : string[]=["B","D","A","C","F","E"];
alpha.sort();
console.log(alpha);

//reverse
let numbers:number[]=[1,2,3,4,5,6,7,8]
numbers.reverse();
console.log(numbers);
