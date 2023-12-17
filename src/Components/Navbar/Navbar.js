// Navbar.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link
import './Navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import userPhoto from './user.png'

const Navbar = () => {
    const [isMenuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!isMenuOpen);
    };

    return (
        <nav className="navbar-container">
            {/* Left Side: Logo */}
            <div className="design-fabric-logo-text">
                <Link to="/products">
                    DESIGN FABRIC
                </Link>
            </div>


            {/* Middle: Navigation Links */}
            <div className="navigation-links-section">
                <div className="navigation-links">
                    <a href='#products'>
                        <Link to="/products">
                            <div className="products-link">PRODUCTS</div>
                        </Link>
                    </a>

                    <Link to="/products">
                        <a href='#products'>

                            <div className="shop-link">SHOP</div>

                        </a>

                    </Link>


                    <a href='#latestArrivals'>
                        <Link to="/products">
                            <div className="latest-arrivals-link">NEW ARRIVALS</div>
                        </Link>

                    </a>

                </div>
            </div>


            <div className='login-button-section-navbar'>
                <Link to="http://project-design-fabric-f30ca63e31e3.herokuapp.com/auth/google">
                    <img src={userPhoto}></img>
                    Login
                </Link>
            </div>

        </nav>
    );
};

export default Navbar;
