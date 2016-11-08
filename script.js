var a = 0;
var b = 1;
var c = 1;
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

function func(){
setInterval(timer,1000);
}

function stopFunc(){
    a = 0;b = 0;c=0;
}

function stopFuncButton(){
    setInterval(stopFunc,1);
}

// function mins(){
//     if(a > 59){
//         document.getElementById('para2').innerHTML = b++;
//     }
// }
// setInterval(mins,100);
// setInterval()