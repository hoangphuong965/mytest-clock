function oclock() {
  const date = new Date();

  var hour = date.getHours();
  var min = date.getMinutes();
  var sec = date.getSeconds();

  if (hour < 10) {
    hour = '0' + hour;
  }
  if (min < 10) {
    min = '0' + min;
  }
  if (sec < 10) {
    sec = '0' + sec;
  }

  document.querySelector('.hour').innerHTML = hour + ':';
  document.querySelector('.minute').innerHTML = min + ':';
  document.querySelector('.second').innerHTML = sec;
}

setInterval(oclock, 1000);
