import "./ThirdSection.css";

export const ThirdSection = () => {
  return (
    <div className="third-section">
      <div className="third-section-content">
        <div className="third-section-images">
          <img
            src="/bg-pattern-circles.svg"
            alt="Background pattern"
            className="circle-img"
          />
          <img
            src="/illustration-phones.svg"
            alt="Phones illustration"
            className="phone-img"
          />
        </div>
        <div className="third-section-text">
          <h3>State of the Art Infrastructure</h3>
          <p>
            With reliability and speed in mind, worldwide data centers provide the
            backbone for ultra-fast connectivity. This ensures your site will load
            instantly, no matter where your readers are, keeping your site
            competitive.
          </p>
        </div>
      </div>
    </div>
  );
};
