// Replace 'YOUR_API_KEY' with your actual API key from OpenWeatherMap
const apiKey = 'YOUR_API_KEY';

// Elements
const locationInput = document.getElementById('location-input');
const searchButton = document.getElementById('search-button');
const locationName = document.getElementById('location-name');
const temperature = document.getElementById('temperature');
const weatherDescription = document.getElementById('weather-description');
const weatherIcon = document.getElementById('weather-icon');

// Event listener for the search button
searchButton.addEventListener('click', () => {
    const location = locationInput.value.trim();
    if (location !== '') {
        fetchWeatherData(location);
    }
});

// Function to fetch weather data from the API
function fetchWeatherData(location) {
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=${apiKey}`;

    fetch(apiUrl)
        .then((response) => response.json())
        .then((data) => {
            displayWeatherData(data);
        })
        .catch((error) => {
            console.error('Error fetching weather data:', error);
        });
}

// Function to display weather data
function displayWeatherData(data) {
    locationName.textContent = data.name;
    temperature.textContent = `${Math.round(data.main.temp)}°C`;
    weatherDescription.textContent = data.weather[0].description;
    const iconUrl = `http://openweathermap.org/img/w/${data.weather[0].icon}.png`;
    weatherIcon.src = iconUrl;
}
