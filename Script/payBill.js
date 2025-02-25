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

                const newHistoryHTML = `
                <div class="flex justify-between items-center text-white px-4 py-2 rounded-md shadow-sm bg-red-700">
                    <div class="flex items-center gap-6">
                        <div class="bg-white p-3 rounded-full">
                            <img class="w-[25px]" src="images/transactions.png" alt="">
                        </div>
                        <div>
                            <h3 class="text-[18px] font-[600] ">Bill Paid</h3>
                            <p class="text-[14px] text-[400] opacity-90">Bill : ${Paybank}</p>
                            <p class="text-[14px] text-[400] opacity-90">Biller Number : ${PayaddMoneyNumber}</p>
                            <p class="text-[14px] text-[400] opacity-90">Amount Paid: $${Payamount}</p>
                            <p class="text-[12px] opacity-80 font-[400]">${getFormattedDate()}</p>
                        </div>
                    </div>
                    <div id="delete" class="cursor-pointer">
                        <i class="fa-solid fa-trash"></i>
                    </div>
                </div>
                `
                let historyList = JSON.parse(localStorage.getItem('history')) || [];
                historyList.unshift(newHistoryHTML); 
                localStorage.setItem('history', JSON.stringify(historyList)); 
                displayHistory();
            }
        }
        else{
            alert("Fill the full form.")
        }
    }
})


function displayHistory() {
    const historyContainer = document.getElementById('history');
    historyContainer.innerHTML = ""; 

    let historyList = JSON.parse(localStorage.getItem('history')) || [];
    historyList.forEach(entryHTML => {
        const historyDiv = document.createElement("div");
        historyDiv.innerHTML = entryHTML;
        historyContainer.prepend(historyDiv);
    });
}


window.addEventListener('load', function () {
    let balance = localStorage.getItem('balance');
    document.getElementById('balance').innerHTML = balance ? parseFloat(balance) : 50000;

    displayHistory(); 
});