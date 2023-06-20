//your JS code here. If required.
function updateTime() {
  const now = new Date();
  const dateTimeString = now.toLocaleString();
  document.getElementById("timer").innerText = dateTimeString;
}

setInterval(updateTime, 1000);//your JS code here. If required.
