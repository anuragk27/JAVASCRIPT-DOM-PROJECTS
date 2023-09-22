const clock=document.getElementById('clock');
//We can use any selector 

setInterval(function(){
    let date = new Date();
    clock.innerHTML = date.toLocaleTimeString();
},1000)
//Interval 1000 = 1 sec 