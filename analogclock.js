setInterval(()=>{//to refresh the code after 100 millisecond
    d= new Date();
    hour = d.getHours(); 
    minute = d.getMinutes();   
    second = d.getSeconds(); 
    hour_rotation = 30*hour + minute/2;         
    minute_rotation = 6*minute;	              
    second_rotation = 6*second;
    
    hourHand.style.transform = `rotate(${hour_rotation}deg)`;
    minuteHand.style.transform = `rotate(${minute_rotation}deg)`;
    secondHand.style.transform = `rotate(${second_rotation}deg)`;
 
}, 100)