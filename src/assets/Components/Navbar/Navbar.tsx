import { useState } from 'react';
import './Navbar.css';
import Sidebar from '../Sidebar/Sidebar';
import logo from '/logo.svg';
import arrowLight from '/icon-arrow-light.svg';

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
            {/* The logo is now a clickable image */}
            <img 
              src={logo} 
              alt="Blogr Logo" 
              className="navbar-logo" 
              onClick={toggleSidebar} 
            />
          </div>

          <div className="nav-items">
            <div className="nav-item">
              Product
              <img src={arrowLight} alt="arrow" />
            </div>
            <div className="nav-item">
              Company
              <img src={arrowLight} alt="arrow" />
            </div>
            <div className="nav-item">
              Connect
              <img src={arrowLight} alt="arrow" />
            </div>
          </div>

          <div className="nav-auth">
            <p className="nav-login">Login</p>
            <div>
              <button className="btn-signup">Sign Up</button>
            </div>
          </div>

        </div>

        <div className="hero-section">
          <p className="hero-title">A modern publishing platform</p>
          <p className="hero-subtitle">
            Grow your audience and build your online brand
          </p>
          <div className="hero-buttons">
            <button className="btn-free">Start for Free</button>
            <button className="btn-learn">Learn More</button>
          </div>
        </div>
      </nav>

      {/* Conditionally render the Sidebar component */}
      <Sidebar isOpen={isSidebarOpen} onClose={toggleSidebar} />
    </div>
  );
};
