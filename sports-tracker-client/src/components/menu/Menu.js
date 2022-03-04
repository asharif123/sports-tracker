import "./menu.scss";

export default function Menu({ menuOpen, setMenuOpen }) {
  return (

<>
    <div className={"menu " + (menuOpen && "active")}>
        <ul>
            <li onClick={() =>setMenuOpen(false)}>
                <a href="#intro">Home</a>
            </li>
            <li onClick={() =>setMenuOpen(false)}>
                <a href="#">Sports News</a>
            </li>
            <li onClick={() =>setMenuOpen(false)}>
                <a href="#">Game Highlights</a>
            </li>
            <li onClick={() =>setMenuOpen(false)}>
                <a href="#login">Login</a>
            </li>
            <li onClick={() =>setMenuOpen(false)}>
                <a href="#signup">Signup</a>
            </li>
        </ul>
    </div>
</>
  )
}
