import React from "react";
import { Link } from "react-router-dom";
import FooterItem from './FooterItem'
import { footerData } from "./footerData";
import "./footer.css"

const Footer = () => {
  return (
    <div className="footer-container">

      <div className="footer-links">
        <div className="footer-link-wrapper">

          <FooterItem className={"footer-link-items"} data={footerData.Videos}/>


          <FooterItem className={"footer-link-items"} data={footerData.Social_Media}/>
        </div>
        <div className="footer-link-wrapper">
  
          <FooterItem className={"footer-link-items"} data={footerData.About_Us}/>


          <FooterItem className={"footer-link-items"} data={footerData.Contact_Us}/>
        </div>
      </div>
      <section className="social-media">
        <div className="social-media-wrap">
          <div className="footer-logo">
            <Link to="/" className="social-logo">
              BRIGHT SIDE &nbsp;
              <i className="fas fa-route"></i>
            </Link>
          </div>
          <small className="website-rights">Dan 2023</small>
          <div className="social-icons">
            <Link
              className="social-icon-link facebook"
              to="/"
              target="_blank"
              aria-label="Facebook"
            >
              <i className="fab fa-facebook-f" />
            </Link>
            <Link
              className="social-icon-link instagram"
              to="/"
              target="_blank"
              aria-label="Instagrame"
            >
              <i className="fab fa-instagram" />
            </Link>
            <Link
              className="social-icon-link youtube"
              to="/"
              target="_blank"
              aria-label="Youtube"
            >
              <i className="fab fa-youtube" />
            </Link>
            <Link
              className="social-icon-link twitter"
              to="/"
              target="_blank"
              aria-label="Twitter"
            >
              <i className="fab fa-twitter" />
            </Link>
            <Link
              className="social-icon-link linkedin"
              to="/"
              target="_blank"
              aria-label="LinkedIn"
            >
              <i className="fab fa-linkedin" />
            </Link>
          </div>
        </div>
      </section>
  
    </div>
  );
};

export default Footer;
