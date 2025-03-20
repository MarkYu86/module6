import { useState } from "react";

// Child component - receives parent state handler via props
function CheckWeather(props) {
  const weatherTypes = [
    "sunny",
    "windy",
    "raining",
    "cloudy",
    "solar storm",
    "solar wind",
    "Jupiter Great Red Spot",
  ];
  // generates new random weather data and updates state via prop
  const randomWeather = () => {
    let newTemp = 0;
    let newWeatherIndex = Math.floor(Math.random() * weatherTypes.length);
    let newWeather = weatherTypes[newWeatherIndex];
    // ++ try to destructure this function from the props object
    switch (newWeather) {
      case "solar storm":
        newTemp = Math.floor(Math.random() * (2000000 - 1000000) + 1000000);
        break;
      case "solar wind":
        newTemp = Math.floor(Math.random() * (200000 - 100000) + 100000);
        break;
      case "Jupiter Great Red Spot":
        newTemp = -160;
        break;
      default:
        newTemp = Math.floor(Math.random() * 40);
    }

    // Pass the new weather and temperature to the parent
    props.onWeatherChange(newWeather, newTemp);
  };
  return <button onClick={randomWeather}>Check Weather</button>;
}
// ++ Add some more weather types of your own
// Child component to display and convert temp if needed
function Temperature({ temp, units = "C" }) {
  // default to celcius
  // convert to Fahrenheit if units is F (or not C)
  let displayTemp = units === "C" ? temp : (temp * 9) / 5 + 32;
  return (
    <span className="Temperature">
      <strong>
        {" "}
        {parseInt(displayTemp)}&deg;{units}{" "}
      </strong>
    </span>
  );
}
// ++ Try adding a button to convert between C and F temps
// Parent component storing common state data
function Weather() {
  // copy to Weather.jsx
  // two separate state values to store weather data
  const [weather, setWeather] = useState("sunny");
  const [tempCelcius, setTempCelcius] = useState(27);
  const [units, setUnits] = useState("C");
  // handler function to update both state values at once
  const handleWeatherChange = (newWeather, newTemp) => {
    setWeather(newWeather);
    setTempCelcius(newTemp);
  };
  const toggleUnits = () => {
    setUnits((prevUnits) => (prevUnits === "C" ? "F" : "C"));
  };
  return (
    <div className="Weather componentBox">
      <h2>Today's Weather</h2>
      <div>
        <strong>{weather}</strong> with a temp of
        {/* Child component to display temp -
    needs temp value as prop */}
        <Temperature temp={tempCelcius} units={units} />
      </div>
      <button onClick={toggleUnits}>
        Convert to {units === "C" ? "F" : "C"}
      </button>
      {/* Child component to update the weather -
    needs handler function as prop */}
      <CheckWeather onWeatherChange={handleWeatherChange} />
    </div>
  );
}
export default Weather;
