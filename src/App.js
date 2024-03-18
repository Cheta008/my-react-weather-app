import './App.css';

import Form from "./Form.js";
import City from "./City.js";
import Date from './Date.js';
import Time from "./Time.js";
import Description from "./Description.js";
import Icon from "./Icon.js";
import Temperature from "./Temperature.js";
import Humidity from "./Humidity.js";
import Wind from "./Wind.js";
import Forecast from './Forecast';
import Footer from "./Footer.js";


function App() {
  return (
    <div className="App">
      <div className='container'>
      <div className='Fav-places'>
      <ul>
        <li> <a href="/" target="_blank" rel="noreferrer">Abuja</a></li>
        <li> <a href="/" target="_blank" rel="noreferrer">Paris</a></li>
        <li> <a href="/" target="_blank" rel="noreferrer">London</a></li>
        <li> <a href="/" target="_blank" rel="noreferrer">Toronto</a></li>
      </ul>
      </div>
      <Form />
      <div className='weather-summary'> 
        <City />
        <Date/> <Time/> <br />
        <Description />
      </div>
      <div className='weather'>
      <div className='weather-temp'>
        <Icon /><Temperature />< span className='temp-unit'>°C</span>
      </div>
       <div className='weather-details'>
        <Humidity /><br /><Wind />
      </div>
      </div>
      <Forecast />
      <Footer />
      </div>
      </div>
  );
}

export default App;
