// https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=imperial&appid=${APIkey}

// CurrentWeather API: https://openweathermap.org/current
// Weather Conditions: https://openweathermap.org/weather-conditions

// NYC
const latitude = 40.7128;
const longitude = -74.006;

const APIkey = "4e13ef9a50584870e10fa9c152e319bb";

export const getForecastWeather = () => {
  const weatherApi = fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=imperial&appid=${APIkey}`
  )
    .then((res) => {
      // console.log(res);
      if (res.ok) {
        return res.json();
      } else {
        return Promise.reject(`Error: ${res.status}`);
      }
    })
    .catch((err) => {
      console.log(err);
    });
  return weatherApi;
};

export const parseWeatherData = (data) => {
  // console.log(data);

  // Extract City Name
  const cityName = data.name;
  // console.log(cityName); // New York

  // Extract Weather Type
  // console.log(data.weather[0].main.toLowerCase() ); // Thunderstorm, Drizzle, Rain, Snow, Fog, Clear, Clouds
  let weatherType = null;
  if (data.weather[0].main.toLowerCase() === "thunderstorm")
    weatherType = "storm";
  else if (data.weather[0].main.toLowerCase() === "snow") weatherType = "snow";
  else if (data.weather[0].main.toLowerCase() === "fog") weatherType = "fog";
  else if (data.weather[0].main.toLowerCase() === "clear")
    weatherType = "sunny";
  else if (data.weather[0].main.toLowerCase() === "clouds")
    weatherType = "cloudy";
  else if (data.weather[0].main.toLowerCase() === "rain") weatherType = "rain";
  else if (data.weather[0].main.toLowerCase() === "drizzle")
    weatherType = "rain";
  else weatherType = "sunny"; // default
  // console.log(weatherType);

  // Extract if daytime or not
  const date = new Date();
  const currentTimeUnix = Math.floor(date.getTime() / 1000);
  const sunriseUnix = data.sys.sunrise;
  const sunsetUnix = data.sys.sunset;
  const isDaytime =
    currentTimeUnix >= sunriseUnix && currentTimeUnix < sunsetUnix;
  // console.log(isDaytime);

  // Extract current temp
  const main = data.main;
  const temperatureF = main && main.temp; // ceil to round to whole number
  // console.log(temperature);

  // Summary of parsed data
  const parsedData = {
    cityName: cityName,
    weatherType: weatherType,
    isDaytime: isDaytime,
    temperatureF: temperatureF, // Farenheit
  };

  return parsedData;
};
