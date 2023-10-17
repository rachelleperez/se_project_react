import WeatherCard from './../WeatherCard/WeatherCard'
import ItemCard from './../ItemCard/ItemCard'
import {defaultClothingItems } from '../util/constants';
import './Main.css';

function Main({weatherTemp, onSelectCard}) {
    return <main className='main'>
      <WeatherCard day={false} type='snow' weatherTemp = {weatherTemp} />
      <section className='card_section' id='card-section'>
        Today is {weatherTemp} °F / You may want to wear:
        <div className='card_items' id='card-items'>
          {defaultClothingItems.map((item) => (
            // console.log(`item_card_${item._id}`),
            <ItemCard key={`item_card_${item._id}`} item={item} onSelectCard={onSelectCard} />
          ))}
        </div>
      </section>
    </main>;
  }

export default Main;