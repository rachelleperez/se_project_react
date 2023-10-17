import WeatherCard from './../WeatherCard/WeatherCard'
import ItemCard from './../ItemCard/ItemCard'
import {defaultClothingItems } from '../util/constants';
import './Main.css';
import {useMemo} from 'react'

function Main({weatherTemp, onSelectCard, weatherType, isDaytime}) {

    const weatherTempLevel = useMemo ( () => {
      if (weatherTemp >= 86) {
        return 'hot';
      } else if (weatherTemp >= 66 && weatherTemp <= 85) {
        return 'warm';
      } else if (weatherTemp <= 65) {
        return 'cold';
      }
    }, [weatherTemp])

    // console.log(weatherType);

    // keep cards matching current weatherTempLevel
    const filteredCards = defaultClothingItems.filter((item) => {
      // console.log(item)
      return item.weather.toLowerCase().trim() === weatherTempLevel
    })

    // console.log(filteredCards);

    return <main className='main'>
      <WeatherCard day={isDaytime} type={weatherType} weatherTemp = {weatherTemp} />
      <section className='card_section' id='card-section'>
        Today is {weatherTemp} °F / You may want to wear:
        <div className='card_items' id='card-items'>
          {filteredCards.map((item) => (
            // console.log(`item_card_${item._id}`),
            <ItemCard key={`item_card_${item._id}`} item={item} onSelectCard={onSelectCard} />
          ))}
        </div>
      </section>
    </main>;
  }

export default Main;