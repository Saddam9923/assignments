
//A bank evaluates loan applicants

function loanApplication(customerName: string,
    creditScore: number,
    income: number,
    employmentStatus: boolean,
    debtToIncomeRatio: number) {

    // Step 1: Credit Score and Income
    if (creditScore >= 750) {
        console.log("the customer loan is automatically approved.");
    }
    else if (creditScore >= 650 && creditScore < 750) {
        console.log("The loan application is additional checks are performed.");
    }

    else if (creditScore < 650) {
        console.log("loan is denied due to credit scroe is low")
    }
    // Step 2: Income
    if (income >= 50000) {
        console.log("the customer’s income must be at least $50,000 the loan to be considered.");
    }

    // Step 3: Employment   
    if (!employmentStatus) {
        console.log("The loan is denied because of customer is unemployed")
    }

    // Step 4: Debt-to-Income Ratio
    if (debtToIncomeRatio < 40) {
        console.log("The DTI ratio is less than 40%, the loan is approved.")
    }
    else if (debtToIncomeRatio >= 40) {
        console.log("The DTI ratio is 40% or greater, the loan is denied.");
    }
}
// Customer Data
let customerName = "Saddam";
let creditScore = 750;
let income = 55000.0;
let employmentStatus = true;
let debtToIncomeRatio = 39.0;

let result = loanApplication(customerName, creditScore, income, employmentStatus, debtToIncomeRatio);
console.log(result);