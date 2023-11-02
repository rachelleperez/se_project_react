import "./Profile.css";
import SideBar from "../SideBar/SideBar";
import ClothesSection from "../ClothesSection/ClothesSection";

const Profile = ({ itemData, onSelectCard, onCardDelete, onAddNewClick }) => {
  return (
    <div className="profile">
      This is the profile
      {/* <section className="profile-sidebar">
        <SideBar />
      </section> */}
      <section className="profile-clothes">
        <ClothesSection
          itemData={itemData} //temp: defaultCards
          onAddNewClick={onAddNewClick}
          onSelectCard={onSelectCard}
          onCardDelete={onCardDelete}
        />
      </section>
    </div>
  );
};

export default Profile;
