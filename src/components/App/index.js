// == Import npm
import React from 'react';
import { Route } from 'react-router-dom';
import slugify from 'slugify';

// == Import
import Recipe from 'src/components/Recipe';
import Home from 'src/components/Home';
import Navigation from 'src/components/Navigation';
import data from '../../data';
import './styles.css';

const navList = data.map((dataObject) => ({
  id: dataObject.id,
  title: dataObject.title,
  slug: `/recipe/${slugify(dataObject.title, { lower: true })}`,
}));

const homeData = data.map((dataObject) => ({
  id: dataObject.id,
  title: dataObject.title,
  slug: `/recipe/${slugify(dataObject.title, { lower: true })}`,
  image: dataObject.thumbnail,
  difficulty: dataObject.difficulty,
}));

// == Composant
const App = () => (
  <div className="app">
    <Navigation list={navList} />
    <main className="main">
      <header className="header">recipe</header>
      <Route exact path="/">
        <Home list={homeData} />
      </Route>
      <Route path="/recipe/:slug">
        <Recipe recipe={data[0]} />
      </Route>
    </main>
  </div>
);

// == Export
export default App;
