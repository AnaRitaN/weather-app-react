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
          <div className="location">
            <div className="searchedCity">
              <span>{city}</span>
              <br />
              <div>Last updated 3 minutes ago </div>
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
      <div className="row search">
        <strong className="col-md-8 strong">Weather app</strong>
        <form className="form-inline" onSubmit={handleSubmit}>
          <div className="form-group mx-sm-3 mb-2">
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
      <div>{cityName}</div>
    </div>
  );
}
