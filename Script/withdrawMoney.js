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

    if(agentNumber && amountWithdraw){
        if(withdrawPin === 1234){
            balance -= amountWithdraw;
            alert(`Cash out amount $${amountWithdraw} . Now Balance $${balance}`)
            document.getElementById('balance').innerHTML = balance;
            localStorage.setItem('balance', balance);

            const newHistoryHTML = `
                <div class="flex justify-between items-center text-white px-4 py-2 rounded-md shadow-sm bg-red-700">
                    <div class="flex items-center gap-6">
                        <div class="bg-white p-3 rounded-full">
                            <img class="w-[25px]" src="images/transactions.png" alt="">
                        </div>
                        <div>
                            <h3 class="text-[18px] font-[600] ">Cash Out Money</h3>
                            <p class="text-[14px] text-[400] opacity-90">Agent Number : 0${agentNumber}</p>
                            <p class="text-[14px] text-[400] opacity-90">Amount : $${amountWithdraw}</p>
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
        alert("Fill The Form")
    }
})


// Function to display stored history on page load
function displayHistory() {
    const historyContainer = document.getElementById('history');
    historyContainer.innerHTML = ""; // Clear existing UI history

    let historyList = JSON.parse(localStorage.getItem('history')) || [];
    historyList.forEach(entryHTML => {
        const historyDiv = document.createElement("div");
        historyDiv.innerHTML = entryHTML;
        historyContainer.prepend(historyDiv);
    });
}

// Load balance and history when the page loads
window.addEventListener('load', function () {
    let balance = localStorage.getItem('balance');
    document.getElementById('balance').innerHTML = balance ? parseFloat(balance) : 50000;

    displayHistory(); // Display stored history on load
});