const start = document.getElementById('start');
const stop = document.getElementById('stop');
const reset = document.getElementById('reset');
const timeArea = document.getElementById('time');

let time = 0;
let timeId = null;

start.addEventListener('click', (event) => {
 if(timeId !==null){return;}
 timeId = setInterval(() => {
 time += 100;
 timeArea.innerHTML =formatTime(time);
}, 100);
});

stop.addEventListener('click', (event) => {
  clearInterval(timeId);
  timeId = null;
});

reset.addEventListener('click', (event) => {
 clearInterval(timeId);
timeArea.innerHTML = '00:00.00';
time = 0;
});



function formatTime(time){
  let msec = time%  1000;
  let tempSec = Math.floor(time/1000);
  let sec = tempSec%60;
  let min = Math.floor(tempSec/60);
  
  let strSmin = zeroPadding(Math.floor(msec/10));
  let strSec = zeroPadding(sec);
  let strMin = zeroPadding(min);
  
  return strMin+':'+strSec+'.'+strSmin;
}

function zeroPadding(value){
 if (value<10){
 return'0'+value;
  }else{
    return value;
  }
  }

