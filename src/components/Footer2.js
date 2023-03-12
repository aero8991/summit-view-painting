import { Link } from "react-router-dom";
import logo3 from "../images/logo3.jpg";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { AiOutlineTwitter } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";

const Footer2 = () => {
  return (
    <footer>
      <div className="container footer_container">
        <article>
          <Link to="/" className="logo">
            <img src={logo3} alt="Footer Logo" />
          </Link>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut laoreet,
            lectus id lacinia ornare, massa lorem condimentum enim, eu
            fringilla.
          </p>
          <div className="footer__socials">
            <a href="https://linkedin.com/" target="_blank" rel="noreferrer noopener"> <FaLinkedin/></a>
            <a href="https://facebook.com/" target="_blank" rel="noreferrer noopener"> <FaFacebookF/></a>
            <a href="https://twitter.com/" target="_blank" rel="noreferrer noopener"> <AiOutlineTwitter/></a>
            <a href="https://instagram.com/" target="_blank" rel="noreferrer noopener"> <AiFillInstagram/></a>
          </div>
        </article>
        <article>
            <h4>Permalinks</h4>
            <Link to="/about">About</Link>
            <Link to="/services">Services</Link>
            <Link to="/gallery">Gallery</Link>
            <Link to="/contact-us">Contact</Link>
        </article>
        <article>
            <h4>Insights</h4>
            <Link to="/s">Blog</Link>
            <Link to="/s">Reviews</Link>
            <Link to="/s">Service Locations</Link>
            <Link to="/s">FAQs</Link>

        </article>
        <article>
        <h4>Get In Touch</h4>
        <Link to="/contact-us">Contact Us</Link>
        <Link to="/s">Support</Link>
        <Link to="/s">Mailing List</Link>

        </article>
      </div>
      <div className="footer__copyright">
            <small> 2023 DR &copy; All Rights Reserverd </small>
      </div>
    </footer>
  );
};

export default Footer2;
