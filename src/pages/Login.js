import Form from "react-bootstrap/Form";
import React, { useState } from 'react';
import { Button } from "react-bootstrap";
import "../pages/styles/Login.css";
// import { checkPassword, validateEmail } from '../utils/helpers';

function Login() {
  const [emailSignup, setEmailSignup] = useState("");
  const [userNameSignup, setUserNameSignup] = useState("");
  const [passwordSignup, setPasswordSignup] = useState("");

  const [emailLogin, setEmailLogin] = useState("");
  const [userNameLogin, setUserNameLogin] = useState("");
  const [passwordLogin, setPasswordLogin] = useState("");

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
    } else if (inputType === "userNameLogin") {
      setUserNameLogin(inputValue);
    } else {
      setPasswordLogin(inputValue);
    }
  };

  const handleFormSignup = (e) => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    e.preventDefault();

    // if (!validateEmail(emailSignup) || !userNameSignup) {
    //   setErrorMessage("Email or username is invalid");
    //   // We want to exit out of this code block if something is wrong so that the user can correct it
    //   return;
    //   // Then we check to see if the password is not valid. If so, we set an error message regarding the password.
    // }
    // if (!checkPassword(passwordSignup)) {
    //   setErrorMessage(`Choose a more secure password for the account: ${userNameSignup}`);
    //   return;
    // }

    // If everything goes according to plan, we want to clear out the input after a successful registration.
    setUserNameSignup("");
    setEmailSignup("");
    setPasswordSignup("");
  };

  const handleFormLogin = (e) => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    e.preventDefault();

    // if (!validateEmail(emailLogin) || !userNameLogin) {
    //   setErrorMessage("Email or username is invalid");
    //   // We want to exit out of this code block if something is wrong so that the user can correct it
    //   return;
    // }

    // If everything goes according to plan, we want to clear out the input after a successful registration.
    setUserNameLogin("");
    setEmailLogin("");
    setPasswordLogin("");
  };

  return (
    <div className="homePage">
      <Form style={{ width: "18rem" }}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Username</Form.Label>
          <Form.Control
            type="text"
            name="userNameSignup"
            value={userNameSignup}
            onChange={handleSignupChange}
            placeholder="Create username"
          />
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
        <Button variant="primary" type="submit" onClick={handleFormSignup}>
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
        <Button variant="primary" type="submit" onClick={handleFormLogin}>
          Login
        </Button>
      </Form>
    </div>
  );
}

export default Login;
