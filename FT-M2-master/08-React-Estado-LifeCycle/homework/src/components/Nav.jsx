import React from 'react';
import Logo from '../logoHenry.png'
import SearchBar from './SearchBar.jsx';
import estilo from './Nav.module.css';


function Nav({onSearch}) {
  return (
      <div className={estilo.nav}>
          
          
          <img className={estilo.logoHenry} src={Logo} alt="" />
          
          <span>Henry-Weather App</span>
          
          <SearchBar onSearch={onSearch} className={estilo.search} />
      
      </div>
  );
};

export default Nav;
