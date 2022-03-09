import Form from "react-bootstrap/Form";
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Button } from "react-bootstrap";
import { useNavigate } from 'react-router-dom'; 
import "../pages/styles/Login.css";
import LoginCarousel from "../components/loginCarousel/LoginCarousel";
import { checkLoginPassword, validateLoginEmail, checkUserName } from '../utils/helpers';
import {useContext} from "react";
import {CountContext} from "../ContextProvider";

const apiEndpoint = process.env.NODE_ENV === "production" ? "https://someappname.herokuapp.com" : "http://localhost:3001";


function Login() {
  const { state, dispatch } = useContext(CountContext);

  const navigate = useNavigate();
  const [emailSignup, setEmailSignup] = useState("");
  const [userNameSignup, setUserNameSignup] = useState("");
  const [passwordSignup, setPasswordSignup] = useState("");

  const [emailLogin, setEmailLogin] = useState("");
  const [passwordLogin, setPasswordLogin] = useState("");

  //form validation
  const [validated, setValidated] = useState(false);

  const [errorMessage, setErrorMessage] = useState("");

  const handleSignupChange = (e) => {
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    if (inputType === "emailSignup") {
      setEmailSignup(inputValue);
    } else if (inputType === "userNameSignup") {
      setUserNameSignup(inputValue);
    } else {
      setPasswordSignup(inputValue);
    }
  };

  const handleLoginChange = (e) => {
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    if (inputType === "emailLogin") {
      setEmailLogin(inputValue);
    } else {
      setPasswordLogin(inputValue);
    }
  };

  const handleFormSignup = async (e) => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    e.preventDefault();

    if (userNameSignup.length < 6) {
      window.alert("Username must have at least 6 characters!")
    }
    // return; 

    if (!validateLoginEmail(emailSignup) || !userNameSignup) {
      window.alert("Email is invalid format!");
      // We want to exit out of this code block if something is wrong so that the user can correct it
      return;
      // Then we check to see if the password is not valid. If so, we set an error message regarding the password.
    }

    if (!checkLoginPassword(passwordSignup)) {
      window.alert("Password must be at least 8 characters having lowercase, uppercase and special characters!");
      return;
    }

    if (!checkUserName(userNameSignup)) {
      window.alert("Username must be at least 6 characters!");
      return;
    }

    //check if email user entered exists



    if (userNameSignup && emailSignup && passwordSignup) {
        const response = await fetch(apiEndpoint + '/signup', {
            method: 'POST',
            body: JSON.stringify({userNameSignup, emailSignup, passwordSignup}),
            headers: { 'Content-Type': 'application/json' },
        }); 
        const data = await response.json() 
        if (response.ok) {
          console.log("SUCCESS!", data)
          dispatch({ type: 'LOGGIN' });
          navigate('/highlights')
        }
      
    }

    // If everything goes according to plan, we want to clear out the input after a successful registration.
    setUserNameSignup("");
    setEmailSignup("");
    setPasswordSignup("");
  };

  const handleFormLogin = async (e) => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    e.preventDefault();

    if (!validateLoginEmail(emailLogin)) {
      window.alert("Email is invalid format!");
      // We want to exit out of this code block if something is wrong so that the user can correct it
      return;
      // Then we check to see if the password is not valid. If so, we set an error message regarding the password.
    }

    if (!checkLoginPassword(passwordLogin)) {
      window.alert("Password must be at least 8 characters having lowercase, uppercase and special characters!");
      return;
    }

    if (emailLogin && passwordLogin) {
        const response = await fetch(apiEndpoint + '/login', {
            method: 'POST',
            body: JSON.stringify({emailLogin, passwordLogin}),
            headers: { 'Content-Type': 'application/json' },
        });
    const loginData = await response.json() 

    if (response.ok) {
        console.log(loginData);
        dispatch({ type: 'LOGGIN' });
        navigate('/highlights')
      }

    }


    //use sessions to determine if user already exists or if incorrect password
    setEmailLogin("");
    setPasswordLogin("");
  };

  

  return (
    <div className="homePage">
      <Form style={{ width: "18rem" }} >
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Username</Form.Label>
          <Form.Control
            type="text"
            name="userNameSignup"
            required
            value={userNameSignup}
            onChange={handleSignupChange}
            placeholder="Create username"
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            name="emailSignup"
            value={emailSignup}
            onChange={handleSignupChange}
            placeholder="Create email"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            name="passwordSignup"
            value={passwordSignup}
            onChange={handleSignupChange}
            placeholder="Create password"
          />
        </Form.Group>
        <Button variant="secondary" type="submit" onClick={handleFormSignup}>
          Signup
        </Button>
      </Form>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            name="emailLogin"
            value={emailLogin}
            onChange={handleLoginChange}
            placeholder="Enter email"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            name="passwordLogin"
            value={passwordLogin}
            onChange={handleLoginChange}
            placeholder="Enter password"
          />
        </Form.Group>
        <Button variant="secondary" type="submit" onClick={handleFormLogin}>
          Login
        </Button>
      </Form>
      
    </div>
    
  );
}
Login.propTypes = {
  setToken: PropTypes.func.isRequired
};

export default Login;
