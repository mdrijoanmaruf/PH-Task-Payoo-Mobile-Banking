document.getElementById('withdraw').addEventListener('click' , function(e){
    e.preventDefault();

    let balance = localStorage.getItem('balance');
    if(!balance){
        balance = "50000";
    } else{
        balance = parseFloat(balance);
    }
    balance = parseFloat(balance);

    let amountWithdraw =parseFloat(document.getElementById('amountWithdraw').value);
    let agentNumber = parseFloat(document.getElementById('agentNumber').value);
    let withdrawPin = parseFloat(document.getElementById('withdrawPin').value)

    if(agentNumber && amountWithdraw){
        if(withdrawPin === 1234){
            balance -= amountWithdraw;
            alert(`Cash out amount $${amountWithdraw} . Now Balance $${balance}`)
            document.getElementById('balance').innerHTML = balance;
            localStorage.setItem('balance', balance);
        }
    }
    else{
        alert("Fill The Form")
    }
})