import React, { useState, useEffect } from 'react';
import CityCard from './CityCard';
import { getCityWeather } from '../api/api';

function WeatherPage() {
  const [weatherData, setWeatherData] = useState([]);
  const cities = ['Paris', 'Londres', 'New York', 'Tokyo', 'Berlin'];

  useEffect(() => {
    const fetchWeatherData = async () => {
      try {
        const responses = await Promise.all(cities.map((city) => getCityWeather(city)));
        setWeatherData(responses);
      } catch (error) {
        console.error('Erreur lors de la récupération des données météo :', error);
      }
    };

    fetchWeatherData();
  }, []);

  return (
    <div className="weather-page">
      {cities.map((city, index) => (
        <CityCard key={index} city={city} weatherData={weatherData[index]} />
      ))}
    </div>
  );
}

export default WeatherPage;
