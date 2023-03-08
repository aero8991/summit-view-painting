import { Link } from "react-router-dom";
import "./Button.css";

export function Button() {
  return (
    <Link to="contact-us">
      <button className="btn">Free Estimate</button>
    </Link>
  );
}
