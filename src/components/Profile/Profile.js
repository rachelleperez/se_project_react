import "./Profile.css";
import SideBar from "../SideBar/SideBar";
import ClothesSection from "../ClothesSection/ClothesSection";

const Profile = ({ itemData, onSelectCard, onCardDelete, onAddNewClick }) => {
  return (
    <div className="profile">
      <SideBar />
      <ClothesSection
        itemData={itemData} //temp: defaultCards
        onAddNewClick={onAddNewClick}
        onSelectCard={onSelectCard}
        onCardDelete={onCardDelete}
      />
    </div>
  );
};

export default Profile;
