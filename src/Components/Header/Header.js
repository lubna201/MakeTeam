import React from 'react';
import './Header.css';
import logo from '../../images/logo.jpg';

const Header = () => {
    return (
        <div className="header">
            <img src={logo}></img>
            <h2 className="header-name">Choose The Best Player For Your Club</h2>
        </div>
    );
};

export default Header;