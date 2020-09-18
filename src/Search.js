import React, { useState } from "react";
import WeatherInfo from "./WeatherInfo";
import WeatherForecast from "./WeatherForecast";
import axios from "axios";
import "./Search.css";

export default function Search(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);

  function handleResponse(response) {
    setWeatherData({
      ready: true,
      city: response.data.name,
      date: new Date(response.data.dt * 1000),
      temperature: response.data.main.temp,
      description: response.data.weather[0].description,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      icon: response.data.weather[0].id,
      latitude: response.data.coord.lat,
      longitude: response.data.coord.lon,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    setWeatherData({ ready: false });
  }

  function handleChange(event) {
    setCity(event.target.value);
  }

  if (weatherData.ready) {
    return (
      <div className="Search">
        <div className="row search">
          <strong className="col-sm-7 strong">Weather app</strong>
          <form className="form-inline col-lg-5" onSubmit={handleSubmit}>
            <div className="form-group mx-sm-2 mb-2">
              <input
                type="search"
                className="form-control"
                placeholder="Search"
                onChange={handleChange}
              />
            </div>
            <input type="submit" className="btn btn-primary mb-2" value="Go" />
          </form>
          <span className="location">
            <WeatherInfo data={weatherData} />
          </span>
        </div>
        <div className="bottomContainer">
          <WeatherForecast
            cityLatitude={weatherData.latitude}
            cityLongitude={weatherData.longitude}
          />
        </div>
      </div>
    );
  } else {
    const apiKey = "0987205707074255a39169907ca55577";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
    return "Loading";
  }
}
