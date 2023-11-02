import "./ClothesSection.css";
import ItemCard from "../ItemCard/ItemCard";

const ClothesSection = ({
  itemData,
  onAddNewClick,
  onSelectCard,
  onCardDelete,
}) => {
  return (
    <div className="card_items" id="card-items">
      {itemData.map((item) => (
        // console.log(`item_card_${item._id}`),
        <ItemCard
          key={`item_card_${item._id}`}
          item={item}
          onSelectCard={onSelectCard}
        />
      ))}
    </div>
  );
};

export default ClothesSection;
