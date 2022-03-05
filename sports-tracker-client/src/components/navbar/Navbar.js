import "./navbar.scss";


export default function Navbar ({ menuOpen, setMenuOpen}) {
  return (
    <>
    <div className= {"navbar "}>
      <div className="wrapper">
        <div className="left">
          <a href="#" alt = "loading" className="logo">
            Sports Dome
          </a>
        </div>
        <div className="right">
          <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>
      </div>
    </>

);
}