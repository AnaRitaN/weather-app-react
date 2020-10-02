import React, { useState } from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherForecast from "./WeatherForecast";
import "./WeatherInfo.css";

export default function WeatherInfo(props) {
  let [unit, setUnit] = useState("metric");

  function displayFahrenheit() {
    setUnit("fahrenheit");
  }

  function displayCelsius() {
    setUnit("metric");
  }

  let fahrenheit = (props.data.temperature * 9) / 5 + 32;

  if (unit === "metric") {
    return (
      <div>
        <div className="WeatherInfo">
          <div className="location">
            <div className="searchedCity">
              <span>{props.data.city}</span>
              <br />
              <div>
                <FormattedDate date={props.data.date} />
              </div>
            </div>
          </div>
          <div className="row weather">
            <div className="col-6 icon">
              <WeatherIcon code={props.data.icon} />
            </div>
            <div className="col-5 details">
              <div className="WeatherTemperature">
                <span className="WeatherTemperature number">
                  {Math.round(props.data.temperature)}
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
              <div className="sky">{props.data.description}</div>
              <div className="humidityWind">
                Humidity: {props.data.humidity}%
                <br />
                Wind: {props.data.wind} m/s
              </div>
            </div>
          </div>
        </div>
        <div className="bottomContainer">
          {" "}
          <WeatherForecast
            cityLatitude={props.data.latitude}
            cityLongitude={props.data.longitude}
            unit="metric"
          />
        </div>
      </div>
    );
  } else {
    return (
      <div>
        <div className="WeatherInfo">
          <div className="location">
            <div className="searchedCity">
              <span>{props.data.city}</span>
              <br />
              <div>
                <FormattedDate date={props.data.date} />
              </div>
            </div>
          </div>
          <div className="row weather">
            <div className="col-6 icon">
              <WeatherIcon code={props.data.icon} />
            </div>
            <div className="col-5 details">
              <div className="WeatherTemperature">
                <span className="WeatherTemperature number">
                  {Math.round(fahrenheit)}
                </span>
                <span
                  className="WeatherTemperature celsius"
                  onClick={displayCelsius}
                >
                  °C
                </span>
                <span className="WeatherTemperature dash"> | </span>
                <span className="WeatherTemperature fahrenheit">°F</span>
              </div>
              <div className="sky">{props.data.description}</div>
              <div className="humidityWind">
                Humidity: {props.data.humidity}%
                <br />
                Wind: {props.data.wind} m/s
              </div>
            </div>
          </div>
        </div>
        <div className="bottomContainer">
          <WeatherForecast
            cityLatitude={props.data.latitude}
            cityLongitude={props.data.longitude}
            unit="imperial"
          />
        </div>
      </div>
    );
  }
}
