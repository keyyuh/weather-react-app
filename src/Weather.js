import React, { useState } from "react";
import "./Weather.css";
import axios from "axios";

export default function Weather() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState({});
  const [load, setLoad] = useState(false);

  function displayWeather(response) {
    setWeather({
      temp: response.data.main.temp,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      description: response.data.weather[0].description,
    });
  }

  function handleSubmit(event) {
    setLoad(true);
    event.preventDefault();
    const apiKey = `2a47b687e58bcb415fc20ba1bc5a6217`;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`;
    axios.get(url).then(displayWeather);
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
      <input type="button" className="current-location" value="📍" />
    </form>
  );
  if (load) {
    return (
      <div className="container">
        <div className="Weather">
          <div className="form">{form}</div>
          <div className="city-name">{city}</div>
          <div className="row">
            <div className="col-6">
              <span className="time"></span>
              <span className="current-weather">{weather.description}</span>
            </div>
            <div className="col-6">
              <div className="humidity">Humidity: {weather.humidity}%</div>
              <div className="wind">Wind: {Math.round(weather.wind)}mph</div>
            </div>
            <div className="col">
              <span className="current-temp temp">
                {Math.round(weather.temp)}
              </span>
              <span className="units">
                {" "}
                <a href="#" className="metric-temp">
                  °C{" "}
                </a>
              </span>{" "}
              <span className="break">|</span>
              <span className="units">
                <a href="#" className="imperial-temp">
                  °F
                </a>
              </span>
              <div className="weather-icon">☁️</div>
            </div>
          </div>
          <span>
            <a
              href="https://github.com/keyyuh/weather-react"
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
  } else
    return (
      <div className="Weather">
        {form}
        <h1 className="text-center">Please enter a city...</h1>
        <span>
          <a
            href="https://github.com/keyyuh/weather-react"
            className="code-source"
            target="_blank"
            rel="noopener noreferrer"
          >
            Open-sourced
          </a>{" "}
          code by Kea Doolittle
        </span>
      </div>
    );
}
