import React from "react";

import "./Forecast.css";

export default function Forecast() {
  return (
    <div className="Forecast">
      <div className="forecast-container">
        <h3 className="forecast-font">7 Day Forecast</h3>

        <hr />

        <div className="row">
          <div className="col-sm forecast-day-container">
            <span className="forecast-day">Monday</span>
            <div className="weather-status-font">Clear</div>
            <div className="emoji-forecast">☀</div>
            <div className="forecast-high-number">30°C</div>
            <div className="weather-status-font">HIGH</div>
            <div className="forecast-low-number">15°C</div>
            <p className="weather-status-font">LOW</p>
          </div>
          <div className="col-sm forecast-day-container">
            <span className="forecast-day">Tuesday</span>
            <div className="weather-status-font">Cloudy</div>
            <div className="emoji-forecast">☁</div>
            <div className="forecast-high-number">25°C</div>
            <div className="weather-status-font">HIGH</div>
            <div className="forecast-low-number">10°C</div>
            <p className="weather-status-font">LOW</p>
          </div>
          <div className="col-sm forecast-day-container">
            <span className="forecast-day">Wednesday</span>
            <div className="weather-status-font">Rain</div>
            <div className="emoji-forecast">🌧</div>
            <div className="forecast-high-number">33°C</div>
            <div className="weather-status-font">HIGH</div>
            <div className="forecast-low-number">25°C</div>
            <p className="weather-status-font">LOW</p>
          </div>
          <div className="col-sm forecast-day-container">
            <span className="forecast-day">Thursday</span>
            <div className="weather-status-font">T-Storms</div>
            <div className="emoji-forecast">⛈</div>
            <div className="forecast-high-number">35°C</div>
            <div className="weather-status-font">HIGH</div>
            <div className="forecast-low-number">26°C</div>
            <p className="weather-status-font">LOW</p>
          </div>
          <div className="col-sm forecast-day-container">
            <span className="forecast-day">Friday</span>
            <div className="weather-status-font">Cloudy</div>
            <div className="emoji-forecast">☁</div>
            <div className="forecast-high-number">27°C</div>
            <div className="weather-status-font">HIGH</div>
            <div className="forecast-low-number">19°C</div>
            <p className="weather-status-font">LOW</p>
          </div>
          <div className="col-sm forecast-day-container">
            <span className="forecast-day">Saturday</span>
            <div className="weather-status-font">Clear</div>
            <div className="emoji-forecast">☀</div>
            <div className="forecast-high-number">26°C</div>
            <div className="weather-status-font">HIGH</div>
            <div className="forecast-low-number">11°C</div>
            <p className="weather-status-font">LOW</p>
          </div>
          <div className="col-sm forecast-day-container-sunday">
            <span className="forecast-day">Sunday</span>
            <div className="weather-status-font">Haze</div>
            <div className="emoji-forecast">🌫</div>
            <div className="forecast-high-number">28°C</div>
            <div className="weather-status-font">HIGH</div>
            <div className="forecast-low-number">21°C</div>
            <p className="weather-status-font">LOW</p>
          </div>
        </div>
      </div>
    </div>
  );
}
