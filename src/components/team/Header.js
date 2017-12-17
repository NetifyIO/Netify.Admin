import React from 'react';
import './Header.css';
import NoAvatar from './images/noavatar.jpg';

class Header extends React.Component {

    // props: { page }

  render() {
    return (
        <header className="Header">
            <h1>{ this.props.page }</h1>
            <div className="user">
                <img alt="user avatar" src={NoAvatar} />
                <div className="username">Netyeti</div>
            </div>
        </header>
    );
  }
}
export default Header;