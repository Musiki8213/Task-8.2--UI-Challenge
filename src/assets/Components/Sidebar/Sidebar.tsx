
import React, { useState } from 'react';
import './Sidebar.css'; 
import arrowDown from '/icon-arrow-dark.svg'; 
import arrowUp from '/icon-arrow-dark.svg';     
import closeIcon from '/icon-close.svg'; 

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void; 
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose }) => {

  if (!isOpen) {
    return null;
  }


  const [productOpen, setProductOpen] = useState(false);
  const [companyOpen, setCompanyOpen] = useState(false);
  const [connectOpen, setConnectOpen] = useState(true); 

  return (
    <div className="sidebar-overlay">
      <div className="sidebar">
        <div className="sidebar-header">
          <img src={closeIcon} alt="Close" className="close-icon" onClick={onClose} />
        </div>

        <nav className="sidebar-nav">
          <div className="nav-item">
            <div className="nav-toggle" onClick={() => setProductOpen(!productOpen)}>
              Product <img src={productOpen ? arrowUp : arrowDown} alt="Toggle" className="arrow-icon" />
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
              Company <img src={companyOpen ? arrowUp : arrowDown} alt="Toggle" className="arrow-icon" />
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
              Connect <img src={connectOpen ? arrowUp : arrowDown} alt="Toggle" className="arrow-icon" />
            </div>
            {connectOpen && (
              <ul className="sub-menu connect-sub-menu">
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