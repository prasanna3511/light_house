
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './NavBar.css';

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate(); // Get the navigate function from React Router

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const onAboutTextClick = () => {
    navigate("/about"); // Use the navigate function to navigate to the About page
  };

  const onServicesTextClick = () => {
    navigate("/services"); // Use the navigate function to navigate to the Services page
  };

  const onContactTextClick = () => {
    navigate("/contact"); // Use the navigate function to navigate to the Contact page
  };

  return (
    <nav className={`navbar ${menuOpen ? 'open' : ''}`}>
      <div className="menu-toggle" onClick={toggleMenu}>
        <div className={`bar ${menuOpen ? 'open' : ''}`}></div>
        <div className={`bar ${menuOpen ? 'open' : ''}`}></div>
        <div className={`bar ${menuOpen ? 'open' : ''}`}></div>
      </div>
      <div className="glossary21">Glossary</div>
      <div className="about16" onClick={onAboutTextClick}>
        About
      </div>
      <div className="home16">Home</div>
      <div className="rent-a-skill21">Rent- a- skill</div>
      <div className="services21" onClick={onServicesTextClick}>
        Services
      </div>
      <div className="contact16" onClick={onContactTextClick}>
        Contact
      </div>
      <ul className="menu">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/services">Services</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </nav>
  );
};

export default NavBar;