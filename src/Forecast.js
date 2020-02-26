import React, { useState } from "react";
import "./Forecast.css";
import WeatherIcon from "./WeatherIcon";
import axios from "axios";

export default function WeatherForecast(props) {
  const [loaded, setLoaded] = useState(false);
  const [forecast, setForecast] = useState(null);

  function HandleResponse(response) {
    setForecast(response.data);
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

  if (loaded && forecast.city.name === props.city) {
    return (
      <div className="WeatherForecast row">
        {forecast.list.slice(0, 5).map(function(weather) {
          return (
            <div className="col">
              <div className="hours">
                {formatHours(new Date(weather.dt * 1000))}
              </div>
              <div className="Icon">
                <WeatherIcon code={weather.weather[0].icon} />
              </div>
              <div className="temperatures">
                {Math.round(weather.main.temp)}°C
              </div>
            </div>
          );
        })}
      </div>
    );
  } else {
    let apiKey = "702a27453c60ab3e15c6101724f06473";

    let apiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${props.city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(HandleResponse);
    return null;
  }
}
