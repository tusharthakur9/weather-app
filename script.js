const apiKey = "e2bea9b40e30bafbd555518e95cc3877"; // Replace with your OpenWeatherMap API key

const form = document.getElementById("weatherForm");
const cityInput = document.getElementById("cityInput");
const weatherResult = document.getElementById("weatherResult");

const cityName = document.getElementById("cityName");
const temperature = document.getElementById("temperature");
const condition = document.getElementById("condition");
const humidity = document.getElementById("humidity");
const wind = document.getElementById("wind");

form.addEventListener("submit", async function (e) {
  e.preventDefault();
  const city = cityInput.value.trim();
  if (city === "") return;

  try {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    const response = await fetch(url);
    if (!response.ok) throw new Error("City not found");
    const data = await response.json();

    cityName.textContent = `${data.name}, ${data.sys.country}`;
    temperature.textContent = `🌡️ Temperature: ${data.main.temp}°C`;
    condition.textContent = `🌥️ Weather: ${data.weather[0].description}`;
    humidity.textContent = `💧 Humidity: ${data.main.humidity}%`;
    wind.textContent = `💨 Wind Speed: ${data.wind.speed} m/s`;

    weatherResult.classList.remove("hidden");
  } catch (error) {
    alert(error.message);
    weatherResult.classList.add("hidden");
  }
});
