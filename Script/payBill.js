document.getElementById('payBillBtn').addEventListener('click' , function(e){
    e.preventDefault()
    let balance = localStorage.getItem('balance');
    if(!balance){
        balance = "50000";
    } else{
        balance = parseFloat(balance);
    }
    balance = parseFloat(balance);

    
    let Payamount = parseFloat(document.getElementById('Payamount').value);

    let Paybank = document.getElementById('Paybank').value;
    let PayaddMoneyNumber = document.getElementById('PayaddMoneyNumber').value;
    let PayaddMoneyPin = parseFloat(document.getElementById('PayaddMoneyPin').value)
    
    if(Paybank === 'Select'){
        alert("Select Your Bill")
    }
    else{
        if(PayaddMoneyNumber && Payamount){
            if(PayaddMoneyPin === 1234){
                balance -= Payamount;
                alert(`Amount $${Payamount} paid for "${Paybank}" to "${PayaddMoneyNumber}" . Now Your Balance is "${balance}"`)
                document.getElementById('balance').innerHTML = balance;
                localStorage.setItem('balance', balance);
            }
        }
        else{
            alert("Fill the full form.")
        }
    }
})
