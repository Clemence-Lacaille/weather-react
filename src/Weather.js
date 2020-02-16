import React from "react";
import axios from "axios";
import Current from "./Current";
import Forecast from "./Forecast";
import Form from "./Form";

export default function Weather() {
  return (
    <div className="weather">
      <Form />
      <Current />
      <Forecast />
    </div>
  );
}
