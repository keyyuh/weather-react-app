import React from "react";
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
          <span className="maxTemp">34°F </span>
          <span className="minTemp">21°F</span>
        </div>
      </div>
    </div>
  );
}
