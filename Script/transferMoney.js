document.getElementById('transfer').addEventListener("click" , function(e){
    e.preventDefault();

    let balance = localStorage.getItem('balance');
    if(!balance){
        balance = "50000";
    } else{
        balance = parseFloat(balance);
    }
    balance = parseFloat(balance);

    let transferAmount =parseFloat(document.getElementById('transferAmount').value);
    let userNumber = parseFloat(document.getElementById('userNumber').value);
    let transferPin = parseFloat(document.getElementById('transferPin').value)

    if(userNumber && transferAmount){
        if(transferPin === 1234){
            balance -= transferAmount;
            alert(`Amount transfer to "${userNumber}" $${transferAmount} . Now Balance $${balance}`)
            document.getElementById('balance').innerHTML = balance;
            localStorage.setItem('balance', balance);
        }
    }
    else{
        alert("Fill The Form")
    }
})