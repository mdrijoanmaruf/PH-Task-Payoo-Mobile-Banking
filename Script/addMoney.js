
// Add Money
document.getElementById('add').addEventListener('click' , function(e){
    e.preventDefault()
    let balance = localStorage.getItem('balance');
    if(!balance){
        balance = "50000";
    } else{
        balance = parseFloat(balance);
    }



    // let balance = document.getElementById('balance').innerText;
    balance = parseFloat(balance);

    let amount = parseFloat(document.getElementById('amount').value);

    let bank = document.getElementById('bank').value;
    let addMoneyNumber = document.getElementById('addMoneyNumber').value;
    let addMoneyPin = parseFloat(document.getElementById('addMoneyPin').value)
    
    if(bank === 'Select Bank'){
        alert("Select Your Bank")
    }
    else{
        if(addMoneyNumber && amount){
            if(addMoneyPin === 1234){
                balance += amount;
                alert(`Added ${amount}$ in you Balance`)
                document.getElementById('balance').innerHTML = balance;
                localStorage.setItem('balance', balance);
            }
        }
        else{
            alert("Fill the full form.")
        }
    }
})

window.addEventListener('load', function() {
    let balance = localStorage.getItem('balance');
    if (balance) {
        document.getElementById('balance').innerHTML = parseFloat(balance);
    } else {
        document.getElementById('balance').innerHTML = 50000;
    }
});



// Cash Out