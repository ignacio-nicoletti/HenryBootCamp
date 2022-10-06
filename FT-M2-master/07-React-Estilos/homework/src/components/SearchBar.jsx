import React from 'react';
import search from './search.module.css';

export default function SearchBar(props) {
  // acá va tu código
  return (
  <div className={search.container}>
    <input type="text" />
    <button className={search.btn} onClick={()=>props.onSearch('buscando ciudad...')}>agregar</button>
    </div>)
};