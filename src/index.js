function getPosition(position) {
  let lat = position.coords.latitude;
  console.log(lat);
  let lon = position.coords.longitude;
  console.log(lon);
  let apiKey = "c460a0191ef2deba888e12c08c660373";
  let units = "metric";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=${units}`;
  axios.get(apiUrl).then(defaultDisplay);
}

function defaultDisplay(response) {
  let currentLocation = document.querySelector("h3");
  currentLocation.innerHTML = response.data.name;
  console.log(currentLocation);
  let currentTemperature = Math.round(response.data.main.temp);
  let tempDisplay = document.querySelector("#main-temp");
  tempDisplay.innerHTML = `${currentTemperature}&#176;`;
  let description = document.querySelector("#main-description");
  description.innerHTML = response.data.weather[0].description;
  console.log(response.data.wind.speed);
  let windSpeed = document.querySelector("#wind");
  windSpeed.innerHTML = `Wind Speed: ${Math.round(
    response.data.wind.speed
  )}mph`;
  console.log(windSpeed);
  let minTemp = document.querySelector("#low");
  minTemp.innerHTML = `Low: ${Math.round(response.data.main.temp_min)}&#176`;
  console.log(minTemp);
  let maxTemp = document.querySelector("#high");
  maxTemp.innerHTML = `High: ${Math.round(response.data.main.temp_max)}&#176`;
  console.log(maxTemp);
  let sunrise = document.querySelector("#sunrise");
  sunrise.innerHTML = `Sunrise: ${response.data.sys.sunrise}`;
  console.log(sunrise);
  let sunset = document.querySelector("#sunset");
  sunset.innerHTML = `Sunset: ${response.data.sys.sunset}`;
  console.log(sunset);
}

let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let months = [
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
  "December",
];
let now = new Date();
console.log(now);
let milliseconds = now.getMilliseconds();
console.log(milliseconds);
let hour = now.getHours();
console.log(hour);
let minutes = now.getMinutes();
console.log(minutes);
let currentDay = days[now.getDay()];
console.log(currentDay);
let currentYear = now.getFullYear();
console.log(currentYear);
let currentMonth = months[now.getMonth()];
console.log(currentMonth);
let date = now.getDate();
console.log(date);

let currentDate = document.querySelector("h1");
currentDate.innerHTML = `${currentDay} ${date} ${currentMonth}`;

let currentTime = document.querySelector("h2");
currentTime.innerHTML = `${hour}:${minutes}`;

let searchCity = document.querySelector("form");
console.log(searchCity);
searchCity.addEventListener("submit", search);

function displayForecast(response) {
  console.log(response.data.daily);
  // descriptions //
  let dayOneDescription = response.data.daily[1].weather[0].description;
  let dayTwoDescription = response.data.daily[2].weather[0].description;
  let dayThreeDescription = response.data.daily[3].weather[0].description;
  let dayFourDescription = response.data.daily[4].weather[0].description;
  // temperatures //
  let dayOneTempMax = Math.round(response.data.daily[1].temp.max);
  let dayOneTempMin = Math.round(response.data.daily[1].temp.min);
  let dayTwoTempMax = Math.round(response.data.daily[2].temp.max);
  let dayTwoTempMin = Math.round(response.data.daily[2].temp.min);
  let dayThreeTempMax = Math.round(response.data.daily[3].temp.max);
  let dayThreeTempMin = Math.round(response.data.daily[3].temp.min);
  let dayFourTempMax = Math.round(response.data.daily[4].temp.max);
  let dayFourTempMin = Math.round(response.data.daily[4].temp.min);
  //icons & HTML//
  let iconElementOne = document.querySelector(".forecast-day-one");
  let iconCodeOne = response.data.daily[1].weather[0].icon;
  console.log(iconCodeOne);
  iconElementOne.innerHTML = `
    <div class="card forecast-day-one">
  <img class="icon-1" src="http://openweathermap.org/img/wn/${iconCodeOne}@2x.png" alt="Card image cap" width="100">
  <div class="card-body">
    <h5 class="card-title forecast-date">Sunday 17th October</h5>
    <h6 class="card-subtitle text-muted forecast-description" id="description-one"> ${dayOneDescription}</h6>
    <p class= "forecast-temperature" id="temp-one"> ${dayOneTempMax}&#176; / ${dayOneTempMin}&#176;</p>
  </div>
  </div>
  </div>`;
  let iconElementTwo = document.querySelector(".forecast-day-two");
  let iconCodeTwo = response.data.daily[2].weather[0].icon;
  console.log(iconCodeTwo);
  iconElementTwo.innerHTML = `
<div class="card forecast-day-two">
  <img class="icon-2" src="http://openweathermap.org/img/wn/${iconCodeTwo}@2x.png" alt="Card image cap" width="100">
  <div class="card-body">
    <h5 class="card-title forecast-date">Monday 18th October</h5>
    <h6 class="card-subtitle text-muted forecast-description" id="description-two"> ${dayTwoDescription}</h6>
    <p class= "forecast-temperature" id="temp-two"> ${dayTwoTempMax}&#176; / ${dayTwoTempMin}&#176;</p>
  </div>
</div>
</div>`;
  let iconElementThree = document.querySelector(".forecast-day-three");
  let iconCodeThree = response.data.daily[3].weather[0].icon;
  console.log(iconCodeThree);
  iconElementThree.innerHTML = `
<div class="card forecast-day-three">
  <img class="icon-3" src="http://openweathermap.org/img/wn/${iconCodeThree}@2x.png" alt="Card image cap" width="100">
  <div class="card-body">
    <h5 class="card-title forecast-date">Monday 18th October</h5>
    <h6 class="card-subtitle text-muted forecast-description" id="description-three"> ${dayThreeDescription}</h6>
    <p class= "forecast-temperature" id="temp-three"> ${dayThreeTempMax}&#176; / ${dayThreeTempMin}&#176;</p>
  </div>
</div>
</div>`;
  let iconElementFour = document.querySelector(".forecast-day-four");
  let iconCodeFour = response.data.daily[4].weather[0].icon;
  console.log(iconCodeFour);
  iconElementFour.innerHTML = `
<div class="card forecast-day-four">
  <img class="icon-4" src="http://openweathermap.org/img/wn/${iconCodeFour}@2x.png" alt="Card image cap" width="100">
  <div class="card-body">
    <h5 class="card-title forecast-date">Monday 18th October</h5>
    <h6 class="card-subtitle text-muted forecast-description" id="description-four"> ${dayFourDescription}</h6>
    <p class= "forecast-temperature" id="temp-four"> ${dayFourTempMax}&#176; / ${dayFourTempMin}&#176;</p>
  </div>
</div>
</div>`;
}

function getForecast(coordinates) {
  console.log(coordinates);
  let apiKey = "c460a0191ef2deba888e12c08c660373";
  let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${coordinates.lat}&lon=${coordinates.lon}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(displayForecast);
}

function search(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#search-input");
  console.log(searchInput.value);
  let currentLocation = document.querySelector("h3");
  currentLocation.innerHTML = `${searchInput.value}`;
  let apiKey = "c460a0191ef2deba888e12c08c660373";
  let units = "metric";
  let city = searchInput.value;
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;
  axios.get(apiUrl).then(showTemperature);
  axios.get(apiUrl).then(showDetails);
}

function showTemperature(response) {
  console.log(response.data);
  console.log(response.data.main.temp);
  console.log(response.data.weather[0].description);
  let currentTemperature = Math.round(response.data.main.temp);
  console.log(currentTemperature);
  let tempDisplay = document.querySelector("#main-temp");
  tempDisplay.innerHTML = `${currentTemperature}&#176`;
  console.log(tempDisplay);
  let description = document.querySelector("#main-description");
  description.innerHTML = response.data.weather[0].description;
  let celciusTemperature = currentTemperature;
  console.log(celciusTemperature);
  getForecast(response.data.coord);
}

function showDetails(response) {
  console.log(response.data.wind.speed);
  let windSpeed = document.querySelector("#wind");
  windSpeed.innerHTML = `Wind Speed: ${Math.round(
    response.data.wind.speed
  )}mph`;
  console.log(windSpeed);
  let minTemp = document.querySelector("#low");
  minTemp.innerHTML = `Low: ${Math.round(response.data.main.temp_min)}&#176`;
  console.log(minTemp);
  let maxTemp = document.querySelector("#high");
  maxTemp.innerHTML = `High: ${Math.round(response.data.main.temp_max)}&#176`;
  console.log(maxTemp);
  let sunrise = document.querySelector("#sunrise");
  sunrise.innerHTML = `Sunrise: ${response.data.sys.sunrise}`;
  console.log(sunrise);
  let sunset = document.querySelector("#sunset");
  sunset.innerHTML = `Sunset: ${response.data.sys.sunset}`;
  console.log(sunset);
}

function displayFahrenheit(event) {
  event.preventDefault();
  let temperatureElement = document.querySelector("#main-temp");
  let fahrenheitTemperature = (temperatureElement.innerHTML * 9) / 5 + 32;
  temperatureElement.innerHTML = `${Math.round(fahrenheitTemperature)} &#176`;
}

let fahrenheitButton = document.querySelector("#fahrenheit-button");
fahrenheitButton.addEventListener("click", displayFahrenheit);

navigator.geolocation.getCurrentPosition(getPosition);
