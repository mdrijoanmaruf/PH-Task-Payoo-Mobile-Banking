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

    if(userNumber && transferAmount){
        if(transferPin === 1234){
            balance -= transferAmount;
            alert(`Amount transfer to "${userNumber}" $${transferAmount} . Now Balance $${balance}`)
            document.getElementById('balance').innerHTML = balance;
            localStorage.setItem('balance', balance);


            const newHistoryHTML = `
                <div class="flex justify-between items-center text-white px-4 py-2 rounded-md shadow-sm bg-red-700">
                    <div class="flex items-center gap-6">
                        <div class="bg-white p-3 rounded-full">
                            <img class="w-[25px]" src="images/transactions.png" alt="">
                        </div>
                        <div>
                            <h3 class="text-[18px] font-[600] ">Transfer Money</h3>
                            <p class="text-[14px] text-[400] opacity-90">User Account : 0${userNumber}</p>
                            <p class="text-[14px] text-[400] opacity-90">Amount : $${transferAmount}</p>
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