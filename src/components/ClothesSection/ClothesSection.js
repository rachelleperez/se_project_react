import { useContext } from "react";
import "./ClothesSection.css";
import ItemCard from "../ItemCard/ItemCard";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";

const ClothesSection = ({
  itemData,
  onAddNewClick,
  onSelectCard,
  onCardDelete,
}) => {
  const { currentUser } = useContext(CurrentUserContext);

  return (
    <div className="clothes-section">
      <div className="clothes-section__header ">
        <p className="clothes_section__title">Your Items</p>
        <button
          type="text"
          onClick={onAddNewClick}
          className="header__add-clothes-button clothes-section__add-clothes-button"
        >
          {" "}
          + Add clothes{" "}
        </button>
      </div>
      <div
        className="card_items clothes-section__items"
        id="profile-card-items"
      >
        {itemData
          .filter((item) => item.owner === currentUser._id)
          .map((item) => (
            <ItemCard
              key={`user_item_card_${item._id}`}
              item={item}
              onSelectCard={onSelectCard}
            />
          ))}
      </div>
    </div>
  );
};

export default ClothesSection;
