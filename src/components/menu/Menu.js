import "./menu.scss";
import { NavLink  } from "react-router-dom";


export default function Menu({ menuOpen, setMenuOpen }) {
  return (

<>

    <div className={"menu " + (menuOpen && "active")}>
        <ul>
            <li onClick={() =>setMenuOpen(false)}>
                <NavLink to="/">Home</NavLink>
            </li>
            <li onClick={() =>setMenuOpen(false)}>
                <NavLink to="/media">Sports News</NavLink>
            </li>
            <li onClick={() =>setMenuOpen(false)}>
                <NavLink to="/highlights">Game Highlights</NavLink>
            </li>
            <li onClick={() =>setMenuOpen(false)}>
                <NavLink to="/login">Login</NavLink>
            </li>
            <li onClick={() =>setMenuOpen(false)}>
                <NavLink to="/signup">Signup</NavLink>
            </li>
        </ul>
    </div>
    
</>
  )
}


