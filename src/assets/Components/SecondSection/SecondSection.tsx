
import "./SecondSection.css";

export const SecondSection = () => {
  return (
    <section className="second-section">
      <h2>Designed for the future</h2>

      <div className="second-section-content">
        <div className="second-section-texts">
          <h3>Introducing an extensivle editor</h3>
          <p>
            Blogr features an exceedingly intuitive interface which lets you
            focus <br />
            on one thing: creating content. The editor supports management of{" "}
            <br />
            multiple blogs and allows easy manipulation of embeds such as
            images, <br />
            videos, and Markdown. Extensibility with plugins and themes provide{" "}
            <br />
            easy ways to add functionality or change the looks of a blog.
          </p>

          <h3>Robust content management</h3>
          <p>
            Flexible content management enables users to easily move through{" "}
            <br />
            posts. Increase the usability of your blog by adding customized{" "}
            <br />
            categories, sections, format, or flow. With this functionality,
            you’re in <br />
            full control.
          </p>
        </div>

        <div>
          <img
            src="public/illustration-editor-desktop.svg"
            alt="desktopImage"
          />
        </div>
      </div>
    </section>
  );
};
