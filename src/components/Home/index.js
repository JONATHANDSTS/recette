import React from 'react';
import { Link } from 'react-router-dom';
import './styles.scss';
import PropTypes, { shape } from 'prop-types';

const Home = ({ list }) => (
  <div className="home">
    <p> Bienvenue sur le site</p>
    <div className="cards-list">
      {
        list.map((cardObject) => (
          <div className="card" key={cardObject.id}>
            <img
              className="card-image"
              src={cardObject.image}
              alt="illustration"
            />
            <div className="card-infos">
              <h3 className="card-title">{cardObject.title}</h3>
              <p className="card-difficulty">difficulte: {cardObject.difficulty}</p>
              <Link to={cardObject.slug} className="active">lien vers la recette</Link>
            </div>

          </div>
        ))
      }

    </div>
  </div>
);

Home.propTypes = {
  list: PropTypes.arrayOf(shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
    difficulty: PropTypes.string.isRequired,

  })).isRequired,
};

export default Home;
