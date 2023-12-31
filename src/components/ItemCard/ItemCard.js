import "./ItemCard.css";

const ItemCard = ({ item, onSelectCard, onCardLikeClick }) => {
  // temp until logic for liked in next sprint(s)
  const likeSrc = "/images/likeEmpty.svg";

  return (
    <div className="card">
      <img
        src={item.imageUrl}
        className="card__image"
        alt={item.name}
        onClick={() => onSelectCard(item)}
      />
      <div className="card__content">
        <div className="card__name">
          <p className="card__name-span">{item.name}</p>
          <img
            src={likeSrc}
            className="card__like-button"
            alt="close"
            onClick={onCardLikeClick}
          />
        </div>
      </div>
    </div>
  );
};

export default ItemCard;
