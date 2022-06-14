import React from 'react'
import { ImHome } from 'react-icons/im';
import { VscAccount } from 'react-icons/vsc';
import { TbEyeglass } from 'react-icons/tb';
import './Navbar.css'
function Navbar() {
  return (
    <footer className='navbar'>
      <ul className='navbar_lists'>
        <li className='navbar_list_item'> <ImHome /> </li>
        <li className='navbar_list_item'><TbEyeglass /> </li>
        <li className='navbar_list_item'>  <VscAccount /> </li>
        
      </ul>
    
    
    </footer>
  )
}

export default Navbar