import { useState } from "react";
import { useSelector } from "react-redux";
import Home from "../home/Home";
import Login from "../login/Login";
import Registration from "../registration/Registration";

const Layout = () => {
  const [showLogin, setShowLogin] = useState(true);
  const { userLoggedIn } = useSelector(
    (state) => state?.authReducer
  );

  const showUserLogin = () => {
    setShowLogin(true);
  };

  const showUserRegistration = () => {
    console.log(showLogin)
    setShowLogin(false);
  };

  return (
    <div>
      {userLoggedIn ? (
        <Home />
      ) : showLogin ? (
        <Login register={showUserRegistration}/>
      ) : (
        <Registration goBackToLogin={showUserLogin} />
      )}
    </div>
  );
};

export default Layout;
