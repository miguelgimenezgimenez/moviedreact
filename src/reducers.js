// REMOVE-START
import { combineReducers } from 'redux';


const movies = (state={},action) => {

  switch (action.type) {
    case 'ADD_MOVIES':
      return Object.assign({}, state, action.movies);

    case 'TOGGLE_SEEN':

      const newState =Object.assign({},state);
      newState[action.movieId].seen = !newState[action.movieId].seen;
      return newState;


    case 'FILTER_MOVIES':
      console.log(state);

      for (let movie in state) {

        if (state[movie].original_title.includes(action.searchQuery.target.value)) {
        }
      }

    default:
      return state;
  }
};



// Combining both reducers
const reducers = combineReducers({
  movies,

});

export default reducers;
// REMOVE-END
