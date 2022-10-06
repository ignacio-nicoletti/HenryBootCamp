import React, { useState } from "react";
import search from './Nav.module.css';


export default function SearchBar({ onSearch }) {
  const [input, setInput] = useState('');

  const handlerChange = (event) => { setInput(event.target.value); }
  return (
    
    
    <div>
      <input onChange={handlerChange} type="text" placeholder="Ciudad..." />

      <button onClick={() => onSearch('Buscando ciudad...')}> agregar ciudad</button>
      
    </div>
  );
}
