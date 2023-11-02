import React from "react";

// has the value of current temp unit choice
const CurrentTemperatureUnitContext = React.createContext({
  currentTemperatureUnit: "F",
  handleToggleSwitchChange: () => {},
});

export default CurrentTemperatureUnitContext;
