import React, { useState } from "react";
import axios from "axios";
import WeatherForecastCards from "./WeatherForecastCards";
import "./WeatherForecast.css";

export default function WeatherForecast(props) {
  const [loaded, setLoaded] = useState(false);
  const [forecast, setForecast] = useState(null);

  function showForecast(response) {
    setForecast(response.data);
    setLoaded(true);
  }

  if (loaded) {
    console.log(forecast);
    return (
      <div className="WeatherForecast">
        <div className="row col">Forecast</div>
        <div className="row cards">
          <WeatherForecastCards info={forecast.daily[1]} />
          <WeatherForecastCards info={forecast.daily[2]} />
          <WeatherForecastCards info={forecast.daily[3]} />
          <WeatherForecastCards info={forecast.daily[4]} />
          <WeatherForecastCards info={forecast.daily[5]} />
          <WeatherForecastCards info={forecast.daily[6]} />
        </div>
      </div>
    );
  } else {
    const apiKey = "0987205707074255a39169907ca55577";
    let apiForecast = `https://api.openweathermap.org/data/2.5/onecall?lat=${props.cityLatitude}&lon=${props.cityLongitude}&exclude=current,minutely,hourly&appid=${apiKey}&units=metric`;
    axios.get(apiForecast).then(showForecast);
    return null;
  }
}
