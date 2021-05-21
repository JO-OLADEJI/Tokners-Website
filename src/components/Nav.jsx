import React from 'react';
import { Link } from 'react-router-dom';
import logo_small from '../assets/icons/logo-small.png';
import logo_letter from '../assets/icons/logo-letter.png';


const Nav = (props) => {
  return (
    <div className="Nav">
      <div className="logo">
        <img src={ logo_small } alt="" />
        <img src={ logo_letter } alt="" />
      </div>
      <div className="nav-links">
        <ul>
          <div className="left-nav-links">
            <Link to="/our-team"><li>Our team</li></Link>
            <Link to="/tokenomics"><li>Tokens</li></Link>
            <Link to="/connect-wallet"><li>Connect wallet</li></Link>
            <Link to="/home"><li>Lightpaper</li></Link>
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