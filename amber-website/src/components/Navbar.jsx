import './Navbar.css'
import amberWhite from '../assets/amberwhite.png'


function Navbar() {
  return (
    <nav className="navbar">
      <img src={amberWhite} />
      <div className="menu-icon">
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Services</li>
        <li>Contact</li>
      </ul>
      </div>
    </nav>
  )
}

export default Navbar