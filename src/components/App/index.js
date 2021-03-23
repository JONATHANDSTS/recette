// == Import npm
import React from 'react';

// == Import
import Recipe from 'src/components/Recipe';
import data from '../../data';

import './styles.css';

// == Composant
const App = () => (
  <div className="app">
    <Recipe recipe={data[0]} />
  </div>
);

// == Export
export default App;
