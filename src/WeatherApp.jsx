import { useState } from "react";
import InfoBox from "./InfoBox";
import SearchBox from "./SearchBox";

export default function WeatherApp() {
  let [weatherInfo, setWeatherInfo] = useState({
    city: "Kishanganj",
    feels_like: 30.69,
    humidity: 36,
    temp: 31.26,
    temp_max: 31.26,
    temp_min: 31.26,
    weather: "clear sky",
  });
  let updateInfo = (newInfo) => {
    setWeatherInfo(newInfo);
  };
  return (
    <>
      <h1 style={{ margin: "2.5rem" }}>Weather Widget</h1>
      <SearchBox updateInfo={updateInfo} />
      <InfoBox info={weatherInfo} />
    </>
  );
}
