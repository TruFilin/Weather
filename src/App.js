import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CitySelector from './components/CitySelector';
import './App.css';
const App = () => {
  const [cities] = useState(['Moscow', 'Saint Petersburg', 'Novosibirsk']);
  const [selectedCity, setSelectedCity] = useState(cities[0]);
  const [weatherData, setWeatherData] = useState(null);

  const fetchWeatherData = (city) => {
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${city.lat}&lon=${city.lon}&appid=9aa1b17f8f228536e88571f87d554aec&units=metric&lang=ru`;

    axios.get(url)
      .then((response) => {
        setWeatherData(response.data);
      })
      .catch((error) => {
        console.error('Error fetching the weather data:', error);
      });
  };

  useEffect(() => {
    const cityCoordinates = {
      Moscow: { lat: 55.7558, lon: 37.6173 },
      'Saint Petersburg': { lat: 59.9343, lon: 30.3351 },
      Novosibirsk: { lat: 55.0084, lon: 82.9357 },
    };
    fetchWeatherData(cityCoordinates[selectedCity]);
  }, [selectedCity]);

  return (
    <div>
      <h1>Погода в {selectedCity}</h1>
      <CitySelector cities={cities} onSelect={setSelectedCity} />
      {weatherData && (
        <div>
          <h2>Сейчас</h2>
          <p>Температура: {weatherData.main.temp} °C</p>
          <h2>Описание</h2>
          <p>{weatherData.weather[0].description}</p>
        </div>
      )}
    </div>
  );
};

export default App;
