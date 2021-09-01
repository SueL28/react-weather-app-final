import React, {useState} from "react";


import "./Searchbar.css";

export default function Searchbar() {

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

      function submitEntry(submit){
        submit.preventDefault();
        let apiKey = `a0ec055234934001bdc16c33f46f3ecb`
        let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
        axios.get(apiUrl).then(getSearched)




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
