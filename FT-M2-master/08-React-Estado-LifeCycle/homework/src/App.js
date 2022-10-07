import React, { useState } from 'react';
import './App.css';

import Nav from './components/Nav';
import Cards from './components/Cards';
import axios from 'axios';
const apiKey = '7479319e474e86f0c7f383825bacc4eb'

function App() {

  const [cities, setCities] = useState([]);

  const onSearch = (ciudad) => {
    axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${apiKey}&units=metric`).then((response) => setCities(oldCities=>[...oldCities,response.data]))
  }
  const onClose = (id) => {
    setCities(cities => cities.filter(city => city.id !== id))
  }
  return (
    <div className="App">

      <div>
        <Nav onSearch={onSearch} />
       
      </div>

      <Cards cities={cities} onClose={onClose}/>
    
    </div>
  );
}



export default App;
