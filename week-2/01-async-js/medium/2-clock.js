let hr=0;
let min=59;
let sec=58;

function clock() {
    if(sec==60){
        sec=0;
        min++;
    }
    if(min==60){
        min=0;
        hr++;
    }
    if(hr==24){
        hr=0;
    }
    console.log((hr < 10 ? "0" + hr : hr) + ":" + (min < 10 ? "0" + min : min) + ":" + (sec < 10 ? "0" + sec : sec));
    sec++;
}

setInterval(clock, 1000)