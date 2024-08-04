let time = document.querySelector(".time");
let timeformat = document.querySelector(".timeformat");

document.addEventListener("DOMContentLoaded",()=>{
    setInterval(showTime,1000);
})

function showTime(){
    let today = new Date();

    let hr = today.getHours();
    let min = today.getMinutes();
    let sec = today.getSeconds();

    hr = hr<10 ? `0${hr}`: hr;
    min = min<10 ? `0${min}`: min;
    sec = sec<10 ? `0${sec}` : sec;

    time.innerHTML = `${hr}: ${min} : ${sec}`;





    if(time > "12:00:00" || time <= "23:60:60"){
        timeformat.innerHTML = "PM";
    }else{
        timeformat.innerHTML = "AM";
    }
    
}

