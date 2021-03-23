import React from 'react';
import './styles.scss';
import PropTypes from 'prop-types';

const Home = () => (
  <div className="home">
    <p> Bienvenue sur le site</p>
    <div className="cards-list">
      <div className="card">
        <img className="card-image" src="https://images.pexels.com/photos/263041/pexels-photo-263041.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" alt="illustration" />
        <div className="card-infos">
          <h3 className="card-title">Titre</h3>
          <p className="card-difficulty">Difficulte: facile</p>
          <a className="active">lien vers la recette</a>
        </div>
      </div>
      <div className="card">
        <img className="card-image" src="https://images.pexels.com/photos/263041/pexels-photo-263041.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" alt="illustration" />
        <div className="card-infos">
          <h3 className="card-title">Titre</h3>
          <p className="card-difficulty">Difficulte: facile</p>
          <a className="active">lien vers la recette</a>
        </div>
      </div>
      <div className="card">
        <img className="card-image" src="https://images.pexels.com/photos/263041/pexels-photo-263041.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" alt="illustration" />
        <div className="card-infos">
          <h3 className="card-title">Titre</h3>
          <p className="card-difficulty">Difficulte: facile</p>
          <a className="active">lien vers la recette</a>
        </div>
      </div>
      <div className="card">
        <img className="card-image" src="https://images.pexels.com/photos/263041/pexels-photo-263041.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" alt="illustration" />
        <div className="card-infos">
          <h3 className="card-title">Titre</h3>
          <p className="card-difficulty">Difficulte: facile</p>
          <a className="active">lien vers la recette</a>
        </div>
      </div>
      <div className="card">
        <img className="card-image" src="https://images.pexels.com/photos/263041/pexels-photo-263041.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" alt="illustration" />
        <div className="card-infos">
          <h3 className="card-title">Titre</h3>
          <p className="card-difficulty">Difficulte: facile</p>
          <a className="active">lien vers la recette</a>
        </div>
      </div>

    </div>
  </div>
);

export default Home;
