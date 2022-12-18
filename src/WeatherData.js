import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export default function WeatherInfo(props) {
  return (
    <div className="container">
      <div className="WeatherData">
        <div className="city-name">{props.data.city}</div>
        <div className="row">
          <div className="col-6">
            <span className="time"></span>
            <span className="current-weather">{props.data.description}</span>
          </div>
          <div className="col-6">
            <div className="humidity">Humidity: {props.data.humidity}%</div>
            <div className="wind">Wind: {Math.round(props.data.wind)}mph</div>
          </div>
          <div className="col">
            <span className="current-temp temp">
              {Math.round(props.data.temp)}
            </span>
            <span className="units">°C</span>
            <span className="break">|</span>
            <span className="units">°F</span>
            <div className="weather-icon">☁️</div>
          </div>
        </div>
      </div>
    </div>
  );
}
