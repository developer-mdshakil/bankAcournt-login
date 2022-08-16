document.getElementById('withdraw-btn').addEventListener('click', function(){
    const withdrawField = document.getElementById('withdraw-field');
    const withdrawAmountString = withdrawField.value;
    const withdrawNewBalance = parseFloat(withdrawAmountString);

    withdrawField.value = '';

    if(isNaN(withdrawNewBalance)){
        alert('You type Worng input.Please provied valid number');
        return;
    }

    const withdrawOldBalance = document.getElementById('withdraw-total');
    const withdrawOldBalanceString = withdrawOldBalance.innerText;
    const widtOldBalance = parseFloat(withdrawOldBalanceString);
    

    const preveousBalance = document.getElementById('total-balance');
    const preveousBalanceString = preveousBalance.innerText;
    const preveousAmount = parseFloat(preveousBalanceString);

    if(withdrawNewBalance > preveousAmount){
        alert('Poor balance!!!Please set current amount');
        return;
    }

    const currentwithdraw = widtOldBalance + withdrawNewBalance;
    withdrawOldBalance.innerText = currentwithdraw;

    const currentBalacne = preveousAmount - withdrawNewBalance;
    preveousBalance.innerText = currentBalacne;

})