
//A bank evaluates loan applicants

function loanApplication(customerName: string,
    creditScore: number,
    income: number,
    employmentStatus: boolean,
    debtToIncomeRatio: number) {

    // Step 1: Credit Score and Income
    if (creditScore > 750) {
        console.log("the customer loan is automatically approved.");
    }
    else if (creditScore >= 650 && creditScore <= 750) {
        console.log("The loan application is additional checks are performed.");
    }

    else if (creditScore < 650) {
        console.log("the loan is denied")
    }
    // Step 2: Income
    if (income >= 50000) {
        console.log("the loan to be considered.");
    }

    // Step 3: Employment   
    if (!employmentStatus) {
        console.log("If the customer is unemployed, the loan is denied.")
    }

    // Step 4: Debt-to-Income Ratio
    if (debtToIncomeRatio < 40) {
        console.log("the loan is approved")
    }
    else if (debtToIncomeRatio > 40) {
        console.log("the loan is denied.");
    }
}
// Customer Data
let customerName = "John Doe";
let creditScore = 720;
let income = 55000.0;
let employmentStatus = true;
let debtToIncomeRatio = 35.0;

let result = loanApplication(customerName, creditScore, income, employmentStatus, debtToIncomeRatio);
console.log(result);