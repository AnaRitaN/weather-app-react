import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import "./WeatherInfo.css";

export default function WeatherInfo(props) {
  return (
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
        <div className="col-6">
          <div className="temperature">
            <span className="temperature number">
              {Math.round(props.data.temperature)}
            </span>
            <span className="temperature celsius">°C</span>
            <span className="temperature dash"> | </span>
            <span className="temperature fahrenheit">°F</span>
          </div>
          <div className="sky">{props.data.description}</div>
          <div className="humidityWind">
            Humidity:{props.data.humidity}%
            <br />
            Wind: {props.data.wind} m/s
          </div>
        </div>
      </div>
    </div>
  );
}
