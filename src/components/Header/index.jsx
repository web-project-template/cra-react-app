import './index.css';
import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Header extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string
  };

  render() {
    const { title, description } = this.props;

    return (
      <div className="page-header">
        <h2>{title}</h2>
        {description && <p className="page-desc">{description}</p>}
      </div>
    );
  }
}
