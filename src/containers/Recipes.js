import { connect } from 'react-redux';
import Recipe from '../components/Recipe';
import { findRecipeFromSlug } from '../reducers/recipes';

const mapSate = (state, ownProps) => ({
  recipe: findRecipeFromSlug(state.recipes.list, ownProps.match.url) || {},
});

const mapDispatch = null;

export default connect(mapSate, mapDispatch)(Recipe);
