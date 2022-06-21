import React, { useState } from "react";
import { Alert } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { v4 as uuid } from "uuid";
import Card from "../hoc/Card"
import "./Registration.scss";

function Registration(props) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [nickname, setNickname] = useState("");
  const [password, setPassword] = useState("");
  const [areFieldsIncorrect, setAreFieldsIncorrect] = useState(false);
  const dispatch = useDispatch();

  function handleFormSubmit(e) {
    e.preventDefault();
    console.log(name, email, password, nickname);
    if (!name || !email || !nickname || !password) {
      setAreFieldsIncorrect(true);
    } else {
      setAreFieldsIncorrect(false);
      dispatch({
        type: "ADD_USER",
        user: {
          id: uuid(),
          nickname: nickname,
          password: password, //TODO this must be encrypted, also should be stored in DB in real life, there is a high risk if saving in localstorage
          email: email,
          name: name,
          favoriteQuotes: [],
        },
      });
      goBackToLogin();
    }
  }

  function goBackToLogin() {
    props.goBackToLogin();
  }
  return (
    <div className="login-container">
      <Card width={40} padding={30}>
        <div>
          <form onSubmit={handleFormSubmit}>
            <h3>Register</h3>
            <div className="form-group">
              <label>Name</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter full name"
                onChange={(event) => setName(event.target.value)}
              />
            </div>
            <div className="form-group">
              <label>Email</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter full email"
                onChange={(event) => setEmail(event.target.value)}
              />
            </div>
            <div className="form-group">
              <label>Nickname</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter a nickname"
                onChange={(event) => setNickname(event.target.value)}
              />
            </div>
            <div className="form-group">
              <label>Password</label>
              <input
                type="password"
                className="form-control"
                placeholder="Enter a new password"
                onChange={(event) => setPassword(event.target.value)}
              />
            </div>
            <div className="row">
              <button type="submit" className="register-button">Register</button>
            </div>
            <p className="forgot-password text-right">
              Already registered?{" "}
              <a href="#" onClick={goBackToLogin}>
                log in
              </a>
            </p>
            {areFieldsIncorrect && (
              <Alert color="primary" variant="danger">
                Please fill all fields!
              </Alert>
            )}
          </form>
        </div>
      </Card>
    </div>
  );
}

export default Registration;
