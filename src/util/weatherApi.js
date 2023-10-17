// https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=imperial&appid=${APIkey}

// 4e13ef9a50584870e10fa9c152e319bb 

const latitude = 44.34;
const longitude = 10.99;
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
    const main= data.main
    const temperature = main && main.temp;
    // console.log(Math.ceil(temperature));
    return Math.ceil(temperature) // ceil to round to whole number
}