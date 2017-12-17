import React from 'react';
import {Link} from 'react-router-dom';
import './Sidebar.css';
import TeamLogo from './images/team-logo.png';
import ap from '../../service/nav';

class Sidebar extends React.Component {

  render() {
    return (
    <div className="Sidebar">
        <div className="team-info">
          <img src={TeamLogo} alt="team logo" />
        </div>
        <div className="category">General</div>
        <ul className="menu">
          <li className="menu-item">
            <Link to="/team/dashboard">Dashboard</Link>
          </li>
          <li className="menu-item">
            <Link to="/team/users">Users</Link>
          </li>
          <li className="menu-item">
            <Link to="/team/posts">Posts</Link>
          </li>
          <li className="menu-item">Settings</li>
          <li className="menu-item">Themes</li>
        </ul>
        <div className="category">Content Management</div>
        <ul className="menu">
          <li className="menu-item">Articles</li>
          <li className="menu-item">Events</li>
          <li className="menu-item">Spotlights</li>
          <li className="menu-item">Pages</li>
          <li className="menu-item">Files & Downloads</li>
          <li className="menu-item">Sponsors</li>
          <li className="menu-item">Advertisements</li>
          <li className="menu-item">Shop</li>
        </ul>
        <div className="category">Media</div>
        <ul className="menu">
          <li className="menu-item">Forums</li>
          <li className="menu-item">Comments</li>
          <li className="menu-item">Galleries</li>
          <li className="menu-item">Videos</li>
          <li className="menu-item">Streams</li>
        </ul>
    </div>
    );
  }
}
export default Sidebar;