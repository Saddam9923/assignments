
//The total number of words in the sentence.
let text : string = "Java programming is fun and challenging";
let result = text.length;
console.log(`The total number of words in the sentence is: ${result}`);

//The sentence words in reverse order.
let text1 : string = "Java programming is fun and challenging";
let word : string [] = text1.split(" ");
word.reverse();
let result1 : string = word.join(" ");
console.log(result1);
