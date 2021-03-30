import { connect } from 'react-redux';
import App from '../components/App';
import { fetchRecipes } from '../actions/recipes';
import { checkAuth } from '../actions/user';

const mapState = null;

const mapDispatch = (dispatch) => ({
  checkAuth: () => {
    dispatch(checkAuth());
  },
  fetchRecipe: () => {
    console.log('je vais chercher les datas');
    dispatch(fetchRecipes());
  },
});

export default connect(mapState, mapDispatch)(App);
