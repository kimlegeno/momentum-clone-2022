const API_KEY = "92e79a9e8ca3ef8a903753a40b909904";
const weather = document.querySelector("#weather div span:last-child");
const city = document.querySelector("#weather div span:first-child");

function onGeoOk(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      city.innerText = `도시: ${data.name}`;
      weather.innerText = `날씨: ${data.weather[0].main} 온도: ${data.main.temp}°`;
    });
}
function onGeoErr() {
  city.innerText = "";
  weather.innerText = "I can't give you the weather information";
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoErr);
