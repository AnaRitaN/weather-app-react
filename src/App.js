import React from "react";
import Search from "./Search";
import "./App.css";

export default function App() {
  return (
    <div className="container">
      <div className="App">
        <strong>Weather App</strong>
        <Search />
      </div>
      <div className="open-source-link">
        <a
          href="https://github.com/AnaRitaN/weather-app-react"
          target="_blank"
          rel="noopener noreferrer"
        >
          Open-source code
        </a>{" "}
        by Rita Pereira
      </div>
    </div>
  );
}
