import "./navbar.css";
function Navbar() {
  return (
    <div>
      <div className="nav-layout">
        <div className="left">
          {/*logo*/}
          <a href="/" className="logo-style">
            <img src="/images/logo.png" alt="Logo" width={80} height={60} />
            <span>MeraEstate</span>
          </a>
          {/*nav items*/}
          <div className="nav-items">
            <a href="/">Home</a>
            <a href="/">About</a>
            <a href="/">Contact</a>
            <a href="/">Agents</a>
          </div>
        </div>
        <div className="right">
          <a href="/login">
            <button className="logIn">Login</button>
          </a>
          <a href="/signup">
            <button className="signUp">Sign Up</button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
