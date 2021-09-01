import React from "react";
import ConvertTemperature from "./ConvertTemperature";

import "./Forecast.css";

export default function Forecast(props) {
  return (
    <div className="Forecast">
      <div className="forecast-container">
        <h3 className="forecast-font">7 Day Forecast</h3>

        <hr />

        <div className="row">
          <div className="col-sm forecast-day-container">
            <span className="forecast-day">Monday</span>
            <div className="weather-status-font">{props.tomorrow.description}</div>
            <div><img className="emoji-forecast" src={props.tomorrow.emoji} alt={props.tomorrow.description}></img></div>
            <div className="forecast-high-number"><ConvertTemperature temp={props.tomorrow.high}/></div>
            <div className="weather-status-font">HIGH</div>
            <div className="forecast-low-number"><ConvertTemperature temp={props.tomorrow.low}/></div>
            <p className="weather-status-font">LOW</p>
          </div>
          <div className="col-sm forecast-day-container">
          <span className="forecast-day">Monday</span>
            <div className="weather-status-font">{props.day2.description}</div>
            <div><img className="emoji-forecast" src={props.day2.emoji} alt={props.day2.description}></img></div>
            <div className="forecast-high-number"><ConvertTemperature temp={props.day2.high}/></div>
            <div className="weather-status-font">HIGH</div>
            <div className="forecast-low-number"><ConvertTemperature temp={props.day2.low}/></div>
            <p className="weather-status-font">LOW</p>
          </div>
          <div className="col-sm forecast-day-container">
          <span className="forecast-day">Tuesday</span>
            <div className="weather-status-font">{props.day3.description}</div>
            <div><img className="emoji-forecast" src={props.day3.emoji} alt={props.day3.description}></img></div>
            <div className="forecast-high-number"><ConvertTemperature temp={props.day3.high}/></div>
            <div className="weather-status-font">HIGH</div>
            <div className="forecast-low-number"><ConvertTemperature temp={props.day3.low}/></div>
            <p className="weather-status-font">LOW</p>
          </div>
          <div className="col-sm forecast-day-container">
          <span className="forecast-day">Wednesday</span>
            <div className="weather-status-font">{props.day4.description}</div>
            <div><img className="emoji-forecast" src={props.day4.emoji} alt={props.day4.description}></img></div>
            <div className="forecast-high-number"><ConvertTemperature temp={props.day4.high}/></div>
            <div className="weather-status-font">HIGH</div>
            <div className="forecast-low-number"><ConvertTemperature temp={props.day4.low}/></div>
            <p className="weather-status-font">LOW</p>
          </div>
          <div className="col-sm forecast-day-container">
          <span className="forecast-day">Thursday</span>
            <div className="weather-status-font">{props.day5.description}</div>
            <div><img className="emoji-forecast" src={props.day5.emoji} alt={props.day5.description}></img></div>
            <div className="forecast-high-number"><ConvertTemperature temp={props.day5.high}/></div>
            <div className="weather-status-font">HIGH</div>
            <div className="forecast-low-number"><ConvertTemperature temp={props.day5.low}/></div>
            <p className="weather-status-font">LOW</p>
          </div>
          <div className="col-sm forecast-day-container">
          <span className="forecast-day">Friday</span>
            <div className="weather-status-font">{props.day6.description}</div>
            <div><img className="emoji-forecast" src={props.day6.emoji} alt={props.day6.description}></img></div>
            <div className="forecast-high-number"><ConvertTemperature temp={props.day6.high}/></div>
            <div className="weather-status-font">HIGH</div>
            <div className="forecast-low-number"><ConvertTemperature temp={props.day6.low}/></div>
            <p className="weather-status-font">LOW</p>
          </div>
          <div className="col-sm forecast-day-container-sunday">
          <span className="forecast-day">Saturday</span>
            <div className="weather-status-font">{props.day7.description}</div>
            <div><img className="emoji-forecast" src={props.day7.emoji} alt={props.day7.description}></img></div>
            <div className="forecast-high-number"><ConvertTemperature temp={props.day7.high}/></div>
            <div className="weather-status-font">HIGH</div>
            <div className="forecast-low-number"><ConvertTemperature temp={props.day7.low}/></div>
            <p className="weather-status-font">LOW</p>
          </div>
        </div>
      </div>
    </div>
  );
}
