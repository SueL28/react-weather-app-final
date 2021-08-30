import React, {useState} from "react";
import axios from "axios";

import "./Searchbar.css";

export default function Searchbar() {
const [weatherLocation, setWeatherLocation] = useState("");
const [lat, setLat] = useState("null");
const [long, setLong]= useState("null");
let [city, setCity] = useState("");
let [updated, setUpdated] = useState(false);

  function getLocationWeather(response){
    setLat(response.coords.latitude);
    setLong(response.coords.longitude);

    function getWeather(response){
      console.log(response)

    }
    if (lat === null){
      return;
    }
    else {
      let apiKey = `a0ec055234934001bdc16c33f46f3ecb`
      let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${long}&appid=${apiKey}&units=metric`
      axios.get(apiUrl).then(getWeather);
      setUpdated(true);


    }


  }

  function getLocation(){
    navigator.geolocation.getCurrentPosition(getLocationWeather);

    }
  
    function submitEntry(submit){
      submit.preventDefault();
    }

    function updateEntry(event){
      setCity(event.target.value);
      console.log(city)
    }


  return (
    <div className="col-sm Searchbar">
      <form className="search-bar-container" onSubmit= {submitEntry}>
        <div className="row">
          <div className="col-sm">
            <div className="mb-3">
              <input
                type="text"
                className="form-control search-bar"
                placeholder="Search for Location"
                onChange= {updateEntry}
              />
            </div>
          </div>
          <div className="col-sm">
            <span className="spacing">
              <input type="submit" value="🔍" className="magnifying-glass"/>
            </span>
            <button className="current-location location-button" onClick={getLocation}>
              Current Location
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
