import './ItemCard.css';

const ItemCard = ({item, onSelectCard}) => {
    // console.log(item)
    return (
        <div className='card'>
            <div className='card__name'>{item.name} </div>
            <div>
                <img src={item.link} className='card__image' onClick={() => onSelectCard(item)}/>
            </div>

        </div>
    );
};

export default ItemCard;