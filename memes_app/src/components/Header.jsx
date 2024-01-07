import React from 'react'
import { Link } from 'react-router-dom'
function Header() {
  return (
    <div className='pop'>
        <ul>
          <li>Memes Genrator</li>
          <li className='popp'><Link to="/" >Home</Link></li>
          <li className='popp'><Link to='/about'>About</Link></li>
        </ul>
         
    </div>
  )
}

export default Header