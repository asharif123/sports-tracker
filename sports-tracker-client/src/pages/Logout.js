import {useEffect, React} from 'react';
import { useNavigate } from 'react-router-dom';
import {useContext} from "react";
import {CountContext} from "../ContextProvider"; 

const apiEndpoint = process.env.NODE_ENV === "production" ? "https://someappname.herokuapp.com" : "http://localhost:3001";

export const Logout = () => {
    const { state, dispatch } = useContext(CountContext);
    const navigate = useNavigate();
    useEffect(async () => {
        const response = await fetch(apiEndpoint + '/logout', {});

        if (response.ok) {
            dispatch({ type: 'LOGOUT' });
            navigate('/login')
        }
    },
    []) 

    return (
        <div>Logout</div>
    )
}

export default Logout;
