import React from 'react';
import './styles.scss';
import PropTypes from 'prop-types';

const Navigation = () => (
  <div className="navigation">
    <a className="navigation-link active" href="#">recette1</a>
    <a className="navigation-link" href="#">recette2</a>
    <a className="navigation-link" href="#">recett3</a>
    <a className="navigation-link" href="#">recette4</a>
  </div>
);

export default Navigation;
