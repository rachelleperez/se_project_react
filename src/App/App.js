import logo from '../logo.svg';
import './App.css';
import ItemCard from '../ItemCard/ItemCard';
import Header from '../Header/Header'
import WeatherCard from '../WeatherCard/WeatherCard';

function App() {
  return (
    <div>
    <Header/>
    <main className='main'>
      <WeatherCard day ={false} type='snow'/>
      <section id='card-section'>
        card section
      </section>
    </main>
    </div>
  );
}

export default App;
