import React, { useState } from "react";

export default function TempConversion(props) {
  const [unit, setUnit] = useState("celsius");
  function convertToF(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }
  function convertToC(event) {
    event.preventDefault();
    setUnit("celsius");
  }
  if (unit === "celsius") {
    return (
      <div className="TempConversion">
        <span className="current-temp temp">{Math.round(props.celsius)}</span>
        <span className="units">°C</span>
        <span className="break">|</span>
        <span className="units">
          <a href="/" onClick={convertToF}>
            °F
          </a>
        </span>
      </div>
    );
  } else {
    let fahrenheit = (props.celsius * 9) / 5 + 32;
    return (
      <div className="TempConversion">
        <span className="current-temp temp">{Math.round(fahrenheit)}</span>
        <span className="units">
          <a href="/" onClick={convertToC}>
            °C
          </a>
        </span>
        <span className="break">|</span>
        <span className="units">°F</span>
      </div>
    );
  }
}
