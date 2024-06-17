import React, { useState } from 'react'
import './Navbar.css'
import amberWhite from '../assets/amberwhite.png'

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  return (
    <nav className="navbar">
      <img src={amberWhite} alt="Logo" className="title" />

      {/* <h2 className="title">Amber</h2> */}
      
        <div className="menu" onClick={() => {
          setMenuOpen(!menuOpen);
        }}>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <ul className={menuOpen ? "open" : ""}>
          <li>Home</li>
          <li>About</li>
          <li>Services</li>
          <li>Contact</li>
        </ul>
      
    </nav>
  )
}

export default Navbar