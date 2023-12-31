import "./Profile.css";
import SideBar from "../SideBar/SideBar";
import ClothesSection from "../ClothesSection/ClothesSection";

const Profile = ({
  itemData,
  onSelectCard,
  onCardDelete,
  onAddNewClick,
  onEditProfileClick,
  onCardLikeClick,
  onLogout,
}) => {
  return (
    <div className="profile">
      <SideBar onEditProfileClick={onEditProfileClick} onLogout={onLogout} />
      <ClothesSection
        itemData={itemData} //temp: defaultCards
        onAddNewClick={onAddNewClick}
        onSelectCard={onSelectCard}
        onCardDelete={onCardDelete}
        onCardLikeClick={onCardLikeClick}
      />
    </div>
  );
};

export default Profile;
