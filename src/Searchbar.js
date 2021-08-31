import React, {useState} from "react";


import "./Searchbar.css";

export default function Searchbar() {

const [coordinates, setCoordinates] = useState("null");
let [city, setCity] = useState("");
let [updated, setUpdated] = useState(false);

  function getLocationWeather(response){
    setCoordinates({lat: response.coords.latitude,
      long:response.coords.longitude});
 


  }

  function getLocation(){
    navigator.geolocation.getCurrentPosition(getLocationWeather);

    }
  
    function submitEntry(submit){
      submit.preventDefault();
      console.log(city)
    }

    function updateEntry(event){
      setCity(event.target.value);
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
