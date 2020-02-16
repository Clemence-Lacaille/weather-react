import React from "react";
import "./Forecast.css";

export default function Forecast() {
  return (
    <div className="Forecast">
      <div className="row days">
        <div className="col-1">Monday</div>
        <div className="col-1">Tuesday</div>
        <div className="col-1">Wednesday</div>
        <div className="col-1">Thursday</div>
        <div className="col-1">Friday</div>
      </div>
      <div className="row icons">
        <div className="col-1">
          <img
            className="Icon"
            src="https://ssl.gstatic.com/onebox/weather/48/sunny.png"
            alt="weatherIcon"
          />
        </div>
        <div className="col-1">
          <img
            className="Icon-1"
            src="https://ssl.gstatic.com/onebox/weather/48/sunny.png"
            alt="weatherIcon"
          />
        </div>
        <div className="col-1">
          <img
            className="Icon"
            src="https://ssl.gstatic.com/onebox/weather/48/sunny.png"
            alt="weatherIcon"
          />
        </div>
        <div className="col-1">
          <img
            className="Icon"
            src="https://ssl.gstatic.com/onebox/weather/48/sunny.png"
            alt="weatherIcon"
          />
        </div>
        <div className="col-1">
          <img
            className="Icon"
            src="https://ssl.gstatic.com/onebox/weather/48/sunny.png"
            alt="weatherIcon"
          />
        </div>
      </div>
      <div className="row temperatures">
        <div className="col-1">21</div>
        <div className="col-1">21</div>
        <div className="col-1">21</div>
        <div className="col-1">21</div>
        <div className="col-1">21</div>
      </div>
    </div>
  );
}
