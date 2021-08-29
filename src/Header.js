import React from "react";
import Searchbar from "./Searchbar";

import "./Header.css";

export default function App() {
  return (
    <div className="Header">
      <div className="container">
        <div className="row">
          <div className="col-sm-6 current-time">
            <h2 className="date-line">Monday August 23</h2>
            <h1>
              <span className="hour">10</span>:
              <span className="minutes">30</span>
              <span className="am-pm">PM</span>
              <div className="weather-status">Cloudy</div>
            </h1>
          </div>
          <div className="col-sm-6">
            <Searchbar />
          </div>
        </div>
      </div>
    </div>
  );
}
