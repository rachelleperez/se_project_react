import { useState, userContext, useEffect } from "react";
import "./ToggleSwitch.css";
import CurrentTemperatureUnitContext from "../../contexts/CurrentTemperatureUnitContext";

// renders ToggleSwitch component, a switch to toggle between temps
const ToggleSwitch = () => {
  const { CurrentTemperatureUnitContext, handleToggleSwitchChange } =
    useContext(CurrentTemperatureUnitContext);

  const [isChecked, setIsChecked] = useState(currentTemperatuteUnit === "C");
  useEffect(
    () => setIsChecked(currentTemperatuteUnit === "C"),
    [currentTemperatuteUnit]
  );

  return (
    <div className="toggle-switch">
      <label className="toggle-switch__label">
        <input
          className="toggle-switch_checkbox toggle-switch__checkbox_state_hidden"
          type="checkbox"
          name="toggle-switch-checkbox"
          value={currentTemperatuteUnit}
          onChange={handleToggleSwitchChange}
          checked={isChecked}
        />
        <span className="toggle-switch__checkbox toggle-switch__checkbox_state_visible" />
      </label>
    </div>
  );
};

export default ToggleSwitch;
