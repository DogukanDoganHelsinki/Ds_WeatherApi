const URL = "https://api.openweathermap.org/data/2.5/";
const KEY = "cf235557c940df55f4f6b2dbd3c78d30";

const setQuery = (e) => {
  if (e.keyCode == "13") {
    getResult(searchBar.value);
  }
};

const getResult = (cityName) => {
  let query = `${URL}weather?q=${cityName}&appid=${KEY}&units=metric`;
  fetch(query)
    .then((weather) => {
      return weather.json();
    })
    .then(displayResult);
};
const displayResult = (weather) => {
  let city = document.querySelector(".city");
  city.innerHTML = `${weather.name}, ${weather.sys.country}`;

  let temp = document.querySelector(".temp");
  temp.innerHTML = `${Math.round(weather.main.temp)}°C`;

  let desc = document.querySelector(".desc");
  desc.innerHTML = weather.weather[0].description;

  let minmax = document.querySelector(".minmax");
  minmax.innerHTML = `${Math.round(weather.main.temp_min)}°C /
  ${Math.round(weather.main.temp_max)}°C 
  `;
};

const searchBar = document.getElementById("searchBar");
searchBar.addEventListener("keypress", setQuery);
