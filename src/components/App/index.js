// == Import npm
import React from 'react';

// == Import
import Recipe from 'src/components/Recipe';
import Home from 'src/components/Home';
import Navigation from 'src/components/Navigation';
import data from '../../data';

import './styles.css';

// == Composant
const App = () => (
  <div className="app">
    <Navigation />
    <main className="main">
      <header className="header">recipe</header>
      <Home />
      {/* <Recipe recipe={data[0]} /> */}
    </main>
  </div>
);

// == Export
export default App;
