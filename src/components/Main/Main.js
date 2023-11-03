import WeatherCard from "./../WeatherCard/WeatherCard";
import ItemCard from "./../ItemCard/ItemCard";
import "./Main.css";
import { useMemo, useContext } from "react";

import CurrentTemperatureUnitContext from "../../contexts/CurrentTemperatureUnitContext";

function Main({
  weatherTemp,
  onSelectCard,
  weatherType,
  isDaytime,
  clothingItems,
}) {
  const weatherTempLevel = useMemo(() => {
    if (weatherTemp >= 86) {
      return "hot";
    } else if (weatherTemp >= 66 && weatherTemp <= 85) {
      return "warm";
    } else if (weatherTemp <= 65) {
      return "cold";
    }
  }, [weatherTemp]);

  // console.log(weatherType);

  // keep cards matching current weatherTempLevel
  const filteredCards = clothingItems.filter((item) => {
    // console.log(item)
    return item.weather.toLowerCase().trim() === weatherTempLevel;
  });

  // prepare display temp: F>C change only aplies to display elements. Any logic within the app will be based on Farenheit temp stored in weatherTemp

  const { currentTemperatureUnit } = useContext(CurrentTemperatureUnitContext);

  const displayTemp =
    currentTemperatureUnit === "F"
      ? Math.round(weatherTemp)
      : Math.round(((weatherTemp - 32) * 5) / 9);

  return (
    <main className="main">
      <WeatherCard
        day={isDaytime}
        type={weatherType}
        displayTemp={displayTemp}
        currentTempUnit={currentTemperatureUnit}
      />
      <section className="card_section" id="card-section">
        Today is {displayTemp}°{currentTemperatureUnit} / You may want to wear:
        <div className="card_items" id="card-items">
          {filteredCards.map((item) => (
            <ItemCard
              key={`filtered_item_card_${item._id}`}
              item={item}
              onSelectCard={onSelectCard}
            />
          ))}
        </div>
      </section>
    </main>
  );
}

export default Main;
