import React, { useState } from 'react';
import './App.css';

import Nav from './components/Nav';
import Cards from './components/Cards';
import axios from 'axios';

function App() {

  const [cities, setCities] = useState([]);

  const onSearch = (ciudad) => {
    axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${apiKey}&units=metric`).then((response) => setCities(oldCities=>[...oldCities,response.data]))
  }

  return (
    <div className="App">

      <div>
        <Nav onSearch={onSearch} />
        <SearchBar />
      </div>

      <Cards cities={data} />
    
    </div>
  );
}



export default App;
