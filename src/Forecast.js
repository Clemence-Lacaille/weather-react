import React, { useState } from "react";
import "./Forecast.css";
import WeatherIcon from "./WeatherIcon";
import axios from "axios";

export default function Forecast(props) {
  const [loaded, setLoaded] = useState(false);
  const [forecast, setForecast] = useState(null);

  function HandleResponse(response) {
    console.log(response);
    setForecast(response.data.list.slice(0, 5));
    setLoaded(true);
  }

  function formatHours(date) {
    let hours = date.getHours();
    if (hours < 10) {
      hours = `0${hours}`;
    }
    let minutes = date.getMinutes();
    if (minutes < 10) {
      minutes = `0${minutes}`;
    }
    return `${hours}:${minutes}`;
  }

  if (loaded) {
    return (
      <div className="Forecast">
        <div className="row">
          {forecast.map(function(weather) {
            return (
              <div className="col">
                <div className="hours">
                  {" "}
                  {formatHours(new Date(weather.dt * 1000))}
                </div>
                <div className="Icon">
                  {" "}
                  <WeatherIcon code={weather.weather[0].icon} />
                </div>
                <div>{Math.round(weather.main.temp)}ºC</div>
              </div>
            );
          })}
        </div>
      </div>
    );
  } else {
    let apiKey = "702a27453c60ab3e15c6101724f06473";

    let apiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${props.city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(HandleResponse);
    return null;
  }
}
