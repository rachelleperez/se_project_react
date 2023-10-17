// https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=imperial&appid=${APIkey}

// CurrentWeather API: https://openweathermap.org/current 
// Weather Conditions: https://openweathermap.org/weather-conditions

// NYC
const latitude = 40.7128;
const longitude = -74.0060;

const APIkey = '4e13ef9a50584870e10fa9c152e319bb';

export const getForecastWeather = () => {
    const weatherApi = fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=imperial&appid=${APIkey}`)
        .then((res) => {
            // console.log(res);
            if (res.ok) {
                return res.json();
            }
            else {
                return Promise.reject(`Error: ${res.status}`)
            }
        });
    return weatherApi;
};

export const parseWeatherData = (data) => {
    // console.log(data);

    // Extract City Name
    const cityName = data.name
    // console.log(cityName); // New York

    // Extract Weather Type
    // console.log(data.weather[0].main); // Thunderstorm, Drizzle, Rain, Snow, Fog, Clear, Clouds
    let weatherType = null;
    if (data.weather[0].main.toLowerCase() === 'thunderstorm') weatherType = 'storm'
        else if (data.weather[0].main.toLowerCase() === 'snow') weatherType = 'snow'
        else if (data.weather[0].main.toLowerCase() === 'fog') weatherType = 'fog'
        else if (data.weather[0].main.toLowerCase() === 'clear') weatherType = 'sunny'
        else if (data.weather[0].main.toLowerCase() === 'clouds') weatherType = 'cloudy'
        else if (data.weather[0].main.toLowerCase() === 'rain') weatherType = 'rain'
        else if (data.weather[0].main.toLowerCase() === 'drizzle') weatherType = 'rain'
        else weatherType = 'sunny' // default
    // console.log(weatherType);

    
    // Extract if daytime or not
    const date = new Date();
    const currentTimeUnix = Math.floor(date.getTime() / 1000);
    const sunriseUnix = data.sys.sunrise;
    const sunsetUnix = data.sys.sunset;
    const isDaytime = (currentTimeUnix >= sunriseUnix) && (currentTimeUnix < sunsetUnix)
    // console.log(isDaytime);

    // Attempt to generate date from timezone
    // console.log(date);
    // const timezoneOffsetMinutes = date.getTimezoneOffset(); // Get the time zone offset in minutes
    // console.log(timezoneOffsetMinutes );
    // date.setTime(date.getTime() - timezoneOffsetMinutes * 60 * 1000); // Note the negative sign for UTC offset

    // const timezoneOffsetSeconds = data.timezone; 
    // const currentDateInUTC = new Date();
    // const currentDateInLocation = new Date(currentDateInUTC.getTime() + timezoneOffsetSeconds * 1000);
    // console.log(currentDateInLocation)

    // Extract date based on local time of lat/long 

    // let day = date.getDate()
    // let month = date.toLocaleString('default', { month: 'long' });
    // let year = date.getFullYear();  // to update Footer
    // console.log(month); // for Header
    // console.log(day); // For Footer
    // console.log(year); // for Footer

    // Extract current temp
    const main= data.main
    const temperature = main && Math.ceil(main.temp); // ceil to round to whole number
    // console.log(temperature);

    // summary of parsed data
    const parsedData = {
        cityName: cityName,
        weatherType: weatherType,
        isDaytime: isDaytime,
        // month: month,
        // day: day, 
        // year: year,
        temperature: temperature
    }

    return parsedData 
}