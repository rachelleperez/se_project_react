const ItemModal = ({selectedCard, onClose}) => {
    console.log('item modal');

    const handleClose = (e) => {
        e.preventDefault();
        onClose();
    };

    return (
        <div>
        <div className= {`modal`}>
        <div className='modal__content'>
            <button type='button' onClick={handleClose}>Close</button>
            <img src={selectedCard.link}/>
            <div>{selectedCard.name}</div>
            <div>Weather type: {selectedCard.weather}</div>
        </div>
        </div>
    </div>
    )

}

export default ItemModal