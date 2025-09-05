
import "./FourthSection.css";

export const FourthSection = () => {
  return (
    <div className="fourth-section">
      <div>
        <img
          src="public/illustration-laptop-desktop.svg"
          alt=""
        />
      </div>
      <div className="text">
        <h3>Free, open, simple</h3>
        <p>
          Blogr is a free and open source application backed by a large
          <br />
          community of helpful developers. It supports features such as code
          <br />
          syntax highlighting, RSS feeds, social media integration,
          third-party
          <br />
          commenting tools, and works seamlessly with Google Analytics. The
          <br />
          architecture is clean and is relatively easy to learn.
        </p>

        <br />
        <h3>Powerful tooling</h3>
        <p>
          Batteries included. We built a simple and straightforward CLI tool
          that
          <br />
          makes customization and deployment a breeze, but capable of
          <br />
          producing even the most complicated sites.
        </p>
      </div>
    </div>
  );
};
