import React from 'react';
import { ReactComponent as Logo } from '../../assets/logo.svg';
import { Link } from 'react-router-dom';

import './styles.css';

const Header = () => (
  <header className="header-container">
    <Logo />
    <Link to="/">
      <div className="logo-text">
        <span className="logo-text-first">Big Game</span>
        <span className="logo-text-last"> Survey</span>
      </div>
    </Link>
  </header>
);

export default Header;