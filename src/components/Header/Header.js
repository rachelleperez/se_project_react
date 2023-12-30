import "./Header.css";
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";

const logoImagePath = "/images/logo.svg";
const avatarImagePath = "/images/avatar.svg";

const Header = ({ onCreateModal, onLoginModal, onSignupModal, city }) => {
  // console.log('Header');

  const currentDate = new Date().toLocaleString("default", {
    month: "long",
    day: "numeric",
  });

  const { isLoggedIn } = useContext(CurrentUserContext);
  console.log(isLoggedIn);

  const rightMenuSelector = () => {};

  return (
    <header className="header">
      <div className="header__left">
        <Link to="/">
          <img src={logoImagePath} alt="logo" />
        </Link>
        <div>
          {" "}
          {currentDate}, {city}{" "}
        </div>
      </div>
      <div className="header__right">
        <ToggleSwitch />

        {isLoggedIn ? (
          // Content to render when isLoggedIn is true
          <>
            <div>
              <button
                type="text"
                onClick={onCreateModal}
                className="header__add-clothes-button"
              >
                + Add clothes
              </button>
            </div>

            <Link className="header__user_name-link" to="/profile">
              <p className="header__user-name">Terrance Tegegne</p>
            </Link>

            <Link to="/profile">
              <img src={avatarImagePath} alt="avatar" />
            </Link>
          </>
        ) : (
          // Content to render when isLoggedIn is false
          <>
            <div>
              <button
                type="text"
                onClick={onSignupModal}
                className="header__add-clothes-button"
              >
                Sign Up
              </button>
            </div>

            <div>
              <button
                type="text"
                onClick={onLoginModal}
                className="header__add-clothes-button"
              >
                Log In
              </button>
            </div>
          </>
        )}
      </div>
    </header>
  );
};

export default Header;
