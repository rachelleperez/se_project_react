import "./Header.css";
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";
import { Link } from "react-router-dom";

const logoImagePath = "/images/logo.svg";
const avatarImagePath = "/images/avatar.svg";

const Header = ({ onCreateModal, city }) => {
  // console.log('Header');

  const currentDate = new Date().toLocaleString("default", {
    month: "long",
    day: "numeric",
  });

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
        <div>
          <button
            type="text"
            onClick={onCreateModal}
            className="header__add-clothes-button"
          >
            {" "}
            + Add clothes{" "}
          </button>
        </div>

        <Link className="header__user_name-link" to="/profile">
          <p className="header__user-name">Terrance Tegegne</p>
        </Link>

        <Link to="/profile">
          <img src={avatarImagePath} alt="avatar" />
        </Link>
      </div>
    </header>
  );
};

export default Header;
