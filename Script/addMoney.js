document.getElementById('add').addEventListener('click' , function(e){
    e.preventDefault()
    let balance = localStorage.getItem('balance');
    if(!balance){
        balance = "50000";
    } else{
        balance = parseFloat(balance);
    }
    balance = parseFloat(balance);

    let amount = parseFloat(document.getElementById('amount').value);

    let bank = document.getElementById('bank').value;
    let addMoneyNumber = document.getElementById('addMoneyNumber').value;
    let addMoneyPin = parseFloat(document.getElementById('addMoneyPin').value)

    function getFormattedDate() {
        const now = new Date();
        const today = new Date();
        today.setHours(0, 0, 0, 0); 
      
        const time = now.toLocaleTimeString("en-US", {
          hour: "2-digit",
          minute: "2-digit",
          hour12: true,
        });
        const datePart = now.toDateString() === today.toDateString()
          ? "Today"
          : now.toLocaleDateString("en-US");
      
        return `${datePart} ${time}`;
      }
    
    const history = document.getElementById('history');
      
    
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

                const newHistory = document.createElement("div");
                newHistory.innerHTML = `
                <div class="flex justify-between items-center text-white px-4 py-2 rounded-md shadow-sm bg-green-700">
                    <div class="flex items-center gap-6">
                        <div class="bg-white p-3 rounded-full">
                            <img class="w-[25px]" src="images/transactions.png" alt="">
                        </div>
                        <div>
                            <h3 class="text-[18px] font-[600] ">Add Money</h3>
                            <p class="text-[14px] text-[400] opacity-90">Amount : ${amount}</p>
                            <p class="text-[12px] opacity-80 font-[400]">${getFormattedDate()}</p>
                        </div>
                    </div>
                    <div class="cursor-pointer">
                        <i class="fas fa-ellipsis-v"></i>
                    </div>
                </div>
                `
                history.prepend(newHistory)
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

