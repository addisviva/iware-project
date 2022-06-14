import React from 'react'
import './Searchbar.css'
import {MdSearch  } from "react-icons/md";

function Searchbar() {
  return (
    <div className='search'>  
     <form className='search_form'> 
      <input type="text" className='searchbar' placeholder='Search Here'
      />
      <MdSearch style={{
          width: '30px', 
          height:'190px', 
          position: 'fixed', 
          top: '25px'
        }} />
    </form>
    </div>
  )
}

export default Searchbar