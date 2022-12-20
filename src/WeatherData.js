import React from "react";
import WeatherIcons from "./WeatherIcons";
import "bootstrap/dist/css/bootstrap.min.css";
import TempConversion from "./TempConversion";

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
            <TempConversion celsius={props.data.temp} />
            <div className="weather-icon">
              <WeatherIcons code={props.data.icon} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
