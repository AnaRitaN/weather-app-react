import React, { useState } from "react";
import "./WeatherTemperature.css";

export default function WeatherTemperature(props) {
  let [unit, setUnit] = useState("celsius");

  function displayFahrenheit() {
    setUnit("fahrenheit");
  }

  function displayCelsius() {
    setUnit("celsius");
  }

  let fahrenheit = (props.celsius * 9) / 5 + 32;

  if (unit === "celsius") {
    return (
      <div className="WeatherTemperature">
        <span className="WeatherTemperature number">
          {Math.round(props.celsius)}
        </span>
        <span className="WeatherTemperature celsius">°C</span>
        <span className="WeatherTemperature dash"> | </span>
        <span
          className="WeatherTemperature fahrenheit"
          onClick={displayFahrenheit}
        >
          °F
        </span>
      </div>
    );
  } else {
    return (
      <div className="WeatherTemperature">
        <span className="WeatherTemperature number">
          {Math.round(fahrenheit)}
        </span>
        <span className="WeatherTemperature celsius" onClick={displayCelsius}>
          °C
        </span>
        <span className="WeatherTemperature dash"> | </span>
        <span className="WeatherTemperature fahrenheit">°F</span>
      </div>
    );
  }
}
