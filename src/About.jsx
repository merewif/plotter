import React from "react";

const About = () => {
  return (
    <div id="about-container">
      <div
        id="about"
        style={{ textAlign: "justify", fontSize: "1.5rem", hyphens: "auto" }}
      >
        <p
          style={{ textAlign: "center", fontSize: "2rem", fontStyle: "italic" }}
        >
          Hey wordsmith,
        </p>
        <p>
          I have built this site because I really needed a tool to visualize the
          plot and the world I was coming up with, and all the existing sites I
          tried were either far too overcomplicated or behind a paywall.
        </p>
        <p>
          It was also a great practice of learning to code, as it was the first
          web app I wrote using React.
        </p>
        <p>
          If you find any bugs, user experience feedback or have any suggestions
          for new features, feel free to contact me via
          <a
            href="mailto:taborszkib@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Email
          </a>
          or on
          <a
            href="https://twitter.com/ValPasch"
            target="_blank"
            rel="noopener noreferrer"
          >
            Twitter.
          </a>
        </p>
        <p>Now go and plot something awesome.</p>
      </div>
    </div>
  );
};

export default About;
