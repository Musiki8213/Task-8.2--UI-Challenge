
import "./ThirdSection.css";

export const ThirdSection = () => {
  return (
    <div className="third-section">
      <div>
        <div style={{ overflow: "hidden" }}>
          <img
            src="public/bg-pattern-circles.svg"
            alt="icon-supervisor"
            className="circle-img"
          style={{ overflow: "hidden"}}/>
        </div>
        <img
          src="public/illustration-phones.svg"
          alt="icon-supervisor"
          className="phone-img"
        />
      </div>
      <div className="text">
        <h3>State of the Art Infrastructure</h3>
        <p>
          With reliability and speed in mind, worldwide data centers provide the
          <br />
          backbone for ultra-fast connectivity. This ensures your site will load
          <br />
          instantly, no matter where your readers are, keeping your site
          <br />
          competitive.
        </p>
      </div>
    </div>
  );
};
