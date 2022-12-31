import React, { useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import ForecastDay from "./ForecastDay";

export default function Forecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState(null);
  function showForecast(response) {
    setForecast(response.data.daily);
    setLoaded(true);
  }

  if (loaded) {
    return (
      <div className="Forecast">
        <div className="row">
          {forecast.map(function (dailyData, index) {
            if (index < 6) {
              return (
                <div className="col-2" key={index}>
                  <ForecastDay data={dailyData} />
                </div>
              );
            }
          })}
        </div>
      </div>
    );
  } else {
    const apiKey = `40b745c14eadad7b7c4e6e4bf3b70103`;
    const latitude = props.coords.lat;
    const longitude = props.coords.lon;
    const url = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
    axios.get(url).then(showForecast);
    return null;
  }
}
