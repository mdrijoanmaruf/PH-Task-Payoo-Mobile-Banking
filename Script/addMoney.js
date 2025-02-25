document.getElementById('add').addEventListener('click', function (e) {
    e.preventDefault();

    // Retrieve balance from localStorage and ensure it's a number
    let balance = parseFloat(localStorage.getItem('balance')) || 50000;

    let amount = parseFloat(document.getElementById('amount').value);
    let bank = document.getElementById('bank').value;
    let addMoneyNumber = parseFloat(document.getElementById('addMoneyNumber').value);
    let addMoneyPin = parseFloat(document.getElementById('addMoneyPin').value);

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

    if (bank === 'Select Bank') {
        alert("Select Your Bank");
        return;
    }

    if (!addMoneyNumber || !amount) {
        alert("Fill the full form.");
        return;
    }

    if (addMoneyPin === 1234) {
        balance += amount;
        alert(`Added ${amount}$ to your Balance`);
        
        document.getElementById('balance').innerHTML = balance;
        localStorage.setItem('balance', balance.toString());

        const newHistoryHTML = `
            <div class="flex justify-between items-center text-white px-4 py-2 rounded-md shadow-sm bg-green-700">
                <div class="flex items-center gap-6">
                    <div class="bg-white p-3 rounded-full">
                        <img class="w-[25px]" src="images/transactions.png" alt="">
                    </div>
                    <div>
                        <h3 class="text-[18px] font-[600] ">Add Money</h3>
                        <p class="text-[14px] text-[400] opacity-90">Bank : ${bank} </p>
                        <p class="text-[14px] text-[400] opacity-90">Amount: $${amount}</p>
                        <p class="text-[12px] opacity-80 font-[400]">${getFormattedDate()}</p>
                    </div>
                </div>
                <div id="delete" class="cursor-pointer">
                    <i class="fa-solid fa-trash"></i>
                </div>
            </div>
        `;

        let historyList = JSON.parse(localStorage.getItem('history')) || [];
        historyList.unshift(newHistoryHTML); 
        localStorage.setItem('history', JSON.stringify(historyList)); 
        displayHistory();
    } else {
        alert("Incorrect PIN!");
    }
});

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
    let balance = parseFloat(localStorage.getItem('balance')) || 50000;
    document.getElementById('balance').innerHTML = balance;
    displayHistory(); 
});
