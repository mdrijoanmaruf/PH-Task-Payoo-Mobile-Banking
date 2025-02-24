document.getElementById('addMoney').style.display = 'none'
document.getElementById('cashOut').style.display = 'none'
document.getElementById('transferMoney').style.display = 'none'
document.getElementById('getBonus').style.display = 'none'
document.getElementById('payBill').style.display = 'none'
document.getElementById('TransactionHistory').style.display = 'block'




document.getElementById('addMoneyNav').addEventListener('click' , function(){
    document.getElementById('addMoney').style.display = 'block'
    document.getElementById('cashOut').style.display = 'none'
    document.getElementById('transferMoney').style.display = 'none'
    document.getElementById('getBonus').style.display = 'none'
    document.getElementById('payBill').style.display = 'none'
    document.getElementById('TransactionHistory').style.display = 'none'
})


document.getElementById('cashOutNav').addEventListener('click' , function(){
    document.getElementById('addMoney').style.display = 'none'
    document.getElementById('cashOut').style.display = 'block'
    document.getElementById('transferMoney').style.display = 'none'
    document.getElementById('getBonus').style.display = 'none'
    document.getElementById('payBill').style.display = 'none'
    document.getElementById('TransactionHistory').style.display = 'none'
})


document.getElementById('transferNav').addEventListener('click' , function(){
    document.getElementById('addMoney').style.display = 'none'
    document.getElementById('cashOut').style.display = 'none'
    document.getElementById('transferMoney').style.display = 'block'
    document.getElementById('getBonus').style.display = 'none'
    document.getElementById('payBill').style.display = 'none'
    document.getElementById('TransactionHistory').style.display = 'none'
})

document.getElementById('bonusNav').addEventListener('click' , function(){
    document.getElementById('addMoney').style.display = 'none'
    document.getElementById('cashOut').style.display = 'none'
    document.getElementById('transferMoney').style.display = 'none'
    document.getElementById('getBonus').style.display = 'block'
    document.getElementById('payBill').style.display = 'none'
    document.getElementById('TransactionHistory').style.display = 'none'
    
})
document.getElementById('payBillNav').addEventListener('click' , function(){
    document.getElementById('addMoney').style.display = 'none'
    document.getElementById('cashOut').style.display = 'none'
    document.getElementById('transferMoney').style.display = 'none'
    document.getElementById('getBonus').style.display = 'none'
    document.getElementById('TransactionHistory').style.display = 'none'
    document.getElementById('payBill').style.display = 'block'
       
})
document.getElementById('transactionNav').addEventListener('click' , function(){
    document.getElementById('addMoney').style.display = 'none'
    document.getElementById('cashOut').style.display = 'none'
    document.getElementById('transferMoney').style.display = 'none'
    document.getElementById('getBonus').style.display = 'none'
    document.getElementById('payBill').style.display = 'none'
    document.getElementById('TransactionHistory').style.display = 'block'
       
})

