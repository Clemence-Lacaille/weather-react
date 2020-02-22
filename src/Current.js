import React from "react";
import axios from "axios";
import "./Current.css";

export default function Current() {
  return (
    <div className="Weather">
      <div className="Current">
        <div className="row">
          <h3 className="CityName">Lisbon</h3>
        </div>
        <div className="row">
          <div className="col-sm">
            <p className="Date">12/02/2020</p>
            <ul className="WeatherInfo">
              <li>Précipitation</li>
              <li>Wind</li>
            </ul>
          </div>
          <div className="col-sm">
            <img
              className="Icontop"
              src="https://ssl.gstatic.com/onebox/weather/48/sunny.png"
              alt="weatherIcon"
            />
            <p className="Description">Rainy</p>
          </div>
          <div className="col-sm">
            <p className="Temperature">22°C</p>
          </div>
        </div>
      </div>
      <div />
    </div>
  );
}
