import React, { useState } from "react";
import axios from "axios";
import "./Current.css";
import FormattedDate from "./FormattedDate";

export default function Current() {
  const [weather, setWeather] = useState({ ready: false });

  function HandleResponse(response) {
    setWeather({
      ready: true,
      temperature: response.data.main.temp,
      date: new Date(response.data.dt * 1000),
      city: response.data.name,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      description: response.data.weather[0].description
    });
  }
  if (weather.ready) {
    return (
      <div className="Weather">
        <div className="Current">
          <div className="row">
            <h3 className="CityName">{weather.city}</h3>
          </div>
          <div className="row">
            <div className="col-sm">
              <p className="Date">
                <FormattedDate date={weather.date} />
              </p>
              <ul className="WeatherInfo">
                <li>Wind: {Math.round(weather.wind)} km/h</li>
                <li>Humidity: {weather.humidity} %</li>
              </ul>
            </div>
            <div className="col-sm">
              <img
                className="Icontop"
                src="https://ssl.gstatic.com/onebox/weather/48/sunny.png"
                alt="weatherIcon"
              />
              <p className="Description">{weather.description}</p>
            </div>
            <div className="col-sm">
              <p className="Temperature">{Math.round(weather.temperature)}</p>
            </div>
            <div className="col- degre">
              <a href="/">ºC</a> | <a href="/">ºF</a>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    let apiKey = "702a27453c60ab3e15c6101724f06473";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=Lisbon&units=metric&appid=${apiKey}`;
    axios.get(apiUrl).then(HandleResponse);
    return "Wait";
  }
}
