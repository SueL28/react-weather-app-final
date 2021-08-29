import React from "react";

import "./TemperatureMain.css";

export default function TemperatureMain() {
  let cityName = { city: "Toronto" };
  return (
    <div className="Temperatures">
      <div className="row">
        <div className="col-sm-6 current-temp-status">
          <h3 className="currently-header">
            Currently in <span className="city-name">{cityName.city}</span>
          </h3>
          <div className="row">
            <div className="col-sm-2"></div>

            <div className="col-sm-4 current-temp-number">
              25°C{" "}
              <span
                className="header-emoji"
                role="img"
                aria-label="partly-cloudy"
              >
                ⛅
              </span>
            </div>
            <div className="col-sm-4 feels-like-text">
              Feels Like
              <div className="row temp-number-curr">30°C</div>
            </div>

            <div className="col-sm-2"></div>
          </div>
        </div>

        <div className="col-sm-6 tomorrow-temp-status">
          <h3 className="tomorrow-temp-header">
            Tomorrow in <span className="city-name-t">{cityName.city}</span>
          </h3>
          <div className="row elements-tomorrow-temp">
            <div className="col-sm-4 current-temp-number-t">
              23°C{" "}
              <span
                className="header-emoji"
                role="img"
                aria-label="rain-umbrella"
              >
                ☔
              </span>
            </div>
            <div className="col-sm-4 feels-like-text">
              Feels Like
              <div className="row temp-number-curr">30°C</div>
            </div>

            <div className="col-sm-2"></div>
            <div className="col-sm-2"></div>
          </div>
        </div>
      </div>

      <div className="weather-factors-container">
        <div className="row">
          <div className="col-sm-5 current-factors-container">
            <div className="col-sm curr-wind-section">
              <span
                className="factor-header-wind factor-header-colour"
                role="img"
                aria-label="partly-cloudy"
              >
                WIND 💨
              </span>
              <div className="row">
                <div className="wind-speed-number">
                  20
                  <div className="row wind-speed-number">NE KM</div>
                </div>
              </div>
            </div>
            <div className="col-sm curr-rain-section">
              <span
                className="factor-header-colour"
                role="img"
                aria-label="rain-umbrella"
              >
                POP ☔
              </span>
              <div className="row">
                <div className="rain-number">10%</div>
              </div>
            </div>
            <div className="col-sm curr-low-section">
              <span className="factor-header-colour">LOW</span>
              <span className="thermo-colour">🌡</span>

              <div className="row">
                <div className="low-temp-number">10°C</div>
              </div>
            </div>
            <div className="col-sm curr-high-section">
              <span
                className="factor-header-colour"
                role="img"
                aria-label="partly-cloudy"
              >
                HIGH 🌡
              </span>
              <div className="row">
                <div className="high-temp-number">28°C</div>
              </div>
            </div>
          </div>

          <div className="col-sm-1 filler"></div>

          <div className="col-sm-5 tomorrow-factors-container">
            <div className="col-sm tom-wind-section">
              <span
                className="factor-header-colour"
                role="img"
                aria-label="partly-cloudy"
              >
                WIND 💨
              </span>
              <div className="row">
                <div className="wind-speed-number-tom">
                  30
                  <div className="row wind-speed-number-tom">NE KM</div>
                </div>
              </div>
            </div>
            <div className="col-sm tom-rain-section">
              <span
                className="factor-header-colour"
                role="img"
                aria-label="partly-cloudy"
              >
                POP ☔
              </span>
              <div className="row">
                <div className="rain-number-tom">40%</div>
              </div>
            </div>
            <div className="col-sm tom-low-section">
              <span className="factor-header-colour">LOW</span>{" "}
              <span className="thermo-colour">🌡</span>
              <div className="row">
                <div className="low-temp-number-tom">12°C</div>
              </div>
            </div>
            <div className="col-sm tom-high-section">
              <span className="factor-header-colour">HIGH 🌡</span>
              <div className="row">
                <div className="high-temp-number-tom">30°C</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
