import React from 'react';
import card from './card.module.css';

export default function Card(props) {
  // acá va tu código
  return (
  
   <div className={card.box}>
   
  
  
   <button className={card.button}>X</button>  
   <h5>{props.name}</h5>
    
    <p>min: {props.min}°</p>     
    <p>Max: {props.max}°</p>
    
    <img src={`http://openweathermap.org/img/wn/${props.img}@2x.png`} alt="imagen" />
    
  </div>
  )
};