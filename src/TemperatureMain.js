import axios from "axios";
import React, {useState} from "react";

import "./TemperatureMain.css";


export default function TemperatureMain() {
  /* GET LOCATION COORDINATES AND API */
  const [coordinates, setCoordinates] = useState("null");
  const [weatherLocation, setWeatherLocation] = useState("");
  const [futureWeatherTomorrow, setFutureWeatherTomorrow] = useState("");
  const [futureDay2, setFutureDay2] = useState("");
  let [city, setCity] = useState("");
  let [updated, setUpdated] = useState(false);
  
    function getLocationWeather(response){
      setCoordinates({lat: response.coords.latitude,
        long:response.coords.longitude});
        
    }

    function getWeather(response){
      console.log(response.data)
      setUpdated(true);
      setWeatherLocation({
        temp_current: (Math.round(response.data.current.temp)), 
        feels_like: (Math.round(response.data.current.feels_like)), 
        high: (Math.round(response.data.daily[0].temp.max)), 
        low: (Math.round(response.data.daily[0].temp.max)),
        pop: (response.data.daily[0].pop)*100,
        wind: (Math.round(response.data.current.wind_speed)),
        description: response.data.current.weather[0].description,
        emoji:`http://openweathermap.org/img/wn/${response.data.current.weather[0].icon}@2x.png`
      })
    
      setFutureWeatherTomorrow({
          temp_current:(Math.round(response.data.daily[0].temp.day)), 
          feels_like:(Math.round(response.data.daily[0].feels_like.day)), 
          high:(Math.round(response.data.daily[0].temp.max)), 
          low:(Math.round(response.data.daily[0].temp.min)),
          pop: (response.data.daily[0].pop)*100,
          wind: (Math.round(response.data.daily[0].wind_speed)),
          description: response.data.daily[0].weather[0].description,
          emoji:`http://openweathermap.org/img/wn/${response.data.daily[0].weather[0].icon}@2x.png`
        })
        /*setFutureDay2({
          high: response.data, 
          low: response.data
          description: response.data,
          emoji:`http://openweathermap.org/img/wn/${response.data.daily[1].weather[1].icon}@2x.png`
        }) */

        /*day_3: {temp:{current:5, feels_like:6, high:7, low:8},
                description: "sunny"},
        day_4: {temp:{current:5, feels_like:6, high:7, low:8},
                description: "sunny"},
        day_5: {temp:{current:5, feels_like:6, high:7, low:8},
                description: "sunny"},
        day_6: {temp:{current:5, feels_like:6, high:7, low:8},
                description: "sunny"},
        day_7: {temp:{current:5, feels_like:6, high:7, low:8},
                description: "sunny"} */
        
    }
  
    function getLocation(){
      navigator.geolocation.getCurrentPosition(getLocationWeather);

      /*AXIOS CALL FOR LOCATION BASED WEATHER */
      let apiKey = `a0ec055234934001bdc16c33f46f3ecb`
      let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${coordinates.lat}&lon=${coordinates.long}&appid=${apiKey}&units=metric`
      axios.get(apiUrl).then(getWeather)
      
      }
    
      function submitEntry(submit){
        submit.preventDefault();
        console.log(city)
      }
  
      function updateEntry(event){
        setCity(event.target.value);
      }

  if(updated){
  return (

<div>
      <div className="header-container">
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
            
            {/* SEARCH BAR SECTION */}

            <div className="col-sm-6">
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
          </div>
        </div>
      </div>
      

      

      {/*TEMPERATURE SECTION */}
      <div className="Temperatures">
        <div className="row">
          <div className="col-sm-6 current-temp-status">
            <h3 className="currently-header">
              Currently in <span className="city-name">{city}</span>
            </h3>
            <div className="row">
              <div className="col-sm-2"></div>

              <div className="col-sm-4 current-temp-number">
                {weatherLocation.temp_current}°C{" "}
                <img
                  className="header-emoji"
                  src={weatherLocation.emoji}
                  alt={weatherLocation.description}
                >
                </img>
              </div>
              <div className="col-sm-4 feels-like-text">
                Feels Like
                <div className="row temp-number-curr">{weatherLocation.feels_like}°C</div>
              </div>

              <div className="col-sm-2"></div>
            </div>
          </div>

          <div className="col-sm-6 tomorrow-temp-status">
            <h3 className="tomorrow-temp-header">
              Tomorrow in <span className="city-name-t">{city}</span>
            </h3>
            <div className="row elements-tomorrow-temp">
              <div className="col-sm-4 current-temp-number-t">
                {futureWeatherTomorrow.temp_current}°C{" "}
                <img
                  className="header-emoji"
                  src={futureWeatherTomorrow.emoji}
                  alt={futureWeatherTomorrow.description}
                >
                </img>
              </div>
              <div className="col-sm-4 feels-like-text">
                Feels Like
                <div className="row temp-number-curr">{futureWeatherTomorrow.feels_like}°C</div>
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
                    {weatherLocation.wind}
                    <div className="row">
                        <span className="wind-speed-number">KM</span>
                      </div>
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
                  <div className="rain-number">{weatherLocation.pop}%</div>
                </div>
              </div>
              <div className="col-sm curr-low-section">
                <span className="factor-header-colour">LOW</span>
                <span className="thermo-colour">🌡</span>

                <div className="row">
                  <div className="low-temp-number">{weatherLocation.low}°C</div>
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
                  <div className="high-temp-number">{weatherLocation.high}°C</div>
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
                    {futureWeatherTomorrow.wind}
                    <div className="row">
                        <span className="wind-speed-number-tom">KM</span>
                    </div>
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
                  <div className="rain-number-tom">{futureWeatherTomorrow.pop}%</div>
                </div>
              </div>
              <div className="col-sm tom-low-section">
                <span className="factor-header-colour">LOW</span>{" "}
                <span className="thermo-colour">🌡</span>
                <div className="row">
                  <div className="low-temp-number-tom">{futureWeatherTomorrow.low}°C</div>
                </div>
              </div>
              <div className="col-sm tom-high-section">
                <span className="factor-header-colour">HIGH 🌡</span>
                <div className="row">
                  <div className="high-temp-number-tom">{futureWeatherTomorrow.high}°C</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
   );
} else {


  
   return(
    <div>
      <div className="header-container">
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
            
            {/* SEARCH BAR SECTION */}

            <div className="col-sm-6">
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
          </div>
        </div>
      </div>
      

      

      {/*TEMPERATURE SECTION */}
      <div className="Temperatures">
        <div className="row">
          <div className="col-sm-6 current-temp-status">
            <h3 className="currently-header">
              Currently in <span className="city-name">{city}</span>
            </h3>
            <div className="row">
              <div className="col-sm-2"></div>

              <div className="col-sm-4 current-temp-number">
                -°C{" "}
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
                <div className="row temp-number-curr">-°C</div>
              </div>

              <div className="col-sm-2"></div>
            </div>
          </div>

          <div className="col-sm-6 tomorrow-temp-status">
            <h3 className="tomorrow-temp-header">
              Tomorrow in <span className="city-name-t">{city}</span>
            </h3>
            <div className="row elements-tomorrow-temp">
              <div className="col-sm-4 current-temp-number-t">
                -°C{" "}
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
                <div className="row temp-number-curr">-°C</div>
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
                    -
                    <div className="row">
                        <span className="wind-speed-number">KM</span>
                      </div>
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
                  <div className="rain-number">-%</div>
                </div>
              </div>
              <div className="col-sm curr-low-section">
                <span className="factor-header-colour">LOW</span>
                <span className="thermo-colour">🌡</span>

                <div className="row">
                  <div className="low-temp-number">-°C</div>
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
                  <div className="high-temp-number">-°C</div>
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
                    -
                    <div className="row">
                        <span className="wind-speed-number-tom">KM</span>
                    </div>
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
                  <div className="rain-number-tom">-%</div>
                </div>
              </div>
              <div className="col-sm tom-low-section">
                <span className="factor-header-colour">LOW</span>{" "}
                <span className="thermo-colour">🌡</span>
                <div className="row">
                  <div className="low-temp-number-tom">-°C</div>
                </div>
              </div>
              <div className="col-sm tom-high-section">
                <span className="factor-header-colour">HIGH 🌡</span>
                <div className="row">
                  <div className="high-temp-number-tom">-°C</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
   );
}
}
