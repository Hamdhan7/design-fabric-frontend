// Navbar.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons'; // Import the sandwich menu icon
import './Navbar.css';
import userPhoto from './user.png';

const Navbar = () => {
    const [isMenuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!isMenuOpen);
    };

    return (
        <nav className="navbar-container">
            {/* Left Side: Logo */}
            <div className="design-fabric-logo-text">
                <Link to="/products">DESIGN FABRIC</Link>
            </div>

            {/* Sandwich Menu Icon for Mobile */}
            <div className="mobile-menu-icon" onClick={toggleMenu}>
                <FontAwesomeIcon icon={faBars} />
            </div>

            {/* Middle: Navigation Links */}
            <div className={`navigation-links-section ${isMenuOpen ? 'show-menu' : ''}`}>
                <div className="navigation-links">
                    <Link to="/products">PRODUCTS</Link>
                    <Link to="/shop" >SHOP</Link>
                    <Link to="/latest-arrivals">NEW ARRIVALS</Link>
                </div>
            </div>

            {/* Right Side: Login Button and User Photo */}
            <div className="login-button-section-navbar">
                <Link to="http://localhost:3000/auth/google">
                    <img src={userPhoto} alt="User" />
                </Link>
            </div>
        </nav>
    );
};

export default Navbar;
