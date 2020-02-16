import React from "react";
import "./Form.css";

export default function Form() {
  return (
    <form className="citysearch">
      <input
        type="search"
        placeholder="Enter a city"
        id="search-text-input"
        autocomplete="off"
      />
      <button id="searchcity"> Search</button>
    </form>
  );
}
