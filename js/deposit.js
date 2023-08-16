document.getElementById('btn-deposit').addEventListener('click', function(){
    const newDeposit = parseFloat(document.getElementById('id-deposit').value);
    const oldDeposit = parseFloat(document.getElementById('old-deposit').innerText);
    const finalDeposit = oldDeposit + newDeposit;
    const oldBalance = parseFloat(document.getElementById('id-balance').innerText);
    const newBalance = oldBalance + newDeposit;
   document.getElementById('id-deposit').value='';

    if(isNaN(newDeposit)){
        alert('Please enter correct amount');
        return;
    }
    document.getElementById('old-deposit').innerText=finalDeposit;
    document.getElementById('id-balance').innerText=newBalance;

    
    
    
    
    
})