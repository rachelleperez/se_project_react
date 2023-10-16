import './ItemCard.css';

const ItemCard = ({x}) => {
    // console.log(x)
    return (
        <div>
            <div>
                <img src={x.link} className='card_image' />
            </div>
            <div className='card_name'>{x.name} </div>
        </div>
    );
};

export default ItemCard;