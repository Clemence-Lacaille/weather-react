import React from "react";
import axios from "axios";

export default function Weather() {
  function handleResponse() {
    let apiKey = "702a27453c60ab3e15c6101724f06473";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(url).then(searchWeather);
  }
}
