import CartWidget from "./CartWidget.jsx";
import "./NavBar.css";

function NavBar() {

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <p>TheMobileShop</p>
      </div>
      <CartWidget />
    </nav>
  );
}

export default NavBar;
