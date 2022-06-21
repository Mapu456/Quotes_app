import "./Navbar.scss";
import { ImHeart } from "react-icons/im";
import { AiOutlineLogout } from "react-icons/ai";
import { useDispatch } from "react-redux";

const Navbar = () => {
  const dispatch = useDispatch();

  const goToFavorites = () => {
    dispatch({ type: "VIEW_FAVORITE_QUOTES" });
  };

  const logout = () => {
    dispatch({ type: "LOGOUT" });
  }

  return (
    <div className="topnav">
      <div className="title">Quotes Application</div>
      <div className="menu-buttons-container">
        <div className="menu-buttons" onClick={goToFavorites}>
          <ImHeart color="red" size={30}/>
        </div>
        <div className="menu-buttons" onClick={logout}>
          <AiOutlineLogout size={30}/>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
