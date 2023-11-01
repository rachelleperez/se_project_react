import "./Profile.css";
import SideBar from "../SideBar/SideBar";
import ClothesSection from "../ClothesSection/ClothesSection";

const Profile = ({ cards, onCardClick, onCardDelete, onAddNewClick }) => (
  <div className="profile">
    <section className="profile-sidebar">
      <SideBar />
    </section>
    <secion className="profile-clothes">
      <ClothesSection
        sectionData={cards}
        onAddNewClick={onAddNewClick}
        onCardClick={onCardClick}
        onCardDelete={onCardDelete}
      />
    </secion>
  </div>
);

export default Profile;
