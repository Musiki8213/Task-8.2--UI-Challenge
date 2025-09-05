
import "./Navbar.css";

export const Navbar = () => {
  return (
    <div className="navbar-wrapper">
      <nav className="navbar">
        <div className="navbar-content">
          <div>
            <img src="/public/logo.svg" alt="React Logo" className="navbar-logo" />
          </div>

          <div className="nav-items">
            <div className="nav-item">
              Product
              <img src="public/icon-arrow-light.svg" alt="arrow" />
            </div>
            <div className="nav-item">
              Company
              <img src="public/icon-arrow-light.svg" alt="arrow" />
            </div>
            <div className="nav-item">
              Connect
              <img src="public/icon-arrow-light.svg" alt="arrow" />
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
    </div>
  );
};
