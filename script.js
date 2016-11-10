var a = 0;
var b = 1;
var c = 1;
var start = document.getElementById("start");
var stop = document.getElementById("stop");

function timer(){
    document.getElementById('para1').innerHTML = a++;
    if (a>59){
        a = 0;
        document.getElementById('para2').innerHTML = b++;
        if(b>59){
            b = 0;
            document.getElementById('para3').innerHTML = c++;
        }
    }
}

var ci;
start.onclick = function(){
    a = 0; b = 1; c = 1;
    ci = setInterval(timer,1000);
    this.disabled = true;
}

stop.onclick = function(){
    a = 0; b = 0; c = 0;
    clearInterval(ci);
    document.getElementById('para1').innerHTML = 0;
    document.getElementById('para2').innerHTML = 0;
    document.getElementById('para3').innerHTML = 0;
    start.disabled = false;
}

function stopFuncButton(){
    //setInterval(stopFunc,1);
}

// function mins(){
//     if(a > 59){
//         document.getElementById('para2').innerHTML = b++;
//     }
// }
// setInterval(mins,100);
// setInterval()