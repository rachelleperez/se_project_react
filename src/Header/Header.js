import './Header.css'

const Header = ({onCreateModal, city}) => {
    // console.log('Header');

    const currentDate = new Date().toLocaleString('default', { month: 'long', day: 'numeric' });

    return (
      <header className = 'header'>
      <div className = 'header__logo'>
        <div> 
          <img src='./images/logo.svg' alt="logo" />
        </div>
        <div> {currentDate}, {city} </div>
      </div>
      <div className = 'header__avatar-logo'>
        <div>
          <button type= 'text' onClick={onCreateModal} className = 'header__add-clothes-button'> + Add clothes </button>
        </div>
        <div className = 'header__user-name'>Terrance Tegegne</div>
        <div>
          <img src='./images/avatar.svg' alt="avatar" />
        </div>
      </div>
      </header>
    )

}

export default Header;