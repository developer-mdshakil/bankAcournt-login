document.getElementById('withdraw-btn').addEventListener('click', function(){
    const withdrawField = document.getElementById('withdraw-field');
    const withdrawAmountString = withdrawField.value;
    const withdrawNewBalance = parseFloat(withdrawAmountString);

    const withdrawOldBalance = document.getElementById('withdraw-total');
    const withdrawOldBalanceString = withdrawOldBalance.innerText;
    const widtOldBalance = parseFloat(withdrawOldBalanceString);
    const currentwithdraw = widtOldBalance + withdrawNewBalance;
    withdrawOldBalance.innerText = currentwithdraw;

    const preveousBalance = document.getElementById('total-balance');
    const preveousBalanceString = preveousBalance.innerText;
    const preveousAmount = parseFloat(preveousBalanceString);
    const currentBalacne = preveousAmount - withdrawNewBalance;
    preveousBalance.innerText = currentBalacne;



    withdrawField.value = '';
})