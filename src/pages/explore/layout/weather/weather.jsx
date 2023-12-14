import React, { useState, useEffect } from 'react';
import axios from 'axios';

import './weather.scss'

const formatDate = (date) => {
    const day = date.getDate().toString().padStart(2, '0');
    const monthNames = [
      'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
      'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
    ];
    const monthIndex = date.getMonth();
    const year = date.getFullYear().toString().slice(-2);
  
    return `${day} ${monthNames[monthIndex]} ${year}`;
  };

function Weather() {

  const [cityName,setCityName] = useState('Fianarantsoa')
  const [weatherData, setWeatherData] = useState(null);
  const API_KEY = '71365d995c2aac088edc5415216f6b24';

  const fetchWeatherData = async () => {
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}&units=metric&lang=fr`
      );
      setWeatherData(response.data);
    } catch (error) {
      console.error('Error fetching weather data:', error);
    }
  };

  useEffect(() => {
    fetchWeatherData();
  }, []); 

  // Vérifiez si les données météo ont été récupérées avant de les afficher
  if (!weatherData) {
    return <div className='weather-container'>Chargement du méteo...</div>;
  }

  const handleCityName = (e) => {
    setCityName(e.target.value);
    fetchWeatherData();
  };

    // Extraire les données pertinentes
    const temperature = weatherData.main.temp;
    const weatherDescription = weatherData.weather[0].description;
    const weatherIconCode = weatherData.weather[0].icon;
    const humidity = weatherData.main.humidity;
    const speed = weatherData.wind.speed;
    const sys = weatherData.sys;
    const sunrise = weatherData.sys.sunrise;
    const sunset = weatherData.sys.sunset;

    const weatherIconUrl = `http://openweathermap.org/img/w/${weatherIconCode}.png`;

  return (
    <div className='weather-container'>
      <h1>Méteo</h1>
      <div className="info">
        <p className="weather-day">Aujourd'hui</p>
        <p className="weather-date">{formattedDate}</p>
        <p className="weather-location">
            {cityName}, {sys.country}
        </p>
      </div>
      <div className="weather-temperature">
        <img src={weatherIconUrl} alt="Weather Icon" />
        <strong className="temperature-value"> {temperature}ºC</strong> <br/>
        <p className="temperature-description">{weatherDescription}</p>
      </div>
      <div className="weather-temperature">
        <img src={weatherIconUrl} alt="Weather Icon" />
        <strong className="temperature-value">Humidité : {humidity} %</strong> <br/>
      </div>
      <div className="weather-temperature">
        <img src={weatherIconUrl} alt="Weather Icon" />
        <strong className="temperature-value">Vitesse du vent : {speed} m/s</strong> <br/>
      </div>

      <div className="weather-temperature">
        <img src={weatherIconUrl} alt="Weather Icon" />
        <strong className="temperature-value">Lever du soleil : {new Date(sunrise * 1000).toLocaleTimeString()}</strong> <br/>
      </div>

      <div className="weather-temperature">
        <img src={weatherIconUrl} alt="Weather Icon" />
        <strong className="temperature-value">Coucher du soleil: {new Date(sunset * 1000).toLocaleTimeString()}</strong> <br/>
      </div>
    </div>
  )
}

export default Weather
