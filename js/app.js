function getElementAmountById(elementId){
    const elementField = document.getElementById(elementId);
    const amountString = elementField.value;

    //  validation fails if the input is blank
    if(amountString === "") {
        alert("Error: Input is empty! Please Valid input and try again!");
        return;
     }

    if(amountString <= 0){
        alert("Inputs must be positive numbers");
        return;
    }

    const amount = parseFloat(amountString);
    return amount;
}


// current Balance Calculate
function currentBalanceCalculate(){
    const income = getElementAmountById('income');
    const food = getElementAmountById('food');
    const rent = getElementAmountById('rent');
    const clothes = getElementAmountById('clothes');

    // total expense calculate 
    const totalExpense = food + rent + clothes;

    // validation 
    if(totalExpense > income){
        alert("cut your coat according to your cloth!");
        return;
    }

    if(isNaN(totalExpense)){
        return;
    }

    document.getElementById('total-expense').innerText = totalExpense;

    // current balance calculate 
    const currentBalance = income - totalExpense;
    return currentBalance;
}

document.getElementById('calculate-btn').addEventListener('click', function(){
    // current balance display
    const currentBalance = currentBalanceCalculate();
    if(isNaN(currentBalance)){
        return;
    }
    document.getElementById('current-balance').innerText = currentBalance;
})


document.getElementById('save-amount').addEventListener('click', function(){
    // save amount calculate
    const saveAmountPercentage = getElementAmountById('save');
    
        // validation 
        if(saveAmountPercentage > 100){
            alert("Save Percentage is less than 100!");
            return;
        }

    const saveAmountIncome = getElementAmountById('income');
    const saveBalance  = (saveAmountIncome * saveAmountPercentage) / 100;

    document.getElementById('saving-amount').innerText = saveBalance;

    // remaining balance calculate 
    const currentBalance = currentBalanceCalculate();

    const remainingBalance = currentBalance - saveBalance;
    document.getElementById('remaining-balance').innerText = remainingBalance;
})