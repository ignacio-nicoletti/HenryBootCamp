import React from 'react';

export default function Card(props) {
  // acá va tu código
  return (
  
   <div>
   
   <button>X</button>
   <h5>{props.name}</h5>
    <h6>Min</h6>
    <p>{props.min}°</p>
    <h6>Max</h6>
    <h6>{props.max}°</h6>
    <img src={`http://openweathermap.org/img/wn/${props.img}@2x.png`} alt="imagen" />
  

  
  </div>)
};