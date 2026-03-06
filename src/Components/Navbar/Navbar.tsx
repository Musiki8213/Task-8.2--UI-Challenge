import { useState } from 'react';
import './Navbar.css';
import Sidebar from '../Sidebar/Sidebar';
import logo from '/logo.svg';
import arrowLight from '/icon-arrow-light.svg';
import hamburgerIcon from '/icon-hamburger.svg';

export const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="navbar-wrapper">
      <nav className="navbar">
        <div className="navbar-content">
          <div className="navbar-logo-container">
            <img 
              src={logo} 
              alt="Blogr Logo" 
              className="navbar-logo" 
            />
          </div>

          <div className="nav-items">
            <div className="nav-item">
              Product
              <img src={arrowLight} alt="arrow" className="nav-arrow" />
            </div>
            <div className="nav-item">
              Company
              <img src={arrowLight} alt="arrow" className="nav-arrow" />
            </div>
            <div className="nav-item">
              Connect
              <img src={arrowLight} alt="arrow" className="nav-arrow" />
            </div>
          </div>

          <div className="nav-auth">
            <p className="nav-login">Login</p>
            <button className="btn-signup">Sign Up</button>
          </div>

          <button className="hamburger-menu" onClick={toggleSidebar}>
            <img src={hamburgerIcon} alt="Menu" />
          </button>
        </div>

        <div className="hero-section">
          <h1 className="hero-title">A modern publishing platform</h1>
          <p className="hero-subtitle">
            Grow your audience and build your online brand
          </p>
          <div className="hero-buttons">
            <button className="btn-free">Start for Free</button>
            <button className="btn-learn">Learn More</button>
          </div>
        </div>
      </nav>

      <Sidebar isOpen={isSidebarOpen} onClose={toggleSidebar} />
    </div>
  );
};
