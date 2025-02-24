document.getElementById('login').addEventListener("click" , function(event){
    event.preventDefault();
    
    const number = document.getElementById('number').value;
    const pin = document.getElementById('pin').value;
    
    
    if(number && pin){
        
        if(number === '01813606468' && pin === '1234'){
            window.location.href = "../main.html"
        }
        
    }
    else{
        alert("Fill The form")
    }
    
    
})