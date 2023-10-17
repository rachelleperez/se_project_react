import './Header.css'

const Header = ({onCreateModal, city}) => {
    console.log('Header');
    
    const currentDate = new Date().toLocaleString('default', { month: 'long', day: 'numeric' });

    return (
      <header className = 'header'>
      <div className = 'header__logo'>
        <div> 
          <img src='./images/logo.svg' alt="logo" />
        </div>
        <div> {currentDate} | {city} </div>
      </div>
      <div className = 'header__avatar-logo'>
        <div>
          <button type= 'text' onClick={onCreateModal}> + Add New Clothes </button>
        </div>
        <div>Name</div>
        <div>
          <img src='./images/avatar.svg' alt="avatar" />
        </div>
      </div>
      </header>
    )

}

export default Header;