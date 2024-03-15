import React from "react";
import { Link } from "react-router-dom";

export const Header = () => {
    return ( 
        <header className="header">
          <a className="logo-head" alt="Logo"> 
            Calm Calamity
          </a>
          <nav className="nav-bar">
            <ul>
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#gallery">Best Moments</a>
              </li>
              <li>
                <a href="#team">Team</a>
              </li>
              <li>
                <a href="#rules">Rules</a>
              </li>
              <li>
                <a href="#mail">Mail Us</a>
              </li>
              <Link to="/Signup" className="login">Login</Link>
            </ul>
          </nav>
        </header>
    );
}