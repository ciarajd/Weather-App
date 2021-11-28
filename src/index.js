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
  axios.get(apiUrl).then(showTime);
}

function showTime(response) {
  console.log(response.data.dt * 1000);
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

navigator.geolocation.getCurrentPosition(getPosition);
