import React from "react";
import axios from "axios";
import Current from "./Current";
import Forecast from "./Forecast";

import "./Weather.css";

export default function Weather() {
  return (
    <div className="weather">
      <Current defaultCity="New Orleans" />
      <Forecast />
      <small>
        <a href="https://github.com/Clemence-Lacaille/weather-react">
          Open source code
        </a>{" "}
        by Clémence Lacaille{" "}
      </small>
    </div>
  );
}
