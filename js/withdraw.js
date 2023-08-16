document.getElementById('btn-withdraw').addEventListener('click', function(){

    const newWithdraw = parseFloat(document.getElementById('id-withdraw').value);
    const oldWithdraw = parseFloat(document.getElementById('old-withdraw').innerText);

    const oldBalance = parseFloat(document.getElementById('id-balance').innerText);
    if(newWithdraw > oldBalance){
        alert("You don't have sufficient money ");
        return;
    }
    const newBalance = oldBalance - newWithdraw;
    
    const finalWithdraw = oldWithdraw + newWithdraw ;

   document.getElementById('id-withdraw').value='';

    if(isNaN(newWithdraw)){
        alert('Please enter correct amount');
        return;
    }

    document.getElementById('old-withdraw').innerText=finalWithdraw;
    document.getElementById('id-balance').innerText=newBalance;
    
})