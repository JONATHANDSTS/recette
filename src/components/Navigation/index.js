import React from 'react';
import './styles.scss';
import PropTypes from 'prop-types';

const Navigation = ({ list }) => (
  <div className="navigation">
    <a className="navigation-link active" href="/">Accueil</a>
    {
      list.map((navObject) => (
        <a
          className="navigation-link"
          key={navObject.i}
          href={navObject.slug}
        >
          {navObject.title}
        </a>
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
