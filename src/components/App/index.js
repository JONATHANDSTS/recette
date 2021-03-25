// == Import npm
import React from 'react';
import { Route } from 'react-router-dom';
import slugify from 'slugify';

// == Import
import Recipe from 'src/components/Recipe';
import Home from 'src/components/Home';
import Navigation from 'src/containers/Navigation';
import data from '../../data';
import './styles.css';

const slugifyTitle = (titre) => `/recipe/${slugify(titre, { lower: true })}`;



const homeData = data.map((dataObject) => ({
  id: dataObject.id,
  title: dataObject.title,
  slug: slugifyTitle(dataObject.title),
  image: dataObject.thumbnail,
  difficulty: dataObject.difficulty,
}));

// == Composant
const App = () => (
  <div className="app">
    <Navigation />
    <main className="main">
      <header className="header">recipe</header>
      <Route exact path="/">
        <Home list={homeData} />
      </Route>
      {/* <Route path="/recipe/:slug">
        <Recipe recipe={data[0]} />
      </Route> */}
      <Route
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
      />
    </main>
  </div>
);

// == Export
export default App;
