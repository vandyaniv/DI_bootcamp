// CityCard.jsx
import React from 'react';

function CityCard({ city, weatherData }) {
  if (!weatherData) {
    return <p>Chargement des données pour {city}...</p>;
  }

  return (
    <div className="city-card">
      <h3>{city}</h3>
      <p>Température : {weatherData.temp}°C</p>
      <p>Météo : {weatherData.weather}</p>
    </div>
  );
}

export default CityCard;
