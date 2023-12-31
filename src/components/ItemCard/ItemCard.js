import "./ItemCard.css";
import { useContext } from "react";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";

const ItemCard = ({ item, onSelectCard, onCardLikeClick }) => {
  // temp until logic for liked in next sprint(s)

  // identify if Liked
  const { currentUser } = useContext(CurrentUserContext);
  const isLiked = item.likes.some((id) => id === currentUser._id);

  // Decide on style based on ifLiked

  const likeEmptyImgSrc = "/images/likeEmpty.svg";
  const likeClickedImgSrc = "/images/likeClicked.svg";
  const likeImageSrc = isLiked ? likeClickedImgSrc : likeEmptyImgSrc;

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
            src={likeImageSrc}
            className="card__like-button"
            alt="close"
            onClick={() =>
              onCardLikeClick({
                _id: item._id,
                owner: item.owner,
                isLiked: isLiked,
              })
            }
          />
        </div>
      </div>
    </div>
  );
};

export default ItemCard;
