import React from 'react';
import {Link} from 'react-router-dom';

import './header.css';

export default class Header extends React.Component {
  render() {
    return (
        <header>
          <nav className="top-menu">
            <ul>
              <li><Link to='/'>Home</Link></li>
              <li><Link to="/forum">Discussion Forum </Link></li>
              <li><Link to="/resources">Resources</Link></li>
              <li><Link to="/deadzone">Dead Zone</Link></li>
            </ul>
          </nav>
        </header>
    )
  }
}