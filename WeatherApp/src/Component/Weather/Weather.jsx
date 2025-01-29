import React, { useEffect, useState } from "react";
import { Search } from "../Search/Search";

export const Weather = () => {
  const [city, setCity] = useState("");
  const [weatherReport, setWeatherReport] = useState(null);

  async function fetchWeatherDetails(city) {
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=96a0be26f1eff55bfa3f8dec0b2b8af7`
      );

      if (!response.ok) {
        throw new Error(`Error: ${response.status} - ${response.statusText}`);
      }

      const data = await response.json();

      console.log(data);
      setWeatherReport(data);
    } catch (error) {
      console.error("Failed to fetch weather details:", error);
    }
  }

  async function handleSubmit() {
    fetchWeatherDetails(city);
  }
  function getCurrentDate() {
    return new Date().toLocaleDateString("en-us", {
      weekday: "long",
      month: "long",
      day: "numeric",
      year: "numeric",
    });
  }

  useEffect(() => {
    fetchWeatherDetails("Tufanganj");
  }, []);

  return (
    <div>
      <Search city={city} setCity={setCity} handleSearch={handleSubmit} />
      <div>
        {weatherReport ? (
          <div className="city-name">
            <h3>
              {weatherReport.name}, <span>{weatherReport.sys.country}</span>
            </h3>
            <div className="Date">
              <span>{getCurrentDate()}</span>
            </div>
            <div className="description">
              {weatherReport.weather[0].description}
            </div>
            <div className="wind">{weatherReport.wind.speed}</div>
          </div>
        ) : null}
      </div>
    </div>
  );
};
