// == Import npm
import React from 'react';
import { Route } from 'react-router-dom';
import slugify from 'slugify';

// == Import
import Recipe from 'src/containers/Recipes';
import Home from 'src/containers/Home';
import Navigation from 'src/containers/Navigation';
// import data from '../../data';
import './styles.css';

const slugifyTitle = (titre) => `/recipe/${slugify(titre, { lower: true })}`;

// == Composant
const App = () => (
  <div className="app">
    <Navigation />
    <main className="main">
      <header className="header">recipe</header>
      <Route exact path="/">
        <Home />
      </Route>
      {/* <Route path="/recipe/:slug">
        <Recipe recipe={data[0]} />
      </Route> */}
      {/* <Route
        path="/recipe/:slug"
        render={(routerObject) => {
          // dans un truc il ya tout les parametre durl
          // console.log(routerObject.match.params);
          const { slug } = routerObject.match.params;
          // je peux chercher dans ma liste
          // des recttes qui correspond au slug
          const foundRecipe = data.find((recipeObject) => {
            const recipeUrl = slugifyTitle(recipeObject.title);
            const slugUrl = `/recipe/${slug}`;
            return recipeUrl === slugUrl;
          });

          // je donne lobjet trouve au composant
          return <Recipe recipe={foundRecipe} />;
        }}
      /> */}
      <Route path="/recipe/:slug" component={Recipe} />
    </main>
  </div>
);

// == Export
export default App;
