import './AppNav.css';
import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

export default class AppNav extends Component {
  render() {
    const { navItems } = this.props;

    return (
      <nav className="app-nav">
        {navItems.map((item, index) => (
          <NavLink 
            key={index} 
            to={item.path}
            className="nav-item"
            activeClassName="active"
          >
            {item.icon && <span className="nav-icon">{item.icon}</span>}
            <span className="nav-label">{item.label}</span>
          </NavLink>
        ))}
      </nav>
    );
  }
}
