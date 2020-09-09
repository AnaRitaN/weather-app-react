import React, { useState } from "react";
import "./Search.css";

export default function Search() {
  let [city, setCity] = useState(null);
  let [cityInfo, setCityInfo] = useState(null);

  function handleSubmit(event) {
    event.preventDefault();
    if (city) {
      setCityInfo(
        <div>
          <div className="location">
            <div className="searchedCity">
              <span>{city}</span>
              <br />
              <div>Last updated 3 minutes ago </div>
            </div>
          </div>
          <div className="row weather">
            <div className="col-6 icon">🌤</div>
            <div className="col-6">
              <div className="temperature">
                <span className="temperature number">19</span>
                <span className="temperature celsius">°C</span>
                <span className="temperature dash"> | </span>
                <span className="temperature fahrenheit">°F</span>
              </div>
              <div className="sky">Clear sky</div>
              <div className="humidityWind">
                Humidity:33%
                <br />
                Wind: 4 m/s
              </div>
            </div>
          </div>
        </div>
      );
    } else {
      setCityInfo(null);
    }
  }
  function updateCity(event) {
    setCity(event.target.value);
  }
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
              onChange={updateCity}
            />
          </div>
          <input type="submit" className="btn btn-primary mb-2" value="🔎" />
        </form>
      </div>
      <div>{cityInfo}</div>
    </div>
  );
}
