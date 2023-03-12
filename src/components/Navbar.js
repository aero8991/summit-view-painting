import { useState } from "react";
import { Button } from "./Button";
import { Link, NavLink} from "react-router-dom";
import "./Navbar.css";
import DropDown from "./Dropdown"; 
import logo3 from "../images/logo3.jpg";


const Navbar = () => {
  const [click, setClick] = useState(true);
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
      <ul className="nav-menu">
        <li className="nav-item">
          <NavLink to="/" className={({isActive}) => isActive ? 'active-nav' : ''} onClick={closeMobileMenu}>
            Home
          </NavLink>
        </li>
        <li
          className="nav-item"
          onMouseEnter={()=> setDropDown(true)}
          onMouseLeave={()=> setDropDown(false)}
        >
          <NavLink to="/services" className={({isActive}) => isActive ? 'active-nav' : ''} onClick={handleDropDown}>
            Services <i className="fas fa-caret-down" />
          </NavLink>
          {dropDown && <DropDown />}
          {/* <DropDown /> */}
        </li>
        <li className="nav-item">
          <NavLink to="/gallery" className={({isActive}) => isActive ? 'active-nav' : ''} onClick={closeMobileMenu}>
            Gallery
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/about" className={({isActive}) => isActive ? 'active-nav' : ''} onClick={closeMobileMenu}>
            About
          </NavLink>
        </li>
      </ul>
      <Button />
    </nav>
  );
};

export default Navbar;
