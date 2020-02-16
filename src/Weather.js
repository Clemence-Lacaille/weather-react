import React from "react";
import axios from "axios";
import Current from "./Current";
import Forecast from "./Forecast";

export default function Weather() {
  return (
    <div className="weather">
      <Current />
      <Forecast />
    </div>
  );
}
