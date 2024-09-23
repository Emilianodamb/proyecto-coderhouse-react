import { useState } from "react";
import CartWidget from "./CartWidget.jsx";
import "./NavBar.css";

function NavBar() {
  const [count, setCount] = useState(0);

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <p>PROductManagement</p>
      </div>
      <ul className="navbar-sections">
        <li><a href="#services">Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#testimonials">Testimonials</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      <CartWidget />
    </nav>
  );
}

export default NavBar;
