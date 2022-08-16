document.getElementById('deposit-btn').addEventListener('click', function(){
    const depositField = document.getElementById('deposit-field');
    const depositString = depositField.value;
    const newDepositAmount = parseFloat(depositString);

    //get deposit-Total amont
    const depositTotalElement = document.getElementById('deposit-Total');
    const preveiousString = depositTotalElement.innerText;
    const oldDepostiAmount = parseFloat(preveiousString);
    depositTotalElement.innerText = oldDepostiAmount + newDepositAmount;


    // get total balance
    const oldbalanceElemen = document.getElementById('total-balance');
    const oldbalanceStrign = oldbalanceElemen.innerText;
    const currentBalance = parseFloat(oldbalanceStrign);
    oldbalanceElemen.innerText = currentBalance + newDepositAmount;
    depositField.value = '';
    
})