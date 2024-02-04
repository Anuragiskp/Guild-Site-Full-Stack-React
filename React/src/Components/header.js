import React from "react";

export const Header = () => {
    return ( 
        <header className="header">
          <a href="/Site.html" className="logo-head" alt="Logo">
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
              <li>
                <a href="#login">Login</a>
              </li>
            </ul>
          </nav>
        </header>
    );
}