document.getElementById("search-button").addEventListener("click", function() {
    const locationInput = document.getElementById("location-input").value;
    if (locationInput) {
        fetchWeatherData(locationInput);
    }
});

function fetchWeatherData(city) {
    // Replace with your weather API endpoint
    const apiKey = "YOUR_API_KEY";
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            if (data.name && data.main && data.main.temp) {
                const cityName = document.getElementById("city-name");
                const temperature = document.getElementById("temperature");

                cityName.textContent = data.name;
                temperature.textContent = `Temperature: ${data.main.temp}°C`;
            } else {
                alert("City not found. Please try again.");
            }
        })
        .catch(error => {
            console.error("Error fetching weather data:", error);
            alert("An error occurred. Please try again later.");
        });
}
