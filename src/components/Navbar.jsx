import "./navbar.css";
import { useState } from "react";
function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <div className="nav-layout">
        <div className="left">
          {/*logo*/}
          <a href="/" className="logo-style">
            <img src="/images/logo.png" alt="Logo" width={80} height={60} />
            <span className="logo-name">MeraEstate</span>
          </a>
          {/*nav items*/}
          <div className="nav-items">
            <a href="/">Home</a>
            <a href="/">About</a>
            <a href="/">Contact</a>
            <a href="/">Agents</a>
          </div>
        </div>
        {!isOpen && (
          <div className="right">
            <a href="/login">
              <button className="logIn">Login</button>
            </a>
            <a href="/signup">
              <button className="signUp">Sign Up</button>
            </a>
          </div>
        )}
        <div className="menu-icon" onClick={() => setIsOpen(!isOpen)}>
          <img src="/images/menu.png" alt="Menu" width={25} height={25} />
        </div>
        {isOpen && (
          <div className="menu">
            <a href="/">Home</a>
            <a href="/">About</a>
            <a href="/">Contact</a>
            <a href="/">Agents</a>
            <a href="/login">Login</a>
            <a href="/signup">Sign Up</a>
          </div>
        )}
      </div>
    </div>
  );
}

export default Navbar;
