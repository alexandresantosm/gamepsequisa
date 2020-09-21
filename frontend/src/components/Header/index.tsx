import React from 'react';
import { ReactComponent as Logo } from '../../assets/logo.svg';

import './styles.css';

const Header = () => (
  <header className="header-container">
    <Logo />
    <div>
      <div className="logo-text">
        <span className="logo-text-first">Big Game</span>
        <span className="logo-text-last"> Survey</span>
      </div>
    </div>
  </header>
);

export default Header;