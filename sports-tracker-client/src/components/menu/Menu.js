import "./menu.scss";

export default function Menu({ menuOpen, setMenuOpen }) {
  return (

<>
    <div className={"menu " + (menuOpen && "active")}>
        <ul>
            <li onClick={() =>setMenuOpen(!menuOpen)}>
                <a href="#intro">Home</a>
            </li>
            <li onClick={() =>setMenuOpen(!menuOpen)}>
                <a href="#">Sports News</a>
            </li>
            <li onClick={() =>setMenuOpen(!menuOpen)}>
                <a href="#">Game Highlights</a>
            </li>
            <li onClick={() =>setMenuOpen(!menuOpen)}>
                <a href="/login">Login/Signup</a>
            </li>
        </ul>
    </div>
</>
  )
}
