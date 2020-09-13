import React from "react";
import "./WeatherIcon.css";

export default function WeatherIcon(props) {
  if (props.code === 800) {
    return <i className="fas fa-sun"></i>;
  }

  if (props.code >= 801 && props.code <= 804) {
    return <i className="fas fa-cloud-sun"></i>;
  }

  if (
    (props.code >= 300 && props.code <= 321) ||
    (props.code >= 520 && props.code <= 531)
  ) {
    return <i className="fas fa-cloud-showers-heavy"></i>;
  }
  if (props.code >= 500 && props.code <= 504) {
    return <i className="fas fa-cloud-sun-rain"></i>;
  }
  if (props.code >= 200 && props.code <= 232) {
    return <i className="fas fa-bolt"></i>;
  }
  if ((props.code >= 600 && props.code <= 622) || props.code === 511) {
    return <i className="fas fa-snowflake"></i>;
  }
  if (props.code >= 701 && props.code <= 781) {
    return <i className="fas fa-smog"></i>;
  }
}
