import './App.css';
import Header from '../Header/Header'
import Main from '../Main/Main';
import Footer from '../Footer/Footer'
// import {useState} from "react";

function App() {
  const weatherTemp = '102';
  // const [activeModal, setActiveModal] = useState() // sets default state for modals
  return (
    <div>
    <Header />
    <Main weatherTemp = {weatherTemp}/>
    <Footer/>
    </div>
  );

}

export default App;
