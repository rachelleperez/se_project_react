const WeatherCard = () => {
    console.log('weather card')

    return (
        <section className='weather' id='weather'>
            <div className='weather_info'>75F</div>
            <img src= '/images/day/day_sunny.svg' className='weather_image'/>
        </section>
    )
}

export default WeatherCard;