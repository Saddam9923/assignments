let percentage : number = 90;

if (percentage >=90){
    console.log("Grade - A");

    if(percentage >=95){
        console.log("Congrats! You will win the gold medal");
    }
    else{
        console.log("You will win the silver medal");
    }
}else if(percentage >=80){
    console.log("Grade B")

}else if(percentage >=70){
    console.log("Grade C");

}else if(percentage >=40){
    console.log("Grade D");

}else{
    console.log("Sorry your result is fail");

}
console.log("End the program");



console.log("============================================================================================================");



let temprature : number = 32;

if(temprature <=15){
    console.log("Its rainy day");
}
else if(temprature >=30){
    console.log("Its hot day");
}
else if(temprature >20 && temprature < 30){
    console.log("Its pleasnt day");

}else{
    console.log("Its cool day");
}

console.log("============================================================================================================");

let priority : string = "High";

switch(priority){
    case "High":
        console.log("This defect has highest priority");
        console.log("This defect fix immediatly");
        break;
    case "Medium":
        console.log("This defect has medium priority");
        console.log("This defect will fix but not priority");
        break;
    case "Low":
        console.log("This defect has lowest priority");
        console.log("This defect will fix in second sprint ");
        break;
    default:
        console.log("Invalid priroty");
}


console.log("============================================================================================================");