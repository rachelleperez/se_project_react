import "./Header.css";
import logoImage from "./images/logo.svg";
import avatarImage from "./images/avatar.svg";

const Header = ({ onCreateModal, city }) => {
  // console.log('Header');

  const currentDate = new Date().toLocaleString("default", {
    month: "long",
    day: "numeric",
  });

  return (
    <header className="header">
      <div className="header__logo">
        <div>
          <img src={logoImage} alt="logo" />
        </div>
        <div>
          {" "}
          {currentDate}, {city}{" "}
        </div>
      </div>
      <div className="header__avatar-logo">
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
        <div className="header__user-name">Terrance Tegegne</div>
        <div>
          <img src={avatarImage} alt="avatar" />
        </div>
      </div>
    </header>
  );
};

export default Header;
