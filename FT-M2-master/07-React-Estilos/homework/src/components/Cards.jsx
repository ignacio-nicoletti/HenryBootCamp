import React from 'react';
import Card from './Card';

import cards from './cards.module.css';

export default function Cards(props) {
  // acá va tu código
  // tip, podés usar un map
  return (



    <div className={cards.box}>
     

      {props.cities.map(el => <Card
        max={el.main.temp_max}
        min={el.main.temp_min}
        name={el.name}
        img={el.weather[0].icon}

      />

)}
    </div>
  )
};