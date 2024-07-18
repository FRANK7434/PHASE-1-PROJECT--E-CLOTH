# E-Cloth Ware Determination APP

This application provides real-time weather updates and clothing recommendations based on weather conditions for selected cities.
## Description
This web application allows users to check real-time weather updates for different cities and receive recommendations on suitable clothing based on weather conditions. It integrates with the OpenWeatherMap API to fetch weather data and uses JavaScript for dynamic content updates.

# Features

- Real-time Weather Updates: Displays current weather conditions (temperature, humidity, wind speed) for a specified city.

- City Weather Overview: Provides a quick overview of weather conditions (icon, temperature, description) for predefined cities (Nairobi, Mombasa, Eldoret).

- Clothing Recommendations: Suggests appropriate clothing items based on the current temperature.

- Weather Updates Alerts: Allows users to set alert preferences (frequency and type) for weather updates.

- Historical Weather Trends Analysis: Displays historical weather trends analysis using interactive charts.

# API Integration

This application integrates with the OpenWeatherMap API to fetch weather data. To obtain an API key and configure the application:

Sign up or log in to OpenWeatherMap and obtain an API key.

Replace 'YOUR_API_KEY' in script.js with your actual API key:

javascript

Copy code

const apiKey = "YOUR_API_KEY";

Ensure your API key has permissions to access current weather data (/data/2.5/weather endpoint).

- My key for this API:"b934a9a36f550da8999b3377ea85daa3"
