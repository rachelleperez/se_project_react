import "./Header.css";
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
      <div className="header__logo">
        <div>
          <img src={logoImagePath} alt="logo" />
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
        <p className="header__user-name">Terrance Tegegne</p>
        <div>
          <img src={avatarImagePath} alt="avatar" />
        </div>
      </div>
    </header>
  );
};

export default Header;
