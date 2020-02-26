import React from "react";

import Current from "./Current";

import "./Weather.css";

export default function Weather(props) {
  return (
    <div className="weather">
      <Current defaultCity="New Orleans" />

      <small>
        <a href="https://github.com/Clemence-Lacaille/weather-react">
          Open source code
        </a>{" "}
        by Clémence Lacaille{" "}
      </small>
    </div>
  );
}
