function updateTime() {
  let londonDateElement = document.querySelector("#london-date");
  if (londonDateElement) {
    let londonTimeElement = document.querySelector("#london-time");
    let currentCityElement = document.querySelector("#current-location");
    let londonTime = moment.tz.guess();
    let currentTime = moment.tz(londonTime);
    let currentCity = londonTime.replace("_", " ").split("/").pop();

    currentCityElement.innerHTML = `<div class="city">
            <span class="material-symbols-outlined"> location_on </span> ${currentCity} </div>`;
    londonDateElement.innerHTML = currentTime.format("Mo MMMM, YYYY");
    londonTimeElement.innerHTML = currentTime.format(
      "h:mm:ss [<small>]A[</small>]",
    );
  }

  let hobartDateElement = document.querySelector("#hobart-date");
  if (hobartDateElement) {
    let hobartTimeElement = document.querySelector("#hobart-time");
    let hobartTime = moment.tz("Australia/Hobart");

    hobartDateElement.innerHTML = hobartTime.format("Mo MMMM, YYYY");
    hobartTimeElement.innerHTML = hobartTime.format(
      "h:mm:ss [<small>]A[</small>]",
    );
  }
}

updateTime();
setInterval(updateTime, 1000);

function updateCity(event) {
  let selectedTimeZone = event.target.value;
  let cityName = selectedTimeZone.replace("_", " ").split("/").pop();
  let selectedTime = moment.tz(selectedTimeZone);
  let citiesElement = document.querySelector("#cities");
  citiesElement.innerHTML = `
    <div>
          <div class="city">
            <span class="material-symbols-outlined"> location_on </span> ${cityName}
          </div>
          <div class="time">${selectedTime.format("h:mm:ss")}<small>${selectedTime.format(" A")}</small></div>
          <div class="date">${selectedTime.format("Mo MMMM, YYYY")}</div>
        </div>
    `;
}

let citySelectElement = document.querySelector("#city-selector");
citySelectElement.addEventListener("change", updateCity);
