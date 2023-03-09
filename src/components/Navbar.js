import { useState } from "react";
import { Button } from "./Button";
import { Link } from "react-router-dom";
import "./Navbar.css";
import DropDown from "./Dropdown";
import logo1 from "../images/logo1.jpg";
import logo2 from "../images/logo2.jpg";
import logo3 from "../images/logo3.jpg";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const [dropDown, setDropDown] = useState(false);

  const handleClick = () => {
    setClick((e) => !click);
  };
  const closeMobileMenu = () => setClick(() => false);

  const handleDropDown = () => {setDropDown(!dropDown)}



  return (
    <nav className="navbar">
      <Link to="/" className="navbar-logo">
      <img src={logo3} className="nav-img-logo" />
      </Link>
      <div className="menu-icon" onClick={handleClick}>
        <i className={click ? "fas fa-times" : "fas fa-bars"} />
      </div>
      <ul className={click ? "nav-menu active" : "nav-menu"}>
        <li className="nav-item">
          <Link to="/" className="nav-links" onClick={closeMobileMenu}>
            Home
          </Link>
        </li>
        <li
          className="nav-item"
          onMouseEnter={()=> setDropDown(true)}
          onMouseLeave={()=> setDropDown(false)}
        >
          <Link to="/services" className="nav-links-item" onClick={handleDropDown}>
            Services <i className="fas fa-caret-down" />
          </Link>
          {dropDown && <DropDown />}
          {/* <DropDown /> */}
        </li>
        <li className="nav-item">
          <Link to="/gallery" className="nav-links" onClick={closeMobileMenu}>
            Gallery
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/about" className="nav-links" onClick={closeMobileMenu}>
            About
          </Link>
        </li>
      </ul>
      <Button />
    </nav>
  );
};

export default Navbar;
