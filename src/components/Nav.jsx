import React from 'react';
import { Link } from 'react-router-dom';
import logo_small from '../assets/icons/logo-small.png';
import logo_letter from '../assets/icons/logo-letter.png';
import './nav.css';


const Nav = (props) => {
  return (
    <div className="Nav">
      <div className="logo">
        <img className="logo-icon" src={ logo_small } alt="" />
        <img src={ logo_letter } alt="" />
      </div>
      <div className="nav-links">
        <ul>
          <div className="left-nav-links">
            <Link className="anchor-link" to="/our-team"><li>Our team</li></Link>
            <Link className="anchor-link" to="/tokenomics"><li>Tokens</li></Link>
            <Link className="anchor-link" to="/connect-wallet"><li>Connect wallet</li></Link>
            <Link className="anchor-link" to="/home"><li>Lightpaper</li></Link>
          </div>
          
          <div className="right-nav-links">
            <li>Sign In</li>
            <li>Sign Up</li>
          </div>
        </ul>
      </div>
    </div>
  );
}
 
export default Nav;