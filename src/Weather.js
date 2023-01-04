import React, { useState } from "react";
import "./Weather.css";
import WeatherData from "./WeatherData";
import Forecast from "./Forecast";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Weather(props) {
  const [city, setCity] = useState(props.city);
  const [weather, setWeather] = useState({ ready: false });

  function displayWeather(response) {
    setWeather({
      ready: true,
      coords: response.data.coord,
      city: response.data.name,
      date: new Date(response.data.dt * 1000),
      temp: response.data.main.temp,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      icon: response.data.weather[0].icon,
      description: response.data.weather[0].description,
    });
  }

  function searchCity() {
    const apiKey = `2a47b687e58bcb415fc20ba1bc5a6217`;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`;
    axios.get(url).then(displayWeather);
  }

  function handleSubmit(event) {
    event.preventDefault();
    searchCity();
  }

  function updateCity(event) {
    setCity(event.target.value);
  }
  const form = (
    <form className="search-bar" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Search for a city..."
        className="city-input"
        onChange={updateCity}
      />
      <input type="submit" className="searchbtn" value="Search" />
    </form>
  );
  if (weather.ready) {
    return (
      <div className="container">
        <div className="Weather">
          <div className="form">{form}</div>
          <WeatherData data={weather} />
          <Forecast coords={weather.coords} />
          <span>
            <a
              href="https://github.com/keyyuh/weather-react-app"
              className="code-source"
              target="_blank"
              rel="noopener noreferrer"
            >
              Open-sourced
            </a>{" "}
            code by Kea Doolittle
          </span>
        </div>
      </div>
    );
  } else {
    return searchCity();
  }
}
