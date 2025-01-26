import React, { useState } from 'react'
import Logo from '../../assets/main-logo@3x.webp'
import './Navbar.css'
import { Link } from 'react-router-dom'
import gsap from 'gsap'

const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(true);
  
  return (
    <>
      <header className="header">
        <div className="header-container">
          <Link to="/" className="logo">
            <img src={Logo} alt="logo" style={{filter:"invert(2)"}} />
          </Link>

          {/* Infinite Animated Text */}
          <nav className="nav">
            <ul>
              <li className="infinite-text">click on logo to go home</li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
}

export default Navbar;
