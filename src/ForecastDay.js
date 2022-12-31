import React from "react";
import WeatherIcons from "./WeatherIcons";
import "./ForecastDay.css";

export default function ForecastDay(props) {
  function day() {
    const date = new Date(props.data.dt * 1000);
    const days = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
    const day = days[date.getDay()];
    return day;
  }
  return (
    <div className="forecastDay text-center">
      {day()}
      <div className="weather-icon text-center">
        <WeatherIcons code={props.data.weather[0].icon} size={42} />
      </div>
      <div className="temps text-center">
        <span className="maxTemp">{Math.round(props.data.temp.max)}°</span>
        <span className="minTemp">{Math.round(props.data.temp.min)}°</span>
      </div>
    </div>
  );
}
