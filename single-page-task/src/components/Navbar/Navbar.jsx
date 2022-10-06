import React from 'react'
import { Link } from 'react-router-dom'
import "./style.css"

const Navbar = () => {
  return (
    <nav>
      <div className="nav-container">
        <ul>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/about'>About</Link></li>
          <li><Link to='/userpage'>UserPage</Link></li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar