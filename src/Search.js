import React, { useState } from "react";
import "./Search.css";

export default function Search() {
  let [city, setCity] = useState(null);
  let [cityName, setCityName] = useState(null);

  function handleSubmit(event) {
    event.preventDefault();
    if (city) {
      setCityName(
        <div>
          <div className="row location">
            <div className="col-md-1">
              <i className="fas fa-map-marker-alt"></i>
            </div>
            <div className="col-md-8">
              <div className="searchedCity">
                <span>{city}</span>
                <br />
                <div>Last updated 3 minutes ago </div>
              </div>
            </div>
          </div>
        </div>
      );
    } else {
      setCityName(null);
    }
  }
  function updateCity(event) {
    setCity(event.target.value);
  }
  return (
    <div className="Search">
      <div className="row">
        <form className="form-inline" onSubmit={handleSubmit}>
          <div className="form-group mx-sm-3 mb-2">
            <input
              type="search"
              className="form-control"
              placeholder="❤ Search for a city"
              onChange={updateCity}
            />
          </div>
          <input
            type="submit"
            className="btn btn-primary mb-2"
            value="Search"
          />
        </form>
        <button type="button" className="btn btn-link">
          Get weather in current location
        </button>
      </div>
      <div>{cityName}</div>
    </div>
  );
}
