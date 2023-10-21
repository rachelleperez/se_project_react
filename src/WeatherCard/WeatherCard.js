import './WeatherCard.css';
import {weatherOptions} from '../util/constants';

const WeatherCard = ({day, type, weatherTemp}) => {
    
    // console.log('weather card');

    const imageSrc = weatherOptions.filter((i) => {
        return i.day === day && i.type === type;
    })

    const imageSrcUrl = imageSrc[0].url || ""; 
    
    return (
        <section className='weather' id='weather'>
            <div className='weather_info'>{weatherTemp}°F</div>
            <img src= {imageSrcUrl} className='weather_image' alt={weatherTemp}/>
        </section>
    )
}

export default WeatherCard;