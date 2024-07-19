const apiKey = "b934a9a36f550da8999b3377ea85daa3";

// Function to fetch weather data and update DOM
function getWeather() {
    const city = document.getElementById('city-Name').value.trim(); // Get the city name from input
    if (!city) {
        alert('Please enter a city');
        return;
    }

    const currentWeatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    fetch(currentWeatherUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            displayWeather(data); // Call function to display weather data
        })
        .catch(error => {
            console.error('Error fetching current weather data:', error);
            alert('Error fetching current weather data. Please try again later.');
        });
}
// Function to display weather data
function displayWeather(data) {
    const weatherDisplay = document.getElementById("weather-display");

    // Clear previous data
    weatherDisplay.innerHTML = '';

    // Extract relevant data from the API response
    const cityName = data.name;
    const temperature = data.main.temp;
   
    // Create and append elements to display
    const cityElement = document.createElement("h3");
    cityElement.textContent = `Weather in ${cityName}`;

    const tempElement = document.createElement("p");
    tempElement.textContent = `Temperature: ${temperature}°C`;

    weatherDisplay.appendChild(cityElement);
    weatherDisplay.appendChild(tempElement);
     
}

// Event listener for button click to fetch weather data
const getWeatherBtn = document.getElementById("get-Location");
getWeatherBtn.addEventListener("click", getWeather);

// Replace with your OpenWeatherMap API key
 

// Fetch weather data from OpenWeatherMap API
function fetchWeather(cityId, cityName) {
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?id=${cityId}&appid=${apiKey}&units=metric`;

    fetch(apiUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            // Update DOM with weather information
            const temperature = Math.round(data.main.temp);
            const description = data.weather[0].description;

            const temperatureElement = document.getElementById(`${cityName.toLowerCase()}-temperature`);
            const descriptionElement = document.getElementById(`${cityName.toLowerCase()}-description`);

            temperatureElement.textContent = `Temperature: ${temperature}°C`;
            descriptionElement.textContent = description.charAt(0).toUpperCase() + description.slice(1);
        })
        .catch(error => {
            console.error('Error fetching weather data:', error);
        });
}

// Call fetchWeather for each city
fetchWeather(184745, 'Nairobi'); // Nairobi
fetchWeather(152224, 'Mombasa'); // Mombasa
fetchWeather(198629, 'Eldoret'); // Eldoret
// Function to display weather data and clothing recommendations
function displayWeather(data) {
    const weatherDisplay = document.getElementById("weather-display");

    // Clear previous data
    weatherDisplay.innerHTML = '';

    // Extract relevant data from the API response
    const cityName = data.name;
    const temperature = Math.round(data.main.temp);

    // Display weather information
    const cityElement = document.createElement("h3");
    cityElement.textContent = `Weather in ${cityName}`;

    const tempElement = document.createElement("p");
    tempElement.textContent = `Temperature: ${temperature}°C`;

    weatherDisplay.appendChild(cityElement);
    weatherDisplay.appendChild(tempElement);

    // Determine clothing recommendation based on temperature
    let clothingRecommendation = 'Sportswear';
    if (temperature < 17) {
        clothingRecommendation = 'Sportswear';
    } else if (temperature >= 18 && temperature <= 21) {
        clothingRecommendation = 'Formal Wear';
    } else {
        clothingRecommendation = 'Casual Wear';
    }

    // Display clothing recommendation
    const clothingSuggestions = document.getElementById("clothing-suggestions");
    clothingSuggestions.textContent = ` ${clothingRecommendation}`;
}

// Event listener for button click to fetch weather data
getWeatherBtn.addEventListener("click", getWeather);

 
