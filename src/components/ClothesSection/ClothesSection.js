import "./ClothesSection.css";
import ItemCard from "../ItemCard/ItemCard";

const ClothesSection = ({
  itemData,
  onAddNewClick,
  onSelectCard,
  onCardDelete,
}) => {
  return (
    <div className="clothes-section">
      <div
        className="card_items clothes-section__items"
        id="profile-card-items"
      >
        {itemData.map((item) => (
          // console.log(`item_card_${item._id}`),
          <ItemCard
            key={`item_card_${item._id}`}
            item={item}
            onSelectCard={onSelectCard}
          />
        ))}
      </div>
    </div>
  );
};

export default ClothesSection;
