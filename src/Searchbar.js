import React from "react";

import "./Searchbar.css";

export default function Searchbar() {
  return (
    <div className="col-sm Searchbar">
      <form className="search-bar-container">
        <div className="row">
          <div className="col-sm">
            <div className="mb-3">
              <input
                type="text"
                className="form-control search-bar"
                placeholder="Search for Location"
              />
            </div>
          </div>
          <div className="col-sm">
            <span className="spacing">
              <input type="submit" value="🔍" className="magnifying-glass" />
            </span>
            <button className="current-location location-button">
              Current Location
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
