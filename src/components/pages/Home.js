import React from "react";
import "../HeroSection.css";
import background from "../../images/main_image.png";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="hero-container">
      <img src={background} className="main-img" />
      <div className="hero-text">
        <h3 className="hero-title"> Summit View Painting</h3>
        <h1 className="hero-title-bold">North Seattle Painting Company</h1>
        <p className="hero-subtitle">
        Summit View  Painting is a highly rated painting company serving Northern
          Western Washington. We are known for our exceptional quality work and
          competitive pricing
        </p>
        <button className="home-btn">
          <Link to="/gallery" className="link">
            View Our Work
          </Link>
        </button>{" "}
        <button className="home-btn">
          <Link to="/contact-us" className="link">
            Get an Estimate
          </Link>
        </button>
      </div>
      <div className="container">
        <div className="box">
          <h2>01</h2>
          <h3>Service One</h3>
          <p>
            Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.Lorem ipsum
            dolor sit amet.Lorem ipsum dolor sit amet.Lorem ipsum dolor sit
            amet.
          </p>
        </div>
      </div>
      <div className="container">
        <div className="box">
          <h2>02</h2>
          <h3>Service Two</h3>
          <p>
            Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.Lorem ipsum
            dolor sit amet.Lorem ipsum dolor sit amet.Lorem ipsum dolor sit
            amet.
          </p>
        </div>
      </div>
      <div className="container">
        <div className="box">
          <h2>03</h2>
          <h3>Service Three</h3>
          <p>
            Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.Lorem ipsum
            dolor sit amet.Lorem ipsum dolor sit amet.Lorem ipsum dolor sit
            amet.
          </p>
        </div>
      </div>
      <div>Services Offered</div>
      <div>Why choose Rossano Painting?</div>
    </div>
  );
}
