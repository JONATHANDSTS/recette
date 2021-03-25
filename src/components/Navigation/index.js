import React from 'react';
import { NavLink} from 'react-router-dom';
import './styles.scss';
import PropTypes from 'prop-types';

const Navigation = ({ list }) => (
  <div className="navigation">
    <NavLink exact className="navigation-link" to="/">Accueil</NavLink>
    {
      list.map((navObject) => (
        <NavLink
          className="navigation-link"
          key={navObject.id}
          to={navObject.slug}
        >
          {navObject.title}
        </NavLink>
      ))
    }
  </div>
);

Navigation.propTypes = {
  list: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      slug: PropTypes.string.isRequired,

    }),
  ).isRequired,
};

export default Navigation;
