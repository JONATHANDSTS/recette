import { connect } from 'react-redux';
import App from '../components/App';
import { fetchRecipes } from '../actions/recipes';

const mapState = null;

const mapDispatch = (dispatch) => ({
  fetchRecipe: () => {
    console.log('je vais chercher les datas');
    dispatch(fetchRecipes());
  },
});

export default connect(mapState, mapDispatch)(App);
