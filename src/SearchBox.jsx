import "./SearchBox.css";
import { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import SearchIcon from "@mui/icons-material/Search";
import IconButton from "@mui/material/IconButton";

export default function SearchBox({ updateInfo }) {
  let [city, setCity] = useState("");
  let [info, setInfo] = useState({});
  let [err, setErr] = useState(false);
  const API_URL = "http://api.openweathermap.org/data/2.5/weather";
  const API_KEY = "47c57b28c2ada4bd6d889c9a6e289338";
  const currWeatherData = async () => {
    try {
      setErr(false);
      let response = await fetch(
        `${API_URL}?q=${city}&appid=${API_KEY}&units=metric`
      );
      console.log(response);
      let jsonResponse = await response.json();
      console.log(jsonResponse);
      let result = {
        city: jsonResponse.name,
        feels_like: jsonResponse.main.feels_like,
        humidity: jsonResponse.main.humidity,
        temp: jsonResponse.main.temp,
        temp_max: jsonResponse.main.temp_max,
        temp_min: jsonResponse.main.temp_min,
        weather: jsonResponse.weather[0].description,
      };
      console.log(result);
      return result;
    } catch (err) {
      throw err;
    }
  };
  return (
    <>
      <div className="SearchBox">
        <form
          onSubmit={async (e) => {
            try {
              e.preventDefault();
              console.log(city);
              let newInfo = await currWeatherData(city);
              setCity("");
              updateInfo(newInfo);
            } catch (err) {
              setErr(true);
            }
          }}
        >
          <TextField
            id="city"
            label="City Name"
            variant="outlined"
            required
            value={city}
            onChange={(e) => {
              setCity(e.target.value);
            }}
          />
          {/* <br />
          <br />
          <Button type="submit" variant="contained" endIcon={<SearchIcon />}>
            Search
          </Button> */}
          <IconButton aria-label="Search" type="submit">
            <SearchIcon />
          </IconButton>
        </form>
        {err && <p style={{ color: "red" }}>No such place exists!</p>}
      </div>
    </>
  );
}
