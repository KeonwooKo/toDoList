const clock = document.querySelector("h2#clock");

function getClock() {
  var day_array = new Array(
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  );
  var month_array = new Array(
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  );
  const today = new Date();
  const hours = String(today.getHours()).padStart(2, "0");
  const minutes = String(today.getMinutes()).padStart(2, "0");
  const seconds = String(today.getSeconds()).padStart(2, "0");
  const year = today.getFullYear();
  const month = today.getMonth() + 1;
  const month_label = month_array[month];
  const day = today.getDay();
  const day_label = day_array[day];
  const date = today.getDate();

  clock.innerText = `${year} ${month_label},${date} ${day_label}`;
  // clock.innerText = `${hours}:${minutes}:${seconds}`;
}

getClock();
setInterval(getClock, 1000);
