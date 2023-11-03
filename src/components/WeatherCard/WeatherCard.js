import "./WeatherCard.css";
import { weatherOptions } from "../../utils/constants";
import CurrentTemperatureUnitContext from "../../contexts/CurrentTemperatureUnitContext";

import { useContext } from "react";

const WeatherCard = ({ day, type, displayTemp }) => {
  // console.log('weather card');

  const { currentTemperatureUnit } = useContext(CurrentTemperatureUnitContext);

  const imageSrc = weatherOptions.filter((i) => {
    return i.day === day && i.type === type;
  });

  const imageSrcUrl = imageSrc[0].url || "";

  return (
    <section className="weather" id="weather">
      <div className="weather_info">
        {displayTemp}°{currentTemperatureUnit}
      </div>
      <img src={imageSrcUrl} className="weather_image" alt={displayTemp} />
    </section>
  );
};

export default WeatherCard;
