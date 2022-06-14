import React from 'react'
import './Header.style.css'
import { MdReorder } from "react-icons/md";
import { MdShoppingCart } from "react-icons/md";

function Header() {

 const Menu =()=>{
     return (
         <div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
             Aut consequuntur laborum, qui nostrum, eaque, laboriosam aliquid 
             incidunt optio non dolor exercitationem sapiente 
            asperiores accusantium reiciendis unde? Pariatur ut architecto dolores.</p>
         </div>
     )
 }
   

  return (
    <div className='header'>
    <div className='header_rights'>
     <MdReorder style={{width: '100px', height: '40px', cursor:'pointer'}} />
      <h1 className='iware_text'>IWare</h1>
    </div>
      <div className='cart'>
       <MdShoppingCart style={{width: '120px', height: '45px', cursor:'pointer', opacity: '0.5'}}  />
      </div>
       
           
       
    </div>
  )
}

export default Header