import React from 'react';
import { Link } from 'react-router-dom';

import './header.css';

const Header = () => {
    return (
        <header>
            <div className="header-content">
                {/* Add the logo here */}
               
                <nav>
                    <Link to="/">Home</Link>
                    <Link to="/booking">Book Now</Link>
                </nav>
            </div>
        </header>
    );
};

export default Header;