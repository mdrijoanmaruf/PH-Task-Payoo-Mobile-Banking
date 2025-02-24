document.getElementById('addMoney').style.display = 'block'
document.getElementById('cashOut').style.display = 'none'
document.getElementById('transferMoney').style.display = 'none'


document.getElementById('addMoneyNav').addEventListener('click' , function(){
    document.getElementById('addMoney').style.display = 'block'
    document.getElementById('cashOut').style.display = 'none'
    document.getElementById('transferMoney').style.display = 'none'
})


document.getElementById('cashOutNav').addEventListener('click' , function(){
    document.getElementById('addMoney').style.display = 'none'
    document.getElementById('cashOut').style.display = 'block'
    document.getElementById('transferMoney').style.display = 'none'
})


document.getElementById('transferNav').addEventListener('click' , function(){
    document.getElementById('addMoney').style.display = 'none'
    document.getElementById('cashOut').style.display = 'none'
    document.getElementById('transferMoney').style.display = 'block'
})

