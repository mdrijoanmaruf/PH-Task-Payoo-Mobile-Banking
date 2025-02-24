document.getElementById('get').addEventListener('click' , function(e){
    e.preventDefault()
    let balance = localStorage.getItem('balance');
    if(!balance){
        balance = "50000";
    } else{
        balance = parseFloat(balance);
    }
    balance = parseFloat(balance);

    let bonusCoupon = document.getElementById('bonusCoupon').value;


    if(bonusCoupon){
        if(bonusCoupon === "RIJOAN$100"){
            balance += 100;
            alert(`Added $100 in you Balance from Coupon ${bonusCoupon} now your Balance $${balance}`)
            document.getElementById('balance').innerHTML = balance;
            localStorage.setItem('balance', balance);
        }
    }
    else{
        alert("Please Enter Your Coupon Code.")
    }
})