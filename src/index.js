function updateTime() {
  let londonDateElement = document.querySelector("#london-date");
  let londonTimeElement = document.querySelector("#london-time");
  let londonTime = moment.tz("Europe/London");

  londonDateElement.innerHTML = londonTime.format("Mo MMMM YYYY");
  londonTimeElement.innerHTML = londonTime.format(
    "h:mm:ss [<small>]A[</small>]",
  );

  let hobartDateElement = document.querySelector("#hobart-date");
  let hobartTimeElement = document.querySelector("#hobart-time");
  let hobartTime = moment.tz("Australia/Hobart");

  hobartDateElement.innerHTML = hobartTime.format("Mo MMMM YYYY");
  hobartTimeElement.innerHTML = hobartTime.format(
    "h:mm:ss [<small>]A[</small>]",
  );
}

updateTime();
setInterval(updateTime, 1000);
