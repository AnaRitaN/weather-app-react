import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecastCards.css";

export default function WeatherCardsForecast(props) {
  let maxTemp = Math.round(props.info.temp.max);
  let minTemp = Math.round(props.info.temp.min);
  function getWeekDay() {
    let date = new Date(props.info.dt * 1000);
    let days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    let weekDay = days[date.getDay()];
    return `${weekDay}`;
  }

  return (
    <div className="WeatherForecastCards col-md-2">
      <div className="card weekDay">
        <div className="cardTitle"> {getWeekDay()} </div>
        <div className="cardIcon">
          <WeatherIcon code={props.info.weather[0].id} />
        </div>
        <div className="cardTemperature">
          <span className="maximumTemperature">{maxTemp}º</span>
          <span className="minimumTemperature"> {minTemp}º</span>
        </div>
      </div>
    </div>
  );
}
