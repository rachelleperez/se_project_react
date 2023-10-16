import logo from '../logo.svg';
import './App.css';
import ItemCard from '../ItemCard/ItemCard';
import Header from '../Header/Header'

function App() {
  return (
    <div>
    <Header/>
    <main className='main'>
      <section className='weather' id='weather'>
        <div className='weather_info'>75F</div>
        <img src= '/images/day/day_sunny.svg' className='weather_image'/>
      </section>
      <section id='card-section'>
        card section
      </section>
    </main>
    </div>
  );
}

export default App;
