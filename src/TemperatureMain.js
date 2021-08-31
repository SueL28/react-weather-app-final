import axios from "axios";
import React, {useState} from "react";

import "./TemperatureMain.css";


export default function TemperatureMain() {
  /* GET LOCATION COORDINATES AND API */
  const [coordinates, setCoordinates] = useState("null");
  const [weatherLocation, setWeatherLocation] = useState("");
  const [futureWeatherTomorrow, setFutureWeatherTomorrow] = useState("");
  const [futureDay2, setFutureDay2] = useState("");
  const [futureDay3, setFutureDay3] = useState("");
  const [futureDay4, setFutureDay4] = useState("");
  const [futureDay5, setFutureDay5] = useState("");
  const [futureDay6, setFutureDay6] = useState("");
  const [futureDay7, setFutureDay7] = useState("");
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
        setFutureDay2({
          dt: response.data.dt,
          high: (Math.round(response.data.daily[1].temp.max)), 
          low: (Math.round(response.data.daily[1].temp.min)),
          description: response.data.daily[1].weather[0].description,
          emoji:`http://openweathermap.org/img/wn/${response.data.daily[1].weather[0].icon}@2x.png`
        }) 

        setFutureDay3({
          dt: response.data.dt,
          high: (Math.round(response.data.daily[2].temp.max)), 
          low: (Math.round(response.data.daily[2].temp.min)),
          description: response.data.daily[2].weather[0].description,
          emoji:`http://openweathermap.org/img/wn/${response.data.daily[2].weather[0].icon}@2x.png`
        }) 
        setFutureDay4({
          dt: response.data.dt,
          high: (Math.round(response.data.daily[3].temp.max)), 
          low: (Math.round(response.data.daily[3].temp.min)),
          description: response.data.daily[3].weather[0].description,
          emoji:`http://openweathermap.org/img/wn/${response.data.daily[3].weather[0].icon}@2x.png`
        }) 
        setFutureDay5({
          dt: response.data.dt,
          high: (Math.round(response.data.daily[4].temp.max)), 
          low: (Math.round(response.data.daily[4].temp.min)),
          description: response.data.daily[4].weather[0].description,
          emoji:`http://openweathermap.org/img/wn/${response.data.daily[4].weather[0].icon}@2x.png`
        }) 
        setFutureDay6({
          dt: response.data.dt,
          high: (Math.round(response.data.daily[5].temp.max)), 
          low: (Math.round(response.data.daily[5].temp.min)),
          description: response.data.daily[5].weather[0].description,
          emoji:`http://openweathermap.org/img/wn/${response.data.daily[5].weather[0].icon}@2x.png`
        }) 
        setFutureDay7({
          dt: response.data.dt,
          high: (Math.round(response.data.daily[6].temp.max)), 
          low: (Math.round(response.data.daily[6].temp.min)),
          description: response.data.daily[6].weather[0].description,
          emoji:`http://openweathermap.org/img/wn/${response.data.daily[6].weather[0].icon}@2x.png`
        })
        
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
                <div className="weather-status">{weatherLocation.description}</div>
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

      {/* 7 DAY FORECAST SECTION */}

      <div className="Forecast">
      <div className="forecast-container">
        <h3 className="forecast-font">7 Day Forecast</h3>

        <hr />

        <div className="row">
          <div className="col-sm forecast-day-container">
            <span className="forecast-day">Monday</span>
            <div className="weather-status-font">{futureWeatherTomorrow.description}</div>
            <div><img className="emoji-forecast" src={futureWeatherTomorrow.emoji} alt={futureWeatherTomorrow.description}></img></div>
            <div className="forecast-high-number">{futureWeatherTomorrow.high}°C</div>
            <div className="weather-status-font">HIGH</div>
            <div className="forecast-low-number">{futureWeatherTomorrow.low}°C</div>
            <p className="weather-status-font">LOW</p>
          </div>
          <div className="col-sm forecast-day-container">
          <span className="forecast-day">Monday</span>
            <div className="weather-status-font">{futureDay2.description}</div>
            <div><img className="emoji-forecast" src={futureDay2.emoji} alt={futureDay2.description}></img></div>
            <div className="forecast-high-number">{futureDay2.high}°C</div>
            <div className="weather-status-font">HIGH</div>
            <div className="forecast-low-number">{futureDay2.low}°C</div>
            <p className="weather-status-font">LOW</p>
          </div>
          <div className="col-sm forecast-day-container">
          <span className="forecast-day">Tuesday</span>
            <div className="weather-status-font">{futureDay3.description}</div>
            <div><img className="emoji-forecast" src={futureDay3.emoji} alt={futureDay3.description}></img></div>
            <div className="forecast-high-number">{futureDay3.high}°C</div>
            <div className="weather-status-font">HIGH</div>
            <div className="forecast-low-number">{futureDay3.low}°C</div>
            <p className="weather-status-font">LOW</p>
          </div>
          <div className="col-sm forecast-day-container">
          <span className="forecast-day">Wednesday</span>
            <div className="weather-status-font">{futureDay4.description}</div>
            <div><img className="emoji-forecast" src={futureDay4.emoji} alt={futureDay4.description}></img></div>
            <div className="forecast-high-number">{futureDay4.high}°C</div>
            <div className="weather-status-font">HIGH</div>
            <div className="forecast-low-number">{futureDay4.low}°C</div>
            <p className="weather-status-font">LOW</p>
          </div>
          <div className="col-sm forecast-day-container">
          <span className="forecast-day">Thursday</span>
            <div className="weather-status-font">{futureDay5.description}</div>
            <div><img className="emoji-forecast" src={futureDay5.emoji} alt={futureDay5.description}></img></div>
            <div className="forecast-high-number">{futureDay5.high}°C</div>
            <div className="weather-status-font">HIGH</div>
            <div className="forecast-low-number">{futureDay5.low}°C</div>
            <p className="weather-status-font">LOW</p>
          </div>
          <div className="col-sm forecast-day-container">
          <span className="forecast-day">Friday</span>
            <div className="weather-status-font">{futureDay6.description}</div>
            <div><img className="emoji-forecast" src={futureDay6.emoji} alt={futureDay6.description}></img></div>
            <div className="forecast-high-number">{futureDay6.high}°C</div>
            <div className="weather-status-font">HIGH</div>
            <div className="forecast-low-number">{futureDay6.low}°C</div>
            <p className="weather-status-font">LOW</p>
          </div>
          <div className="col-sm forecast-day-container-sunday">
          <span className="forecast-day">Saturday</span>
            <div className="weather-status-font">{futureDay7.description}</div>
            <div><img className="emoji-forecast" src={futureDay7.emoji} alt={futureDay7.description}></img></div>
            <div className="forecast-high-number">{futureDay7.high}°C</div>
            <div className="weather-status-font">HIGH</div>
            <div className="forecast-low-number">{futureDay7.low}°C</div>
            <p className="weather-status-font">LOW</p>
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

      {/* 7 DAY FORECAST SECTION */}

      <div className="Forecast">
      <div className="forecast-container">
        <h3 className="forecast-font">7 Day Forecast</h3>

        <hr />

        <div className="row">
          
        </div>
      </div>
    </div>





    </div>
   );
}
}
