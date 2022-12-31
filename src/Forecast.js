import React, { useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import WeatherIcons from "./WeatherIcons";

export default function Forecast() {
  return (
    <div className="Forecast">
      <div className="row">
        <div className="col-2">
          <div className="forecastDay text-center">WED</div>
          <div className="weather-icon">
            <WeatherIcons code="01d" size={42} />
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = `d2cedbb372adaa0c4843ae0962e9e2dd`;
    const latitude = props.coords.lat;
    const longitude = props.coords.lon;
    const url = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
    axios.get(url).then(showForecast);
    return null;
  }
}
