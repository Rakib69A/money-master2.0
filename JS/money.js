
function getElementValueById(elementId){
    const incomeElement = document.getElementById(elementId);
    const incomeString = incomeElement.value;
    const income = parseFloat(incomeString);
    return income;
}

document.getElementById('calculate').addEventListener('click',function(){
    
    // Take the income form the income input field 
    const income = getElementValueById('income');
    // taking the Rent form the rent input field
    
    const rent = getElementValueById('rent');

    //taking input from clothes input field
    
    const tax = getElementValueById('tax');

    //taking input from clothes input field
    
    const clothes = getElementValueById('clothes');
    
    //calculate total expenses

    const totalExpenses = rent + tax + clothes;

    document.getElementById('total-expenses').innerText = totalExpenses;
    
    //Calculation remaining balance

    const currentBalance = income - totalExpenses;
    document.getElementById('current-balance').innerText = currentBalance;

    // calculating saving amount

    const savings = income * 0.2;
    document.getElementById('save-amount').innerText = savings;

    // calculating reaming balance 

    const reamingBalance = currentBalance - savings;
    document.getElementById('remaining-balance').innerText = reamingBalance;
    
})