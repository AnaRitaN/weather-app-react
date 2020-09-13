import React, { useState } from "react";
import WeatherInfo from "./WeatherInfo";
import axios from "axios";
import "./Search.css";

export default function Search(props) {
  let [city, setCity] = useState(props.defaultCity);
  let [weatherData, setWeatherData] = useState({ ready: false });

  function handleResponse(response) {
    console.log(response.data);
    setWeatherData({
      ready: true,
      city: response.data.name,
      date: new Date(response.data.dt * 1000),
      temperature: response.data.main.temp,
      description: response.data.weather[0].description,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      icon: response.data.weather[0].id,
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
          <strong className="col-md-6 strong">Weather app</strong>
          <form className="form-inline col-md-6" onSubmit={handleSubmit}>
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
        </div>
        <WeatherInfo data={weatherData} />
      </div>
    );
  } else {
    const apiKey = "0987205707074255a39169907ca55577";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
    return "Add spin loader";
  }
}
