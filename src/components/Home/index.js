import React from 'react';
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
              <a href={cardObject.slug} className="active">lien vers la recette</a>
            </div>

          </div>
        ))
      }

    </div>
  </div>
);

Home.propTypes = {
  list: PropTypes.arrayOf(shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
    difficulty: PropTypes.string.isRequired,

  })).isRequired,
};

export default Home;
