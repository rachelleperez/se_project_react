import { useState, useContext, useEffect } from "react";
import "./ToggleSwitch.css";
import CurrentTemperatureUnitContext from "../../contexts/CurrentTemperatureUnitContext";

// renders ToggleSwitch component, a switch to toggle between temps
const ToggleSwitch = () => {
  const { currentTemperatureUnit, handleToggleSwitchChange } = useContext(
    CurrentTemperatureUnitContext
  );

  return (
    <label className="toggle-switch__label">
      <input
        className="toggle-switch__checkbox"
        type="checkbox"
        name="toggle-switch-checkbox"
        value={currentTemperatureUnit}
        onChange={handleToggleSwitchChange}
      />

      <span
        className={`switch__slider switch__slider-${currentTemperatureUnit}`}
      >
        {currentTemperatureUnit}
      </span>

      <span
        className={`switch__placeholder switch__placeholder-${currentTemperatureUnit}`}
      >
        {currentTemperatureUnit === "F" ? "C" : "F"}
      </span>
    </label>
  );
};

export default ToggleSwitch;
