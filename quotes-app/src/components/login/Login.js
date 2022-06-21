import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Alert } from "react-bootstrap";
import useQuotesAxios from "../../hooks/useQuotesAxios";
import Card from "../hoc/Card";
import "./Login.scss";

const Login = (props) => {
  const [nicknamelog, setNicknamelog] = useState("");
  const [passwordlog, setPasswordlog] = useState("");
  const [areFieldsEmpty, setAreFieldsEmpty] = useState(false);
  const [userExists, setUserExists] = useState(undefined);
  const [correctCredentials, setCorrectCredentials] = useState(undefined);

  const { users } = useSelector((state) => state.userSessionReducer);
  const { userLoggedIn } = useSelector((state) => state?.authReducer);
  const { startOperation } = useQuotesAxios();
  const dispatch = useDispatch();

  useEffect(() => {
    if (userLoggedIn) {
      setAreFieldsEmpty(false);
      setUserExists(undefined);
      correctCredentials(undefined);
    }
  }, [userLoggedIn]);

  function handleLogin(e) {
    e.preventDefault();

    console.log(nicknamelog, passwordlog);

    if (!nicknamelog || !passwordlog) {
      setAreFieldsEmpty(true);
    } else {
      const user = serachForUserNickInCurrentUsers(nicknamelog);
      if (!user) {
        setUserExists(false);
      } else {
        validateUserAndProcessLogin(user);
      }
    }
  }

  function validateUserAndProcessLogin(user) {
    setUserExists(true);
    if (!validUserCredentials(nicknamelog, passwordlog, user)) {
      setCorrectCredentials(false);
    } else {
      setAreFieldsEmpty(false);
      setUserExists(true);
      setCorrectCredentials(true);
      loginHandler(user.id);
    }
  }

  function serachForUserNickInCurrentUsers(nick) {
    const foundUser = users.find((user) => user.nickname === nick);
    return foundUser
      ? {
          id: foundUser.id,
          nickname: foundUser.nickname,
          password: foundUser.password,
        }
      : undefined;
  }

  function validUserCredentials(nicknamelog, passwordlog, user) {
    return nicknamelog === user.nickname && passwordlog === user.password;
  }

  const loginHandler = (userId) => {
    const favoriteQuotesLength = users
      .filter((user) => user.id === userId)
      .map((user) => user.favoriteQuotes)[0].length;

    console.log(favoriteQuotesLength)
    if (favoriteQuotesLength > 0) {
      dispatch({ type: "VIEW_FAVORITE_QUOTES_AFTER_LOGIN" });
    } else {
      dispatch({ type: "VIEW_CATEGORIES" });
    }
    startOperation(); //starts to load the catgories data and favorite quotes data
    dispatch({ type: "SET_CURRENT_CONNECTED_USER", userId: userId });
    dispatch({ type: "ACCEPT_LOGIN" });
  };

  return (
    <div className="login-container">
    <Card width={70} padding={30}>
      <form onSubmit={handleLogin}>
        <h3>Login</h3>
        <div className="form-group">
          <label>Nickname</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter a nickname"
            onChange={(event) => setNicknamelog(event.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Enter a new password"
            onChange={(event) => setPasswordlog(event.target.value)}
          />
        </div>
        <div className="row">
          <button type="submit" className="login-button">Login</button>
        </div>
        <div className="row">
          <button onClick={props.register} className="login-button">Sign Up</button>
        </div>

        {areFieldsEmpty && (
          <Alert color="primary" variant="danger">
            Please fill correctly all fields!
          </Alert>
        )}
        {!userExists && userExists !== undefined ? (
          <Alert color="primary" variant="danger">
            Nickname does not exist!
          </Alert>
        ): null}
        {!correctCredentials && correctCredentials !== undefined? (
          <Alert color="primary" variant="danger">
            Incorrect nickname or password!
          </Alert>
        ):null}
      </form>
    </Card>
    </div>
  );
};

export default Login;
