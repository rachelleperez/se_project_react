import './ItemCard.css';

const ItemCard = ({item, onSelectCard}) => {
    // console.log(item)
    return (
        <div>
            <div>
                <img src={item.link} className='card_image' onClick={() => onSelectCard(item)}/>
            </div>
            <div className='card_name'>{item.name} </div>
        </div>
    );
};

export default ItemCard;