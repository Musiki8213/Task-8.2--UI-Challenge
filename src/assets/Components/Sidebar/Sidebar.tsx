import React, { useState } from 'react';
import './Sidebar.css'; 
import arrowDown from '/icon-arrow-dark.svg'; 
import closeIcon from '/icon-close.svg'; 
import logo from '/logo.svg';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void; 
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose }) => {
  const [productOpen, setProductOpen] = useState(false);
  const [companyOpen, setCompanyOpen] = useState(false);
  const [connectOpen, setConnectOpen] = useState(false); 

  if (!isOpen) {
    return null;
  }

  return (
    <div className="sidebar-overlay" onClick={onClose}>
      <div className="sidebar" onClick={(e) => e.stopPropagation()}>
        <div className="sidebar-header">
          <img src={logo} alt="Blogr" className="sidebar-logo" />
          <img src={closeIcon} alt="Close" className="close-icon" onClick={onClose} />
        </div>

        <nav className="sidebar-nav">
          <div className="nav-item">
            <div className="nav-toggle" onClick={() => setProductOpen(!productOpen)}>
              Product 
              <img 
                src={arrowDown} 
                alt="Toggle" 
                className={`arrow-icon ${productOpen ? 'rotated' : ''}`} 
              />
            </div>
            {productOpen && (
              <ul className="sub-menu">
                <li>Overview</li>
                <li>Pricing</li>
                <li>Marketplace</li>
                <li>Features</li>
                <li>Integrations</li>
              </ul>
            )}
          </div>

          <div className="nav-item">
            <div className="nav-toggle" onClick={() => setCompanyOpen(!companyOpen)}>
              Company 
              <img 
                src={arrowDown} 
                alt="Toggle" 
                className={`arrow-icon ${companyOpen ? 'rotated' : ''}`} 
              />
            </div>
            {companyOpen && (
              <ul className="sub-menu">
                <li>About</li>
                <li>Team</li>
                <li>Blog</li>
                <li>Careers</li>
              </ul>
            )}
          </div>

          <div className="nav-item">
            <div className="nav-toggle" onClick={() => setConnectOpen(!connectOpen)}>
              Connect 
              <img 
                src={arrowDown} 
                alt="Toggle" 
                className={`arrow-icon ${connectOpen ? 'rotated' : ''}`} 
              />
            </div>
            {connectOpen && (
              <ul className="sub-menu">
                <li>Contact</li>
                <li>Newsletter</li>
                <li>LinkedIn</li>
              </ul>
            )}
          </div>
        </nav>

        <div className="sidebar-footer">
          <button className="login-button">Login</button>
          <button className="signup-button">Sign Up</button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar; 