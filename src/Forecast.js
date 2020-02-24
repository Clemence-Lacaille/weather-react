import React from "react";
import "./Forecast.css";

export default function Forecast() {
  return (
    <div className="Forecast">
      <div class="row">
        <div class="col-md-5th-1 col-sm-2 col-md-offset-0 col-sm-offset-2">
          Monday
        </div>
        <div class="col-md-5th-1 col-sm-2">Tuesday</div>
        <div class="col-md-5th-1 col-sm-2">Wednesday</div>
        <div class="col-md-5th-1 col-sm-2">Thursday</div>
        <div class="col-md-5th-1 col-sm-2">Friday</div>
        <div class="col-md-5th-1 col-sm-2">Saturday</div>
      </div>

      <div className="row icons">
        <div className="col-md-2">
          <img
            className="Icon"
            src="https://ssl.gstatic.com/onebox/weather/48/partly_cloudy.png"
            alt="weatherIcon"
          />
        </div>
        <div className="col-md-2">
          <img
            className="Icon"
            src="https://ssl.gstatic.com/onebox/weather/48/partly_cloudy.png"
            alt="weatherIcon"
          />
        </div>
        <div className="col-md-2">
          <img
            className="Icon"
            src="https://ssl.gstatic.com/onebox/weather/48/sunny.png"
            alt="weatherIcon"
          />
        </div>
        <div className="col-md-2">
          <img
            className="Icon"
            src="https://ssl.gstatic.com/onebox/weather/48/sunny.png"
            alt="weatherIcon"
          />
        </div>
        <div className="col-md-2">
          <img
            className="Icon"
            src="https://ssl.gstatic.com/onebox/weather/48/sunny.png"
            alt="weatherIcon"
          />
        </div>
        <div className="col-md-2">
          <img
            className="Icon"
            src="https://ssl.gstatic.com/onebox/weather/48/partly_cloudy.png"
            alt="weatherIcon"
          />
        </div>
      </div>
      <div className="row temperatures">
        <div className="col-md-2">21</div>
        <div className="col-md-2">21</div>
        <div className="col-md-2">21</div>
        <div className="col-md-2">21</div>
        <div className="col-md-2">21</div>
        <div className="col-md-2">21</div>
      </div>
    </div>
  );
}
