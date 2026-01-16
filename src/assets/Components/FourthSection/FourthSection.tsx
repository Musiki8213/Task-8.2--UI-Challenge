import "./FourthSection.css";

export const FourthSection = () => {
  return (
    <div className="fourth-section">
      <div className="fourth-section-content">
        <div className="fourth-section-image">
          <img
            src="/illustration-laptop-desktop.svg"
            alt="Laptop illustration"
            className="desktop-image"
          />
          <img
            src="/illustration-laptop-mobile.svg"
            alt="Laptop illustration"
            className="mobile-image"
          />
        </div>
        <div className="fourth-section-text">
          <div className="text-block">
            <h3>Free, open, simple</h3>
            <p>
              Blogr is a free and open source application backed by a large
              community of helpful developers. It supports features such as code
              syntax highlighting, RSS feeds, social media integration,
              third-party commenting tools, and works seamlessly with Google Analytics. The
              architecture is clean and is relatively easy to learn.
            </p>
          </div>

          <div className="text-block">
            <h3>Powerful tooling</h3>
            <p>
              Batteries included. We built a simple and straightforward CLI tool that
              makes customization and deployment a breeze, but capable of
              producing even the most complicated sites.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
