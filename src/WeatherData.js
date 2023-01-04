import React from "react";
import "./Weather.css";
import WeatherIcons from "./WeatherIcons";
import "bootstrap/dist/css/bootstrap.min.css";
import FormatDate from "./FormatDate";

export default function WeatherData(props) {
  return (
    <div className="WeatherData">
      <div className="city-name">{props.data.city}</div>
      <div className="row">
        <div className="col-6">
          <div className="time">
            <FormatDate date={props.data.date} />
          </div>
          <span className="current-weather">{props.data.description}</span>
        </div>
        <div className="col">
          <div className="humidity">Humidity: {props.data.humidity}%</div>
          <div className="wind">Wind: {Math.round(props.data.wind)}mph</div>
        </div>
        <div className="col weather-display">
          <span className="current-temp">
            {Math.round(props.data.temp)}
            <span className="unit">°F</span>
          </span>
          <div className="weather-icon">
            <WeatherIcons code={props.data.icon} size={50} />
          </div>
        </div>
      </div>
    </div>
  );
}
