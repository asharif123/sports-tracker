import "./navbar.scss";


export default function Navbar ({ menuOpen, setMenuOpen}) {
  return (
    <>
    <div className= {"navbar "}>
      <div className="wrapper">
          <h1 className="title">
            Sports Dome
          </h1>
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