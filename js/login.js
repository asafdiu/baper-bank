document.getElementById('btn-submit').addEventListener('click', function(){
    const emailId = document.getElementById('id-email').value;
    const password = document.getElementById('id-password').value;
    console.log(emailId,password);
    if(emailId ==='suny.khan24@gmail.com' && password ==='01650198300'){
        window.location.href="bank.html";
    }
    else{
        alert("Please enter valid email and password");
    }
    
    
})