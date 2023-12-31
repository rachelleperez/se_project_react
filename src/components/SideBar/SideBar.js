import "./SideBar.css";
import { useContext } from "react";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";

const SideBar = () => {
  const { currentUser } = useContext(CurrentUserContext);

  // manage optional avatar, extract first letter in case it's needed
  const avatarAvailable = currentUser.avatar !== undefined;
  const firstLetterName =
    currentUser.avatar !== undefined && currentUser.name.length > 0
      ? currentUser.name[0]
      : "X"; // X placeholder

  return (
    <div className="sidebar">
      <div className="sidebar__user">
        {avatarAvailable ? (
          <img
            className="sidebar__avatar"
            src={currentUser.avatar}
            alt="user"
          />
        ) : (
          <p className="sidebar__avatar-placeholder">{firstLetterName}</p>
        )}
        <p className="sidebar__username">{currentUser.name}</p>
      </div>
    </div>
  );
};

export default SideBar;
