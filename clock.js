function showTime() {
  const date = new Date();
  let h = date.getHours(); //0-23
  let m = date.getMinutes(); //0-59
  let s = date.getSeconds(); //0-59
  let session = "AM";

  if (h == 0) {
    h = 12;
  }

  if (h > 12) {
    h = h - 12;
    session = "PM";
  }

  h = h < 10 ? "0" + h : h;
  m = m < 10 ? "0" + m : m;
  s = s < 10 ? "0" + s : s;

  let time = h + ":" + m + ":" + s + ":" + session;
  document.getElementById("MyClockDisplay").innerText = time; //The innerText property sets or returns the text content of specified node and all its descendants
  document.getElementById("MyClockDisplay").textContent = time; //The textContent property returns the content of all elemetns and differes from innerText since this returns the content of all elements except for <script> and <style> elements

  setTimeout(showTime, 1000); //setTimeout calls a function (showTime) after a number of milliseconds (1000)
}

showTime();
