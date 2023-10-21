import './ItemCard.css';

const ItemCard = ({ item, onSelectCard }) => {
    return (
        <div className='card'>
            <img src={item.link} className='card__image' onClick={() => onSelectCard(item)} />
            <div className='card__content'>
                <div className='card__name'>
                    <span className='card__name-span'>{item.name}</span>
                </div>
            </div>
        </div>
    );
};


export default ItemCard;