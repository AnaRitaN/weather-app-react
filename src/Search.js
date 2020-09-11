import React, { useState } from "react";
import axios from "axios";
import "./Search.css";

export default function Search() {
  let [weatherInfo, setWeatherInfo] = useState({ ready: false });

  function handleResponse(response) {
    console.log(response.data);
    setWeatherInfo({
      ready: true,
      city: response.data.name,
      temperature: response.data.main.temp,
      description: response.data.weather[0].description,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
    });
  }

  if (weatherInfo.ready) {
    return (
      <div className="Search">
        <div className="row search">
          <strong className="col-md-6 strong">Weather app</strong>
          <form className="form-inline col-md-6">
            <div className="form-group mx-sm-2 mb-2">
              <input
                type="search"
                className="form-control"
                placeholder="Search"
              />
            </div>
            <input type="submit" className="btn btn-primary mb-2" value="🔎" />
          </form>
        </div>
        <div>
          {" "}
          <div className="location">
            <div className="searchedCity">
              <span>{weatherInfo.city}</span>
              <br />
              <div>Last updated 3 minutes ago </div>
            </div>
          </div>
          <div className="row weather">
            <div className="col-6 icon">🌤</div>
            <div className="col-6">
              <div className="temperature">
                <span className="temperature number">
                  {Math.round(weatherInfo.temperature)}
                </span>
                <span className="temperature celsius">°C</span>
                <span className="temperature dash"> | </span>
                <span className="temperature fahrenheit">°F</span>
              </div>
              <div className="sky">{weatherInfo.description}</div>
              <div className="humidityWind">
                Humidity:{weatherInfo.humidity}%
                <br />
                Wind: {weatherInfo.wind} m/s
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = "0987205707074255a39169907ca55577";
    let tempCity = "Brussels";
    let apiUrl = `http://api.openweathermap.org/data/2.5/weather?q=${tempCity}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
    return "Add spin loader";
  }
}
