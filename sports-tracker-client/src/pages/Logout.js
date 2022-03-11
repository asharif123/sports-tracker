import {useEffect, React} from 'react';
import { useNavigate } from 'react-router-dom';
import {useContext} from "react";
import {CountContext} from "../ContextProvider"; 
import "./styles/Logout.css"

const apiEndpoint = process.env.NODE_ENV === "production" ? "https://someappname.herokuapp.com" : "http://localhost:3001";

export const Logout = () => {
    const { state, dispatch } = useContext(CountContext);
    const navigate = useNavigate();
    const logout = async () => {
        const response = await fetch(apiEndpoint + '/logout', {});

        if (response.ok) {
            dispatch({ type: 'LOGOUT' });
            navigate('/login')
        }
    }

    return (
        <div className='logout'>
            <h3> See you soon, Sports fan! </h3>
        <button className='logoutBtn' onClick={logout}>Logout</button>
        </div>
    )
}

export default Logout;
