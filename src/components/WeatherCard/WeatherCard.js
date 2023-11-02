import "./WeatherCard.css";
import { weatherOptions } from "../../utils/constants";

import { useContext } from "react";

const WeatherCard = ({ day, type, displayTemp, currentTempUnit }) => {
  // console.log('weather card');

  const imageSrc = weatherOptions.filter((i) => {
    return i.day === day && i.type === type;
  });

  const imageSrcUrl = imageSrc[0].url || "";

  return (
    <section className="weather" id="weather">
      <div className="weather_info">
        {displayTemp}°{currentTempUnit}
      </div>
      <img src={imageSrcUrl} className="weather_image" alt={displayTemp} />
    </section>
  );
};

export default WeatherCard;
