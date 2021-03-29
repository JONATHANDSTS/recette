// == Import npm
import React, { useEffect } from 'react';
import { Route } from 'react-router-dom';

// == Import
import Recipe from 'src/containers/Recipes';
import Home from 'src/containers/Home';
import Navigation from 'src/containers/Navigation';
import Error from 'src/containers/Error';
import LoginForm from 'src/components/LoginForm';
// import data from '../../data';
import './styles.css';

// == Composant
const App = ({ fetchRecipe }) => {
  useEffect(fetchRecipe, []);
  return (
    <div className="app">
      <Navigation />
      <main className="main">
        <header className="header">recipe
          <LoginForm
            email="email@tets.fr"
            password="qwerty"
            isLogged={false}
            loggedMessage="bienvenue lulu"
            changeField={(value, name) => {
              console.log('changefield', value, name);
            }}
            handleLogin={() => {
              console.log('login');
            }}
            handleLogout={() => {
              console.log('logout');
            }}
          />
        </header>
        <Error />
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/recipe/:slug" component={Recipe} />
      </main>
    </div>
  );
};

// == Export
export default App;
