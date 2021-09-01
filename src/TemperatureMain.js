import axios from "axios";
import React, {useState} from "react";
import Forecast from "./Forecast";
import "./TemperatureMain.css";
import FormattedDate from "./FormattedDate";
import FormattedTime from "./FormattedTime";
import ConvertTemperature from "./ConvertTemperature"


export default function TemperatureMain() {
  /* GET LOCATION COORDINATES AND API */
  const [coordinates, setCoordinates] = useState("null");
  const [weather, setWeather] = useState("");
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
      console.log(coordinates)
        
    }


    function getWeather(response){
      setUpdated(true);
      setWeather({
        dt: new Date (response.data.current.dt * 1000),
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
          dt: new Date (response.data.daily[0].dt * 1000),
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
          dt: new Date (response.data.daily[1].dt * 1000),
          high: (Math.round(response.data.daily[1].temp.max)), 
          low: (Math.round(response.data.daily[1].temp.min)),
          description: response.data.daily[1].weather[0].description,
          emoji:`http://openweathermap.org/img/wn/${response.data.daily[1].weather[0].icon}@2x.png`
        }) 

        setFutureDay3({
          dt: new Date (response.data.daily[2].dt * 1000),
          high: (Math.round(response.data.daily[2].temp.max)), 
          low: (Math.round(response.data.daily[2].temp.min)),
          description: response.data.daily[2].weather[0].description,
          emoji:`http://openweathermap.org/img/wn/${response.data.daily[2].weather[0].icon}@2x.png`
        }) 
        setFutureDay4({
          dt: new Date (response.data.daily[3].dt * 1000),
          high: (Math.round(response.data.daily[3].temp.max)), 
          low: (Math.round(response.data.daily[3].temp.min)),
          description: response.data.daily[3].weather[0].description,
          emoji:`http://openweathermap.org/img/wn/${response.data.daily[3].weather[0].icon}@2x.png`
        }) 
        setFutureDay5({
          dt: new Date (response.data.daily[4].dt * 1000),
          high: (Math.round(response.data.daily[4].temp.max)), 
          low: (Math.round(response.data.daily[4].temp.min)),
          description: response.data.daily[4].weather[0].description,
          emoji:`http://openweathermap.org/img/wn/${response.data.daily[4].weather[0].icon}@2x.png`
        }) 
        setFutureDay6({
          dt: new Date (response.data.daily[5].dt * 1000),
          high: (Math.round(response.data.daily[5].temp.max)), 
          low: (Math.round(response.data.daily[5].temp.min)),
          description: response.data.daily[5].weather[0].description,
          emoji:`http://openweathermap.org/img/wn/${response.data.daily[5].weather[0].icon}@2x.png`
        }) 
        setFutureDay7({
          dt: new Date (response.data.daily[6].dt * 1000),
          high: (Math.round(response.data.daily[6].temp.max)), 
          low: (Math.round(response.data.daily[6].temp.min)),
          description: response.data.daily[6].weather[0].description,
          emoji:`http://openweathermap.org/img/wn/${response.data.daily[6].weather[0].icon}@2x.png`
        })
        setCity("Your Location")
        
    }
  
    function getLocation(){
      navigator.geolocation.getCurrentPosition(getLocationWeather);

      /*AXIOS CALL FOR LOCATION BASED WEATHER */
      let apiKey = `a0ec055234934001bdc16c33f46f3ecb`
      let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${coordinates.lat}&lon=${coordinates.long}&appid=${apiKey}&units=metric`
      axios.get(apiUrl).then(getWeather)
      //setTimeout(function(){getWeather()}, 1000);
      
      }

      /* GET SEARCHED WEATHER FROM INPUT */

      

      function getSearchedWeather(response){
        setWeather({
          dt: new Date (response.data.current.dt * 1000),
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
          dt: new Date (response.data.daily[0].dt * 1000),
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
          dt: new Date (response.data.daily[1].dt * 1000),
          high: (Math.round(response.data.daily[1].temp.max)), 
          low: (Math.round(response.data.daily[1].temp.min)),
          description: response.data.daily[1].weather[0].description,
          emoji:`http://openweathermap.org/img/wn/${response.data.daily[1].weather[0].icon}@2x.png`
        }) 

        setFutureDay3({
          dt: new Date (response.data.daily[2].dt * 1000),
          high: (Math.round(response.data.daily[2].temp.max)), 
          low: (Math.round(response.data.daily[2].temp.min)),
          description: response.data.daily[2].weather[0].description,
          emoji:`http://openweathermap.org/img/wn/${response.data.daily[2].weather[0].icon}@2x.png`
        }) 
        setFutureDay4({
          dt: new Date (response.data.daily[3].dt * 1000),
          high: (Math.round(response.data.daily[3].temp.max)), 
          low: (Math.round(response.data.daily[3].temp.min)),
          description: response.data.daily[3].weather[0].description,
          emoji:`http://openweathermap.org/img/wn/${response.data.daily[3].weather[0].icon}@2x.png`
        }) 
        setFutureDay5({
          dt: new Date (response.data.daily[4].dt * 1000),
          high: (Math.round(response.data.daily[4].temp.max)), 
          low: (Math.round(response.data.daily[4].temp.min)),
          description: response.data.daily[4].weather[0].description,
          emoji:`http://openweathermap.org/img/wn/${response.data.daily[4].weather[0].icon}@2x.png`
        }) 
        setFutureDay6({
          dt: new Date (response.data.daily[5].dt * 1000),
          high: (Math.round(response.data.daily[5].temp.max)), 
          low: (Math.round(response.data.daily[5].temp.min)),
          description: response.data.daily[5].weather[0].description,
          emoji:`http://openweathermap.org/img/wn/${response.data.daily[5].weather[0].icon}@2x.png`
        }) 
        setFutureDay7({
          dt: new Date (response.data.daily[6].dt * 1000),
          high: (Math.round(response.data.daily[6].temp.max)), 
          low: (Math.round(response.data.daily[6].temp.min)),
          description: response.data.daily[6].weather[0].description,
          emoji:`http://openweathermap.org/img/wn/${response.data.daily[6].weather[0].icon}@2x.png`
        })
        setUpdated(true)

      }

      function getSearched(response){
        setCoordinates({
          lat: response.data.coord.lat,
          long: response.data.coord.lon})
          let apiKey = `a0ec055234934001bdc16c33f46f3ecb`
          let weatherUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${coordinates.lat}&lon=${coordinates.long}&appid=${apiKey}&units=metric`
          axios.get(weatherUrl).then(getSearchedWeather)
          //setTimeout(function(){getSearchedWeather()}, 2000);
      }

      
      function submitEntry(submit){
        submit.preventDefault();
        let apiKey = `a0ec055234934001bdc16c33f46f3ecb`
        let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
        axios.get(apiUrl).then(getSearched)


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
              <h2 className="date-line"><FormattedDate date={weather.dt}/></h2>
              <h1>
                <span><FormattedTime date={weather.dt}/></span>
                <div className="weather-status">{weather.description}</div>
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
                        autoFocus="on"
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
                    <div className="small text-center">*Sometimes needs multiple submits for api response</div>
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
              Currently in <span className="city-name text-capitalize">{city}</span>
            </h3>
            <div className="row">
              <div className="col-sm-2"></div>

              <div className="col-sm-4 current-temp-number">
                <img
                  className="header-emoji"
                  src={weather.emoji}
                  alt={weather.description}
                >
                </img>
                <ConvertTemperature temp={weather.temp_current} />
              </div>
              <div className="col-sm-4 feels-like-text">
                Feels Like
                <div className="row temp-number-curr"><ConvertTemperature temp={weather.feels_like}/></div>
              </div>

              <div className="col-sm-2"></div>
            </div>
          </div>

          <div className="col-sm-6 tomorrow-temp-status">
            <h3 className="tomorrow-temp-header">
              Tomorrow in <span className="city-name-t text-capitalize">{city}</span>
            </h3>
            <div className="row elements-tomorrow-temp">
              <div className="col-sm-4 current-temp-number-t">
                <img
                  className="header-emoji"
                  src={futureWeatherTomorrow.emoji}
                  alt={futureWeatherTomorrow.description}
                >
                </img>
                <span><ConvertTemperature temp={weather.temp_current} /></span>
              </div>
              <div className="col-sm-4 feels-like-text">
                Feels Like
                <div className="row temp-number-curr"><ConvertTemperature temp={futureWeatherTomorrow.feels_like}/></div>
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
                    {weather.wind}
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
                  <div className="rain-number">{Math.trunc(weather.pop)}%</div>
                </div>
              </div>
              <div className="col-sm curr-low-section">
                <span className="factor-header-colour">LOW</span>
                <span className="thermo-colour">🌡</span>

                <div className="row">
                  <div className="low-temp-number"><ConvertTemperature temp={weather.low}/></div>
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
                  <div className="high-temp-number"><ConvertTemperature temp={weather.high}/></div>
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
                  <div className="rain-number-tom">{Math.trunc(futureWeatherTomorrow.pop)}%</div>
                </div>
              </div>
              <div className="col-sm tom-low-section">
                <span className="factor-header-colour">LOW</span>{" "}
                <span className="thermo-colour">🌡</span>
                <div className="row">
                  <div className="low-temp-number-tom"><ConvertTemperature temp={futureWeatherTomorrow.low}/></div>
                </div>
              </div>
              <div className="col-sm tom-high-section">
                <span className="factor-header-colour">HIGH 🌡</span>
                <div className="row">
                  <div className="high-temp-number-tom"><ConvertTemperature temp={futureWeatherTomorrow.high}/></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 7 DAY FORECAST SECTION */}

      <Forecast tomorrow={futureWeatherTomorrow} day2={futureDay2} day3={futureDay3} day4={futureDay4} day5={futureDay5} day6={futureDay6} day7={futureDay7} />


    </div>
   );
} else {


  
   return(
    <div>
      <div className="header-container">
      <div className="container">
          <div className="row">
            <div className="col-sm-6 current-time">
              <h2 className="date-line">-</h2>
              <h1>
                <span className="hour">-</span>
                <span className="minutes">-</span>
                <span className="am-pm">-</span>
                <div className="weather-status">-</div>
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
                      <input type="submit" value="🔍" className="magnifying-glass" autoFocus="true"/>
                    </span>
                    <button className="current-location location-button" onClick={getLocation}>
                      Current Location
                    </button>
                    <div className="small text-center">*Need to submit twice, location works after entering a search</div>
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
              Currently in <span className="city-name"></span>
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
              Tomorrow in <span className="city-name-t"></span>
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