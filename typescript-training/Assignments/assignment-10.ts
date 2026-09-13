
let prices : number []=[7, 1, 5, 3, 6, 4];

let minPrice : number [] =[0];
let maxProfit : number []= [0];

for(let i : number =1; i <prices.length; i++){
    if(prices[i] < minPrice){
        minPrice = prices[i];
    }

 let profit : number = prices[i] - minPrice;
if(profit > maxProfit){
    maxProfit  = profit  ;
}

}
console.log(maxProfit);