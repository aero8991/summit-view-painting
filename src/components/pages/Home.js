import React from "react";
import "../HeroSection.css";
import background from "../../images/main_image.png";
import { Link } from "react-router-dom";
import Testimonials from "../Testimonials";
import SimpleSlider from "../SimpleSlider";
import Values from "../Values";
import ServicesMain from "../ServicesMain";


export default function Home() {
  return (
    <div className="hero-container">
      <img src={background} className="main-img" />
      <div className="hero-text">
        <h3 className="hero-title"> Summit View Painting</h3>
        <h1 className="hero-title-bold">North Seattle Painting Company</h1>
        <p className="hero-subtitle">
        <b>Summit View Painting</b> is a highly rated painting company serving Northern
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
      <ServicesMain />
      <Values />
      <Testimonials />
      <SimpleSlider />
      <div className="bottom-btn">
      <button className='home-btn'> 
      <Link to="/gallery" classname="link-gallery"> View Project Gallery </Link></button>
      </div>
    </div>
    
  );
}
