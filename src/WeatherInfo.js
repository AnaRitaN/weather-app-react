import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import "./WeatherInfo.css";
import WeatherTemperature from "./WeatherTemperature";

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
          <WeatherTemperature celsius={props.data.temperature} />
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
