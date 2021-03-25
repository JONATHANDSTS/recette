import { connect } from 'react-redux';
import Navigation from '../components/Navigation';
import { getNavFromRecipes } from '../reducers/recipes';

const mapSate = (state) => ({
  list: getNavFromRecipes(state.recipes.list),

});

const mapDispatch = null;

export default connect(mapSate, mapDispatch)(Navigation);
