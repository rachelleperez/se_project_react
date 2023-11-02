import "./SideBar.css";

const avatarImagePath = "/images/avatar.svg";

const SideBar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar__user">
        <img
          className="sidebar__avatar"
          src={avatarImagePath}
          alt="user image"
        />
        <p className="sidebar__username">Terrence Tegegne</p>
      </div>
    </div>
  );
};

export default SideBar;
