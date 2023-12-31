import "./SideBar.css";
import { useContext } from "react";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";

const avatarImagePath = "/images/avatar.svg";

const SideBar = () => {
  const { currentUser } = useContext(CurrentUserContext);
  return (
    <div className="sidebar">
      <div className="sidebar__user">
        <img className="sidebar__avatar" src={currentUser.avatar} alt="user" />
        <p className="sidebar__username">{currentUser.name}</p>
      </div>
    </div>
  );
};

export default SideBar;
