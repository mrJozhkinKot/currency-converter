import React from 'react'; 
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <div className='header'>
    <NavLink to='/'>Converter</NavLink>
    <NavLink to='/about'>About</NavLink>
    </div>
  )
}

export default Header;